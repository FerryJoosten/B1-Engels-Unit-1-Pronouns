import React from 'react';
import { SentenceItem } from '../types';
import { AlertCircle, X, CheckCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface MistakesReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  mistakeSentences: SentenceItem[];
  onPracticeMistakes: () => void;
  onClearMistakes: () => void;
}

export const MistakesReviewModal: React.FC<MistakesReviewModalProps> = ({
  isOpen,
  onClose,
  mistakeSentences,
  onPracticeMistakes,
  onClearMistakes,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="mistakes-modal-content"
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 font-semibold">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Mijn Foutenbank</h2>
              <p className="text-sm text-slate-500">
                {mistakeSentences.length} vraag{mistakeSentences.length === 1 ? '' : 'en'} om te herhalen
              </p>
            </div>
          </div>
          <button
            id="close-mistakes-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {mistakeSentences.length === 0 ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Geen openstaande fouten!</h3>
              <p className="text-sm text-slate-500 mt-1">Je hebt alle geoefende vragen foutloos beantwoord.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {mistakeSentences.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Vraag {idx + 1}</span>
                    <span className="text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                      {item.dutchHint}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-900">
                    <span>{item.beforeGap} </span>
                    <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded">
                      {item.correctAnswer}
                    </span>
                    <span> {item.afterGap}</span>
                  </div>

                  <p className="text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                    💡 <strong className="text-slate-700">Uitleg:</strong> {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex items-center justify-between">
          {mistakeSentences.length > 0 ? (
            <>
              <button
                onClick={onClearMistakes}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
              >
                Lijst wissen
              </button>
              <button
                id="practice-mistakes-now-btn"
                onClick={() => {
                  onPracticeMistakes();
                  onClose();
                }}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Oefen deze fouten nu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="ml-auto px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-sm"
            >
              Sluiten
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
