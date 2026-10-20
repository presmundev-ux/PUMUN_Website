import React, { useState } from 'react';
import { DIVISIONS, SECRETARIAT_BOARD } from '../data/munData';

export const DivisionSection: React.FC = () => {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>(DIVISIONS[0].id);

  const activeDivision = DIVISIONS.find(d => d.id === selectedDivisionId) || DIVISIONS[0];

  return (
    <section id="division" className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            SECRETARIAT & DIVISIONS
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Executive leadership and functional divisions coordinating PUMUN operations.
          </p>
        </div>

        {/* High Secretariat Profiles - Exactly Matching the Screenshot Card Style */}
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-200">
            Executive Secretariat Leadership
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECRETARIAT_BOARD.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                {/* Photo with Maroon Badge */}
                <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                  <img 
                    src={leader.avatar} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                  />
                  {/* Floating Maroon Badge */}
                  <div className="absolute top-3 left-3 bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                    {leader.role.split(' ')[0]}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Meta line */}
                    <div className="text-[11px] text-slate-500 font-normal">
                      {leader.role} • {leader.major}
                    </div>

                    {/* Name in Formal Serif */}
                    <h3 className="font-serif font-bold text-slate-900 text-base leading-snug group-hover:text-[#7A181D] transition-colors">
                      {leader.name}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      <span className="font-bold text-slate-800 uppercase">PROFILE — </span>
                      {leader.bio}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 italic border-t border-slate-100">
                    "{leader.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Functional Divisions Explorer - Clean Card Container */}
        <div className="pt-4 space-y-4">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-500 pb-2 border-b border-slate-200">
            Six Functional Organizing Divisions
          </div>

          {/* Division Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {DIVISIONS.map((div) => {
              const isSelected = selectedDivisionId === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivisionId(div.id)}
                  className={`p-3 text-left rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold uppercase truncate">{div.shortName}</div>
                  <div className={`text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {div.membersCount} Members
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Division Details Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Head and Mission */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className="bg-[#7A181D] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase font-sans">
                    DIVISION PROFILE
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mt-2">
                    {activeDivision.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {activeDivision.description}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <img 
                    src={activeDivision.headAvatar} 
                    alt={activeDivision.headName}
                    className="w-12 h-12 rounded-lg object-cover border border-slate-300" 
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Division Head</span>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">{activeDivision.headName}</h4>
                    <p className="text-[11px] text-slate-600 font-medium">{activeDivision.headTitle}</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs italic text-slate-700">
                  "{activeDivision.quote}"
                </div>
              </div>

              {/* Right Column: Responsibilities and Deliverables */}
              <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-slate-200 lg:pl-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Core Operational Responsibilities
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeDivision.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#7A181D] font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Key Tangible Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDivision.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
