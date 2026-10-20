import React, { useState } from 'react';
import { ROP_CHEAT_SHEET } from '../data/munData';
import { X, BookOpen, AlertCircle, CheckCircle2, ChevronRight, Download } from 'lucide-react';

interface RopGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RopGuideModal: React.FC<RopGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'points' | 'flow' | 'resolutions'>('points');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1D3A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                PUMUN Rules of Procedure (RoP) Guide
              </h3>
              <p className="text-xs text-slate-300">
                Parliamentary rules, debate mechanics, and diplomatic protocol reference
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-4 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('points')}
            className={`pb-3 transition-colors cursor-pointer ${
              activeTab === 'points'
                ? 'text-[#1E5C99] border-b-2 border-[#418FDE]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Points & Motions
          </button>
          <button
            onClick={() => setActiveTab('flow')}
            className={`pb-3 transition-colors cursor-pointer ${
              activeTab === 'flow'
                ? 'text-[#1E5C99] border-b-2 border-[#418FDE]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Flow of Debate
          </button>
          <button
            onClick={() => setActiveTab('resolutions')}
            className={`pb-3 transition-colors cursor-pointer ${
              activeTab === 'resolutions'
                ? 'text-[#1E5C99] border-b-2 border-[#418FDE]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Drafting Resolutions
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs sm:text-sm">
          
          {activeTab === 'points' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#1E5C99] shrink-0 mt-0.5" />
                <span>
                  <strong>Tip from the Dais:</strong> Points are personal inquiries or corrections to procedural errors. Motions are formal proposals to alter the committee agenda or debate mode.
                </span>
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                {ROP_CHEAT_SHEET.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white hover:bg-slate-50/60 transition-colors space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-500">Vote: <strong className="text-slate-700">{item.voteRequired}</strong></span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-500">Interrupts: <strong className="text-slate-700">{item.interrupts}</strong></span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-slate-900">
                Standard Order of Committee Proceedings
              </h4>

              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E5C99] text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                  <div>
                    <h5 className="font-bold text-slate-900">Roll Call & Quorum</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Chairs verify delegate attendance. Delegates declare "Present" (can abstain on substantive votes) or "Present and Voting" (cannot abstain).</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E5C99] text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                  <div>
                    <h5 className="font-bold text-slate-900">Setting the Agenda & General Speakers List (GSL)</h5>
                    <p className="text-xs text-slate-600 mt-0.5">The primary default state of the committee. Delegates deliver overarching policy stances (typically 90 seconds per speech).</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E5C99] text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900">Moderated Caucus (Mod)</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Focused debate on sub-issues raised via motion (e.g. "Motion for a 9-minute moderated caucus with 45-second individual speaker time on the topic of refugee maritime corridors").</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E5C99] text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
                  <div>
                    <h5 className="font-bold text-slate-900">Unmoderated Caucus (Unmod)</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Informal lobbying period where delegates move freely around the room to negotiate, form regional voting blocs, and co-author resolution clauses.</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1E5C99] text-white flex items-center justify-center font-bold text-xs shrink-0">5</div>
                  <div>
                    <h5 className="font-bold text-slate-900">Voting Procedure</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Doors are sealed. The committee enters strict voting procedure on draft resolutions and amendments. Roll-call voting may be motioned.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resolutions' && (
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-base text-slate-900">
                Anatomy of a United Nations Resolution
              </h4>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <div>
                  <span className="font-bold text-[#1E5C99] block mb-1">1. Preambulatory Clauses (Why we care)</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Set the historical, legal, and humanitarian context. Always begin with italicized preambulatory verbs: <em>Affirming, Bearing in mind, Deeply concerned, Guided by, Recalling...</em>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="font-bold text-[#1E5C99] block mb-1">2. Operative Clauses (What we will do)</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prescribe actionable, concrete mandates. Always numbered and beginning with underlined operative verbs: <u>Authorizes</u>, <u>Calls upon</u>, <u>Encourages</u>, <u>Recommends</u>, <u>Requests</u>...
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="font-bold text-[#1E5C99] block mb-1">3. Sponsors vs. Signatories</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Sponsors:</strong> Principal authors who contributed directly to writing the clauses and agree with the entire resolution.
                    <br />
                    <strong>Signatories:</strong> Delegates who wish to see the draft brought to the floor for debate, regardless of whether they ultimately vote for or against it.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Official PUMUN 2026 Academic Secretariat Reference</span>
          <button
            onClick={onClose}
            className="bg-[#1E5C99] hover:bg-[#122B54] text-white px-4 py-1.5 rounded font-semibold transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
