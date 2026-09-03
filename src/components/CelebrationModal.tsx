import React, { useEffect } from 'react';
import { Trophy, CheckCircle, RotateCcw, ArrowRight, Award, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CelebrationModalProps {
  isOpen: boolean;
  score: number;
  total: number;
  streak: number;
  onRestart: () => void;
  onContinueEndless: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  isOpen,
  score,
  total,
  streak,
  onRestart,
  onContinueEndless,
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="celebration-modal-content"
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-slate-200 text-center space-y-6"
      >
        {/* Trophy icon */}
        <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center shadow-inner">
          <Trophy className="w-10 h-10" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Sprint Voltooid! 🎉
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Geweldig gewerkt aan je Engelse voornaamwoorden!
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 grid grid-cols-2 gap-4">
          <div className="text-center border-r border-slate-200">
            <div className="text-xs text-slate-400 font-semibold uppercase">Score</div>
            <div className="text-3xl font-black text-slate-900 mt-0.5">
              {score}/{total}
            </div>
            <div className="text-xs font-bold text-emerald-600 mt-0.5">
              {percentage}% goed
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs text-slate-400 font-semibold uppercase">Beste Reeks</div>
            <div className="text-3xl font-black text-amber-600 mt-0.5 flex items-center justify-center gap-1">
              <Star className="w-5 h-5 fill-current" />
              <span>{streak}</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              achter elkaar
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-2">
          <button
            id="celebration-restart-btn"
            onClick={onRestart}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Nieuwe Sprint Starten</span>
          </button>

          <button
            id="celebration-endless-btn"
            onClick={onContinueEndless}
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Verder met Eindeloos Oefenen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
