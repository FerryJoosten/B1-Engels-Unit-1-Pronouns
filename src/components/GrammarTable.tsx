import React from 'react';
import { BookOpen, CheckCircle, Info, Sparkles, X } from 'lucide-react';

interface GrammarTableProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GrammarTable: React.FC<GrammarTableProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="grammar-modal-content"
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Grammatica Overzicht</h2>
              <p className="text-sm text-slate-500">Personal & Possessive Pronouns (Gymnasium Jaar 1)</p>
            </div>
          </div>
          <button
            id="close-grammar-modal-btn"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            title="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-slate-800">
          
          {/* Table 1: Personal Pronouns */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full">
                  Deel 1: Wie of wat
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Personal Pronouns (Persoonlijke voornaamwoorden)</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Je gebruikt een <strong className="text-slate-900">personal pronoun</strong> in plaats van namen van personen, dieren of dingen.
              Er zijn twee hoofdvormen: als <strong>onderwerp</strong> (subject) of als <strong>voorwerp</strong> (object).
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Persoon / Getal</th>
                    <th className="py-3 px-4 bg-indigo-50/60 text-indigo-900">
                      Onderwerp in de zin <span className="font-normal text-xs text-indigo-600 block">(subject: doet de actie)</span>
                    </th>
                    <th className="py-3 px-4 bg-emerald-50/60 text-emerald-900">
                      Lijdend / Meewerkend voorwerp <span className="font-normal text-xs text-emerald-600 block">(object / na voorzetsel)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">1e enk. (ik / mij)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">I</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">me</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">2e enk. (jij / jou)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">you</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">you</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">3e enk. m. (hij / hem)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">he</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">him</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">3e enk. v. (zij / haar)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">she</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">her</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">3e enk. onz. (het)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">it</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">it</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-500 font-normal">1e meerv. (wij / ons)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">we</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">us</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-500 font-normal">2e meerv. (jullie)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">you</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">you</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-500 font-normal">3e meerv. (zij / hen)</td>
                    <td className="py-2.5 px-4 text-indigo-700 font-bold bg-indigo-50/20">they</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold bg-emerald-50/20">them</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-1.5 text-slate-700">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" /> Voorbeelden uit het boek:
              </p>
              <p>• <span className="font-semibold text-indigo-700">I</span> am walking to school today. Do you want to walk with <span className="font-semibold text-emerald-700">me</span>?</p>
              <p>• Are <span className="font-semibold text-indigo-700">you</span> walking to school? Can I walk with <span className="font-semibold text-emerald-700">you</span>?</p>
              <p>• <span className="font-semibold text-indigo-700">We</span> are going to have lunch. Would you like to join <span className="font-semibold text-emerald-700">us</span>?</p>
            </div>
          </div>

          {/* Table 2: Possessive Adjectives & Pronouns */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full">
                  Deel 2: Van wie of wat
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Possessive forms (Bezittelijke voornaamwoorden)</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Als je wilt zeggen dat iets van jou of iemand anders is:
              <br />
              • <strong className="text-slate-900">Met zelfstandig naamwoord</strong> (possessive adjective): zet je altijd direct vóór het woord (bijv. <em>my book</em>).
              <br />
              • <strong className="text-slate-900">Zonder zelfstandig naamwoord</strong> (possessive pronoun): staat zelfstandig op zichzelf (bijv. <em>it is mine</em>).
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Persoon</th>
                    <th className="py-3 px-4 bg-amber-50/60 text-amber-900">
                      Met zelfstandig naamwoord <span className="font-normal text-xs text-amber-700 block">(+ noun: my bike)</span>
                    </th>
                    <th className="py-3 px-4 bg-purple-50/60 text-purple-900">
                      Zonder zelfstandig naamwoord <span className="font-normal text-xs text-purple-700 block">(geen noun erachter: it is mine)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">ik (mijn / van mij)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">my</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">mine</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">jij (jouw / van jou)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">your</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">yours</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">hij (zijn / van hem)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">his</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">his</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">zij (haar / van haar)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">her</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">hers</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-slate-500 font-normal">het (ervan / zijn van dier)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">its</td>
                    <td className="py-2.5 px-4 text-slate-400 italic bg-purple-50/20">— (niet gebruikt)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-500 font-normal">wij (ons / van ons)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">our</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">ours</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-500 font-normal">jullie (jullie / van jullie)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">your</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">yours</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 text-slate-500 font-normal">zij (hun / van hen)</td>
                    <td className="py-2.5 px-4 text-amber-700 font-bold bg-amber-50/20">their</td>
                    <td className="py-2.5 px-4 text-purple-700 font-bold bg-purple-50/20">theirs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-1.5 text-slate-700">
              <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" /> Voorbeelden uit het boek:
              </p>
              <p>• Is that <span className="font-semibold text-amber-700">his</span> pen? – No, it's <span className="font-semibold text-purple-700">hers</span>.</p>
              <p>• <span className="font-semibold text-amber-700">My</span> teacher is really nice. – Really? I'd rather have <span className="font-semibold text-purple-700">yours</span>.</p>
              <p>• The dog lost <span className="font-semibold text-amber-700">its</span> collar. <em>(Let op: 'its' bezittelijk heeft GEEN apostrof!)</em></p>
            </div>
          </div>

          {/* Tips for Gymnasium 1 students */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 text-sm text-blue-900">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold">Handig ezelsbruggetje voor het gymnasium:</h4>
              <p className="text-blue-800 text-xs leading-relaxed">
                1. <strong>Staat het voornaamwoord vóór de persoonsvorm en doet het de actie?</strong> → Kies Onderwerp (<code className="bg-blue-100 px-1 rounded text-blue-900">I, he, she, we, they</code>).
                <br />
                2. <strong>Staat het achter het werkwoord of na een voorzetsel (to, with, for, at)?</strong> → Kies Voorwerp (<code className="bg-blue-100 px-1 rounded text-blue-900">me, him, her, us, them</code>).
                <br />
                3. <strong>Staat er direct een zelfstandig naamwoord achter?</strong> → Kies Possessive Adjective (<code className="bg-blue-100 px-1 rounded text-blue-900">my, your, his, her, its, our, their</code>).
                <br />
                4. <strong>Staat er GEEN zelfstandig naamwoord achter (het staat alleen)?</strong> → Kies Possessive Pronoun (<code className="bg-blue-100 px-1 rounded text-blue-900">mine, yours, his, hers, ours, theirs</code>).
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-sm transition-colors"
          >
            Begrepen, terug naar oefenen
          </button>
        </div>
      </div>
    </div>
  );
};
