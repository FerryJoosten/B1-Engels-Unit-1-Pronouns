import React from 'react';
import { PracticeMode, SessionType } from '../types';
import { UserCheck, Sparkles, Shuffle, Zap, Target, Infinity as InfinityIcon } from 'lucide-react';

interface CategorySelectorProps {
  currentMode: PracticeMode;
  onSelectMode: (mode: PracticeMode) => void;
  sessionType: SessionType;
  onSelectSessionType: (type: SessionType) => void;
  totalPersonalCount: number;
  totalPossessiveCount: number;
  totalMixedCount: number;
  mistakesCount: number;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  currentMode,
  onSelectMode,
  sessionType,
  onSelectSessionType,
  totalPersonalCount,
  totalPossessiveCount,
  totalMixedCount,
  mistakesCount,
}) => {
  return (
    <div className="space-y-6">
      {/* 3 Main Choice Cards */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
          Kies een oefencategorie:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Choice 1: Personal Pronouns */}
          <button
            id="mode-btn-personal"
            type="button"
            onClick={() => onSelectMode('personal')}
            className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              currentMode === 'personal'
                ? 'bg-indigo-50/70 border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className={`p-2.5 rounded-xl ${
                currentMode === 'personal' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
              }`}>
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {totalPersonalCount} zinnen
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-indigo-600">1.</span>
                <h3 className="font-bold text-slate-900 text-base">Personal Pronouns</h3>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Onderwerp &amp; voorwerp: <br />
                <span className="text-slate-700 font-medium">I/me, he/him, she/her, we/us, they/them</span>
              </p>
            </div>
          </button>

          {/* Choice 2: Possessive Pronouns */}
          <button
            id="mode-btn-possessive"
            type="button"
            onClick={() => onSelectMode('possessive')}
            className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              currentMode === 'possessive'
                ? 'bg-amber-50/70 border-amber-600 shadow-md ring-2 ring-amber-500/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className={`p-2.5 rounded-xl ${
                currentMode === 'possessive' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'
              }`}>
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {totalPossessiveCount} zinnen
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-amber-600">2.</span>
                <h3 className="font-bold text-slate-900 text-base">Possessive Pronouns</h3>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Bezittelijk (met/zonder znw): <br />
                <span className="text-slate-700 font-medium">my/mine, your/yours, his/hers, our/ours, their/theirs</span>
              </p>
            </div>
          </button>

          {/* Choice 3: Mixed Practice */}
          <button
            id="mode-btn-mixed"
            type="button"
            onClick={() => onSelectMode('mixed')}
            className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              currentMode === 'mixed'
                ? 'bg-purple-50/70 border-purple-600 shadow-md ring-2 ring-purple-500/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className={`p-2.5 rounded-xl ${
                currentMode === 'mixed' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
              }`}>
                <Shuffle className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold">
                {totalMixedCount}+ zinnen
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-purple-600">3.</span>
                <h3 className="font-bold text-slate-900 text-base">Alles Door Elkaar</h3>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Ultieme toetsvoorbereiding: <br />
                <span className="text-slate-700 font-medium">Personal &amp; Possessive pronouns willekeurig gemixt</span>
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Session Length / Flow Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Target className="w-4 h-4 text-slate-400" />
          <span>Oefenvorm:</span>
        </div>

        <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            id="session-endless-btn"
            onClick={() => onSelectSessionType('endless')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              sessionType === 'endless'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <InfinityIcon className="w-3.5 h-3.5" />
            Eindeloos
          </button>

          <button
            id="session-sprint10-btn"
            onClick={() => onSelectSessionType('sprint10')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              sessionType === 'sprint10'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3 h-3 text-amber-500" />
            10 Vragen
          </button>

          <button
            id="session-sprint25-btn"
            onClick={() => onSelectSessionType('sprint25')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
              sessionType === 'sprint25'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3 h-3 text-amber-500" />
            25 Vragen
          </button>

          {mistakesCount > 0 && (
            <button
              id="session-mistakes-btn"
              onClick={() => onSelectSessionType('mistakes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                sessionType === 'mistakes'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-rose-600 hover:bg-rose-50'
              }`}
            >
              Fouten ({mistakesCount})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
