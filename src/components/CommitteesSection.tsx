import React, { useState } from 'react';
import { COMMITTEES, Committee } from '../data/munData';
import { X, Check } from 'lucide-react';

interface CommitteesSectionProps {
  onJoinClick: (committeeName?: string) => void;
}

export const CommitteesSection: React.FC<CommitteesSectionProps> = ({
  onJoinClick,
}) => {
  const [activeCommitteeModal, setActiveCommitteeModal] = useState<Committee | null>(null);

  return (
    <section id="committees" className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            ORGANIZATIONAL COMMITTEES & STANDING BODIES
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            INTERNAL BODIES OF PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Six standing specialized committees driving PUMUN's academic training, international delegations, research dossiers, and annual conference operations.
          </p>
        </div>

        {/* Committee Grid - Following the Exact Screenshot Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITTEES.map((committee) => (
            <div 
              key={committee.id}
              onClick={() => setActiveCommitteeModal(committee)}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              {/* Card Top Image with Maroon Badge */}
              <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden">
                <img 
                  src={committee.backgroundUrl} 
                  alt={committee.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                />
                {/* Maroon Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                  {committee.shortName}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  {committee.openRecruitmentQuota} Openings
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  {/* Meta line */}
                  <div className="text-[11px] sm:text-xs text-slate-500 font-normal">
                    {committee.membersCount} Active Members • Led by {committee.leadName}
                  </div>

                  {/* Headline in Formal Serif */}
                  <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg leading-snug line-clamp-1 group-hover:text-[#7A181D] transition-colors">
                    {committee.name}
                  </h3>

                  {/* Mission Dateline & Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    <span className="font-bold text-slate-800 uppercase">FOCUS — </span>
                    {committee.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#7A181D] transition-colors border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <span>Committee Details</span>
                    <span className="text-base leading-none">→</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onJoinClick(committee.name);
                    }}
                    className="bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs font-bold uppercase px-3 py-1 rounded cursor-pointer transition-colors shadow-xs"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Committee Detail Modal */}
      {activeCommitteeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#7A181D] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {activeCommitteeModal.shortName}
                  </span>
                  <span className="text-[11px] uppercase font-bold text-slate-300">
                    {activeCommitteeModal.membersCount} Members · {activeCommitteeModal.openRecruitmentQuota} Open Slots
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mt-1 leading-snug">
                  {activeCommitteeModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveCommitteeModal(null)}
                className="text-white hover:text-slate-300 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Banner Image */}
            <div className="w-full h-44 bg-slate-900 overflow-hidden">
              <img 
                src={activeCommitteeModal.backgroundUrl} 
                alt={activeCommitteeModal.name}
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-800">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#7A181D] tracking-wider block mb-1">
                  Core Mandate & Focus
                </span>
                <p className="font-serif font-bold text-slate-900 text-base leading-snug">
                  {activeCommitteeModal.focusArea}
                </p>
                <p className="text-slate-600 leading-relaxed text-xs mt-1.5">
                  {activeCommitteeModal.description}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-700 tracking-wider block">
                  Core Responsibilities of Committee Members
                </span>
                <ul className="space-y-1.5">
                  {activeCommitteeModal.keyResponsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#7A181D] font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-700 tracking-wider block mb-2">
                  Ideal Candidate Qualifications
                </span>
                <ul className="space-y-1.5">
                  {activeCommitteeModal.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#7A181D] font-bold">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
                <button
                  onClick={() => setActiveCommitteeModal(null)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const commName = activeCommitteeModal.name;
                    setActiveCommitteeModal(null);
                    onJoinClick(commName);
                  }}
                  className="px-5 py-2 bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs font-extrabold uppercase tracking-wider rounded-md cursor-pointer shadow-xs"
                >
                  Join Part of PUMUN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
