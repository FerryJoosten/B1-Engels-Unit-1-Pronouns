import React from 'react';
import { Flame, Trophy, CheckCircle2, BookOpen, AlertCircle, RefreshCw } from 'lucide-react';
import { UserStats } from '../types';

interface StatsBarProps {
  stats: UserStats;
  onOpenGrammar: () => void;
  onOpenMistakes: () => void;
  onResetStats: () => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  onOpenGrammar,
  onOpenMistakes,
  onResetStats,
}) => {
  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.correctAnswered / stats.totalAnswered) * 100)
    : 100;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Metric 1: Streak */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              stats.streak > 0 ? 'bg-amber-100 text-amber-600 animate-pulse' : 'bg-slate-100 text-slate-400'
            }`}>
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Reeks (Streak)</div>
              <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                {stats.streak}
                {stats.bestStreak > 0 && (
                  <span className="text-xs font-normal text-slate-400">
                    (Max: {stats.bestStreak})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Metric 2: Accuracy */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Score</div>
              <div className="text-base font-bold text-slate-900">
                {stats.totalAnswered > 0 ? `${accuracy}%` : '—'}
                <span className="text-xs font-normal text-slate-400 ml-1">
                  ({stats.correctAnswered}/{stats.totalAnswered})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {stats.mistakeIds.length > 0 && (
            <button
              id="view-mistakes-btn"
              onClick={onOpenMistakes}
              className="px-3 py-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <AlertCircle className="w-4 h-4" />
              <span>{stats.mistakeIds.length} Fout{stats.mistakeIds.length === 1 ? '' : 'en'}</span>
            </button>
          )}

          <button
            id="open-grammar-overview-btn"
            onClick={onOpenGrammar}
            className="px-3.5 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Grammatica Hulp</span>
          </button>

          {stats.totalAnswered > 0 && (
            <button
              id="reset-stats-btn"
              onClick={onResetStats}
              title="Statistieken resetten"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
