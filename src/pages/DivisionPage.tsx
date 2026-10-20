import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Users2, UserCheck, Shield } from 'lucide-react';

interface DivisionPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const DivisionPage: React.FC<DivisionPageProps> = ({ onBack, onGoHome }) => {
  const divisions = [
    'Board of Executive',
    'PPFB',
    'Funding',
    'IT Divisions',
    'Research Analysis',
    'Marketing',
    'Internal Affairs',
    'Partnership',
    'Administration Affairs',
    'Media'
  ];
  const [selectedDiv, setSelectedDiv] = useState<string>(divisions[0]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="SECRETARIAT & DIVISIONS"
        category="LEADERSHIP & TEAMS"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-8">
        {/* Division Tabs */}
        <ScrollReveal>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {divisions.map((div) => (
              <button
                key={div}
                onClick={() => setSelectedDiv(div)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedDiv === div
                    ? 'bg-[#1872C4] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {div}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Division Structure Header */}
        <ScrollReveal delayMs={50}>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1872C4] flex items-center justify-center mx-auto">
              <Users2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                ORGANIZATIONAL STRUCTURE
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                {selectedDiv}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              The organizational roster and division executive profiles will be updated following the official secretarial appointment confirmation.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Skeletons Grid */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 flex flex-col items-center text-center space-y-4 hover:border-slate-400 transition-colors"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                  <UserCheck className="w-8 h-8" />
                </div>

                <div className="space-y-2 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Portfolio #{member}
                  </span>
                  <div className="h-4 w-3/4 bg-slate-200/80 rounded mx-auto" />
                  <div className="h-3 w-1/2 bg-slate-100 rounded mx-auto" />
                </div>

                <div className="w-full pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Executive Profile</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
