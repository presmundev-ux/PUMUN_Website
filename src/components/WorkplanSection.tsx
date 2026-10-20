import React, { useState } from 'react';
import { WORKPLAN_MILESTONES } from '../data/munData';

export const WorkplanSection: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<string>('All');

  const filteredMilestones = selectedQuarter === 'All'
    ? WORKPLAN_MILESTONES
    : WORKPLAN_MILESTONES.filter(m => m.quarter === selectedQuarter);

  const quarters = ['All', 'Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026'];

  return (
    <section id="workplan" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            ORGANIZATION WORKPLAN
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Quarterly roadmap and operational milestones for the academic year.
          </p>

          <div className="pt-2 flex items-center justify-center gap-1.5">
            {quarters.map((q) => (
              <button
                key={q}
                onClick={() => setSelectedQuarter(q)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border cursor-pointer transition-colors ${
                  selectedQuarter === q
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Workplan Milestone Cards - Matching Screenshot Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMilestones.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Header with Maroon Badge */}
              <div className="p-5 pb-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                    {item.quarter}
                  </span>
                  <span className="text-xs text-slate-500 font-normal">
                    {item.monthRange} • {item.division}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase text-slate-600">
                  {item.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-slate-900 text-lg leading-snug group-hover:text-[#7A181D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800 uppercase">OBJECTIVE — </span>
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    Target Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {item.milestonePoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-700">
                        <span className="text-[#7A181D] font-bold">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
