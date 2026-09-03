import React, { useState, useEffect, useRef } from 'react';
import { SentenceItem, InputMode } from '../types';
import { Volume2, ArrowRight, Check, X, Sparkles, HelpCircle, Keyboard, MousePointer } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PracticeCardProps {
  sentence: SentenceItem;
  currentIndex: number;
  totalInSet: number;
  inputMode: InputMode;
  onToggleInputMode: (mode: InputMode) => void;
  onAnswer: (answer: string, isCorrect: boolean) => void;
  onNext: () => void;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  sentence,
  currentIndex,
  totalInSet,
  inputMode,
  onToggleInputMode,
  onAnswer,
  onNext,
}) => {
  const [typedAnswer, setTypedAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const submittedAtRef = useRef<number>(0);

  // Reset local state whenever the sentence changes
  useEffect(() => {
    setTypedAnswer('');
    setSelectedOption(null);
    setSubmittedAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
    submittedAtRef.current = 0;
    if (inputMode === 'type') {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
    }
  }, [sentence.id, inputMode]);

  const handleSubmitAnswer = (answerToSubmit: string) => {
    if (isSubmitted || !answerToSubmit.trim()) return;

    const cleanUser = answerToSubmit.trim().toLowerCase();
    const cleanCorrect = sentence.correctAnswer.trim().toLowerCase();

    // Check if user answer matches
    const correct = cleanUser === cleanCorrect;

    submittedAtRef.current = Date.now();
    setSubmittedAnswer(answerToSubmit.trim());
    setIsSubmitted(true);
    setIsCorrect(correct);
    inputRef.current?.blur();
    onAnswer(answerToSubmit.trim(), correct);

    if (correct) {
      // Confetti burst on correct
      confetti({
        particleCount: 28,
        spread: 55,
        origin: { y: 0.75 },
        colors: ['#10b981', '#6366f1', '#f59e0b', '#3b82f6']
      });
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (!isSubmitted) {
        handleSubmitAnswer(typedAnswer);
      }
    }
  };

  const handleGlobalKeyDown = (e: KeyboardEvent) => {
    if (isSubmitted) {
      // Enforce safe delay: at least 1000ms for incorrect answers so students can read feedback
      const minDelay = isCorrect ? 350 : 1000;
      const timeSinceSubmit = Date.now() - submittedAtRef.current;
      if (timeSinceSubmit < minDelay) {
        return;
      }

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onNext();
      }
    } else if (inputMode === 'choice') {
      // Allow pressing 1, 2, 3, 4 for multiple choice
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (sentence.options && sentence.options[idx]) {
          const opt = sentence.options[idx];
          setSelectedOption(opt);
          handleSubmitAnswer(opt);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isSubmitted, inputMode, sentence, typedAnswer]);

  // Text-To-Speech
  const speakSentence = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const fullText = `${sentence.beforeGap} ${sentence.correctAnswer} ${sentence.afterGap}`;
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
      {/* Top bar with question index and mode switcher */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-indigo-700 bg-indigo-100/70 px-2.5 py-1 rounded-full">
            Vraag {currentIndex} {totalInSet > 0 ? `van ${totalInSet}` : ''}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {sentence.category === 'personal' ? 'Personal Pronoun' : 'Possessive Form'}
          </span>
        </div>

        {/* Input Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-200/60 p-0.5 rounded-xl text-xs font-semibold">
          <button
            id="toggle-input-type"
            type="button"
            onClick={() => onToggleInputMode('type')}
            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
              inputMode === 'type'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Zelf typen (aanbevolen voor toetsen)"
          >
            <Keyboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Typen</span>
          </button>
          <button
            id="toggle-input-choice"
            type="button"
            onClick={() => onToggleInputMode('choice')}
            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
              inputMode === 'choice'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Keuzeknoppen (snel oefenen)"
          >
            <MousePointer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Knoppen</span>
          </button>
        </div>
      </div>

      {/* Main Sentence Area */}
      <div className="p-6 sm:p-10 space-y-6">
        
        {/* Audio pronunciation button */}
        <div className="flex items-center justify-end">
          <button
            id="audio-speak-btn"
            type="button"
            onClick={speakSentence}
            disabled={isSpeaking}
            className={`p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer ${
              isSpeaking ? 'text-indigo-600 bg-indigo-50 animate-pulse' : ''
            }`}
            title="Beluister de Engelse uitspraak"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* The Sentence with Gap */}
        <div className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed py-2">
          <span>{sentence.beforeGap} </span>

          {/* Interactive Gap */}
          <span className="inline-block align-baseline mx-1">
            {!isSubmitted ? (
              inputMode === 'type' ? (
                <input
                  ref={inputRef}
                  id="gap-input-field"
                  type="text"
                  value={typedAnswer}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="type hier..."
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  className="w-32 sm:w-40 px-3 py-1.5 text-center font-bold text-indigo-700 bg-indigo-50/50 border-b-2 border-indigo-600 focus:outline-none focus:bg-indigo-50 focus:border-indigo-700 rounded-t-lg transition-all"
                />
              ) : (
                <span className="inline-block w-28 sm:w-36 border-b-2 border-indigo-500 bg-indigo-50/40 text-center text-indigo-600 font-semibold py-1 rounded-t-lg">
                  {selectedOption || '...'}
                </span>
              )
            ) : (
              <span className={`inline-block px-3 py-1 rounded-lg font-bold ${
                isCorrect 
                  ? 'bg-emerald-100 text-emerald-800 border-b-2 border-emerald-600' 
                  : 'bg-rose-100 text-rose-800 border-b-2 border-rose-600 line-through'
              }`}>
                {submittedAnswer || (inputMode === 'type' ? typedAnswer : selectedOption)}
              </span>
            )}
          </span>

          <span> {sentence.afterGap}</span>
        </div>

        {/* If Incorrect: Reveal Comparison & Explanation clearly */}
        {isSubmitted && !isCorrect && (
          <div className="bg-rose-50/90 border-2 border-rose-200 rounded-2xl p-5 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center shrink-0">
                <X className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-sm font-bold text-rose-800">
                Helaas, niet helemaal juist!
              </span>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white/80 border border-rose-200 rounded-xl p-3">
                <div className="text-[11px] font-bold uppercase text-rose-500 tracking-wider">
                  Jouw antwoord:
                </div>
                <div className="text-lg font-bold text-rose-700 line-through mt-0.5">
                  {submittedAnswer || '(leeg)'}
                </div>
              </div>

              <div className="bg-white/90 border border-emerald-300 rounded-xl p-3 shadow-xs">
                <div className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Juiste antwoord:
                </div>
                <div className="text-xl font-extrabold text-emerald-800 mt-0.5">
                  {sentence.correctAnswer}
                </div>
              </div>
            </div>

            {/* Explanation box */}
            <div className="bg-rose-100/60 rounded-xl p-3 text-xs text-rose-900 border border-rose-200/60 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Uitleg: </span>
                {sentence.explanation}
              </div>
            </div>
          </div>
        )}

        {/* If Correct: Congratulatory Banner & Explanation */}
        {isSubmitted && isCorrect && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 animate-in fade-in duration-200">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Goed gedaan!
              </div>
              <div className="text-lg font-bold text-emerald-950 mt-0.5">
                {sentence.correctAnswer}
              </div>
              <p className="text-xs text-emerald-800 mt-1">
                {sentence.explanation}
              </p>
            </div>
          </div>
        )}

        {/* Action Controls: Either Multiple Choice Buttons OR Submit/Next Button */}
        {!isSubmitted ? (
          inputMode === 'choice' ? (
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-slate-400">
                Kies het juiste voornaamwoord (of toets 1, 2, 3, 4):
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sentence.options.map((option, idx) => (
                  <button
                    key={option}
                    id={`choice-btn-${option}`}
                    type="button"
                    onClick={() => {
                      setSelectedOption(option);
                      handleSubmitAnswer(option);
                    }}
                    className="p-3.5 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-600 hover:bg-indigo-50/50 text-slate-800 font-bold text-base transition-all transform active:scale-95 cursor-pointer flex items-center justify-between"
                  >
                    <span>{option}</span>
                    <span className="text-[10px] text-slate-400 font-normal bg-slate-100 px-1.5 py-0.5 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="pt-2 flex justify-end">
              <button
                id="submit-typed-answer-btn"
                type="button"
                onClick={() => handleSubmitAnswer(typedAnswer)}
                disabled={!typedAnswer.trim()}
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Controleren</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )
        ) : (
          /* Next Question Button */
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 order-2 sm:order-1">
              Druk op <kbd className="bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded text-slate-600 font-mono">Enter</kbd> of <kbd className="bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded text-slate-600 font-mono">Spatie</kbd> om door te gaan.
            </div>
            <button
              id="next-question-btn"
              type="button"
              onClick={onNext}
              className="w-full sm:w-auto order-1 sm:order-2 px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ml-auto hover:scale-102 active:scale-98"
            >
              <span>{isCorrect ? 'Volgende vraag' : 'Ik begrijp het, ga door'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
