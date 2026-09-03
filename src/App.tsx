/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  PracticeMode, 
  InputMode, 
  SessionType, 
  SentenceItem, 
  UserStats 
} from './types';
import { 
  allSentences, 
  getSentencesByMode, 
  createBalancedQueue 
} from './data/allSentences';
import { CategorySelector } from './components/CategorySelector';
import { PracticeCard } from './components/PracticeCard';
import { StatsBar } from './components/StatsBar';
import { GrammarTable } from './components/GrammarTable';
import { MistakesReviewModal } from './components/MistakesReviewModal';
import { CelebrationModal } from './components/CelebrationModal';
import { GraduationCap, BookOpen, Sparkles, Shuffle, CheckCircle, RefreshCw } from 'lucide-react';

const STATS_STORAGE_KEY = 'pronoun_master_stats_v1';

export default function App() {
  // Mode & Configuration State
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('personal');
  const [inputMode, setInputMode] = useState<InputMode>('type');
  const [sessionType, setSessionType] = useState<SessionType>('endless');

  // Modals
  const [isGrammarOpen, setIsGrammarOpen] = useState(false);
  const [isMistakesOpen, setIsMistakesOpen] = useState(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);

  // Stats State
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STATS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      totalAnswered: 0,
      correctAnswered: 0,
      streak: 0,
      bestStreak: 0,
      history: [],
      mistakeIds: []
    };
  });

  // Save stats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
    } catch {
      // ignore
    }
  }, [stats]);

  // Queue of active sentences
  const [activeQueue, setActiveQueue] = useState<SentenceItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sprintScore, setSprintScore] = useState(0);

  // Keep a ref of mistakeIds so answering questions does not cause initializeSet to re-run
  const mistakeIdsRef = useRef(stats.mistakeIds);
  useEffect(() => {
    mistakeIdsRef.current = stats.mistakeIds;
  }, [stats.mistakeIds]);

  // Initialize or re-shuffle question set
  const initializeSet = useCallback((mode: PracticeMode, type: SessionType) => {
    let pool: SentenceItem[] = [];

    if (type === 'mistakes') {
      const mistakeSet = new Set(mistakeIdsRef.current);
      pool = allSentences.filter(s => mistakeSet.has(s.id));
      if (pool.length === 0) {
        pool = getSentencesByMode(mode);
      }
    } else {
      pool = getSentencesByMode(mode);
    }

    let targetCount: number | undefined = undefined;
    if (type === 'sprint10') targetCount = Math.min(10, pool.length);
    if (type === 'sprint25') targetCount = Math.min(25, pool.length);
    if (type === 'sprint50') targetCount = Math.min(50, pool.length);

    const balancedQueue = createBalancedQueue(pool, targetCount);

    setActiveQueue(balancedQueue);
    setCurrentIndex(0);
    setSprintScore(0);
  }, []);

  // Rebuild queue ONLY when mode or session type explicitly changes
  useEffect(() => {
    initializeSet(practiceMode, sessionType);
  }, [practiceMode, sessionType, initializeSet]);

  const currentSentence = activeQueue[currentIndex];

  const handleModeChange = (mode: PracticeMode) => {
    setPracticeMode(mode);
    if (sessionType === 'mistakes') {
      setSessionType('endless');
    }
  };

  const handleSessionTypeChange = (type: SessionType) => {
    setSessionType(type);
  };

  // Handle Answer Submission
  const handleAnswer = (userAnswer: string, isCorrect: boolean) => {
    if (!currentSentence) return;

    setStats(prev => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);
      const newMistakeIds = isCorrect
        ? prev.mistakeIds.filter(id => id !== currentSentence.id)
        : prev.mistakeIds.includes(currentSentence.id)
          ? prev.mistakeIds
          : [...prev.mistakeIds, currentSentence.id];

      return {
        totalAnswered: prev.totalAnswered + 1,
        correctAnswered: prev.correctAnswered + (isCorrect ? 1 : 0),
        streak: newStreak,
        bestStreak: newBestStreak,
        history: [
          ...prev.history,
          {
            sentenceId: currentSentence.id,
            userAnswer,
            isCorrect,
            timestamp: Date.now()
          }
        ],
        mistakeIds: newMistakeIds
      };
    });

    if (isCorrect) {
      setSprintScore(prev => prev + 1);
    }
  };

  // Move to next question
  const handleNext = () => {
    const isSprint = ['sprint10', 'sprint25', 'sprint50'].includes(sessionType);
    const isLastInQueue = currentIndex >= activeQueue.length - 1;

    if (isSprint && isLastInQueue) {
      // Sprint complete -> Show celebration modal
      setIsCelebrationOpen(true);
    } else if (isLastInQueue) {
      // In endless mode, refresh pool seamlessly with balanced variety
      const freshPool = createBalancedQueue(getSentencesByMode(practiceMode));
      setActiveQueue(freshPool);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Reset Stats
  const handleResetStats = () => {
    if (window.confirm('Weet je zeker dat je alle scorestatistieken wilt resetten?')) {
      setStats({
        totalAnswered: 0,
        correctAnswered: 0,
        streak: 0,
        bestStreak: 0,
        history: [],
        mistakeIds: []
      });
    }
  };

  // Mistakes sentences lookup
  const mistakeSentences = useMemo(() => {
    const mistakeSet = new Set(stats.mistakeIds);
    return allSentences.filter(s => mistakeSet.has(s.id));
  }, [stats.mistakeIds]);

  const totalPersonal = allSentences.filter(s => s.category === 'personal').length;
  const totalPossessive = allSentences.filter(s => s.category === 'possessive').length;
  const totalMixed = allSentences.length;

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-900 flex flex-col justify-between selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                English Pronoun Master
              </h1>
              <div className="text-xs text-slate-500 font-medium">
                Gymnasium Jaar 1 • {allSentences.length}+ Eenduidige Zinnen
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="header-grammar-btn"
              type="button"
              onClick={() => setIsGrammarOpen(true)}
              className="px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Grammatica Uitleg</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 flex-1">
        
        {/* Category & Session Mode Selector */}
        <CategorySelector
          currentMode={practiceMode}
          onSelectMode={handleModeChange}
          sessionType={sessionType}
          onSelectSessionType={handleSessionTypeChange}
          totalPersonalCount={totalPersonal}
          totalPossessiveCount={totalPossessive}
          totalMixedCount={totalMixed}
          mistakesCount={stats.mistakeIds.length}
        />

        {/* Live Stats Bar */}
        <StatsBar
          stats={stats}
          onOpenGrammar={() => setIsGrammarOpen(true)}
          onOpenMistakes={() => setIsMistakesOpen(true)}
          onResetStats={handleResetStats}
        />

        {/* The Active Practice Card */}
        {currentSentence ? (
          <PracticeCard
            sentence={currentSentence}
            currentIndex={currentIndex + 1}
            totalInSet={activeQueue.length}
            inputMode={inputMode}
            onToggleInputMode={setInputMode}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Geen vragen beschikbaar</h3>
            <p className="text-sm text-slate-500">
              Kies een categorie hierboven om te starten met oefenen.
            </p>
            <button
              onClick={() => initializeSet(practiceMode, sessionType)}
              className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-sm shadow-sm cursor-pointer"
            >
              Start opnieuw
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Engelse grammatica training: <strong>Personal Pronouns &amp; Possessive Pronouns</strong> (Gymnasium Klas 1)
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsGrammarOpen(true)}
              className="hover:text-indigo-600 underline font-medium"
            >
              Bekijk overzichtstabel
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <GrammarTable
        isOpen={isGrammarOpen}
        onClose={() => setIsGrammarOpen(false)}
      />

      <MistakesReviewModal
        isOpen={isMistakesOpen}
        onClose={() => setIsMistakesOpen(false)}
        mistakeSentences={mistakeSentences}
        onPracticeMistakes={() => {
          setSessionType('mistakes');
          setIsMistakesOpen(false);
        }}
        onClearMistakes={() => {
          setStats(prev => ({ ...prev, mistakeIds: [] }));
          setIsMistakesOpen(false);
        }}
      />

      <CelebrationModal
        isOpen={isCelebrationOpen}
        score={sprintScore}
        total={activeQueue.length}
        streak={stats.streak}
        onRestart={() => {
          setIsCelebrationOpen(false);
          initializeSet(practiceMode, sessionType);
        }}
        onContinueEndless={() => {
          setIsCelebrationOpen(false);
          setSessionType('endless');
        }}
      />

    </div>
  );
}
