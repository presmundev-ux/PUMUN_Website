import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Target, Flag, CheckCircle2, CalendarDays } from 'lucide-react';

interface WorkplanPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const WorkplanPage: React.FC<WorkplanPageProps> = ({ onBack, onGoHome }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>('January');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="ORGANIZATION WORKPLAN"
        category="ROADMAP & STRATEGY"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8">
        {/* Month Selector Grid (January - December) */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-800">
              <CalendarDays className="w-4 h-4 text-[#1872C4]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Monthly Strategic Timeline (January – December):
              </span>
            </div>

            {/* 12 Months Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
              {months.map((m, idx) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedMonth === m
                      ? 'bg-[#1872C4] border-[#1872C4] text-white shadow-xs font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-[10px] block opacity-70">Month {idx + 1}</span>
                  <span className="text-xs font-semibold">{m}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Workplan Timeline Status */}
        <ScrollReveal delayMs={50}>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1872C4] flex items-center justify-center mx-auto">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
              Strategic Objectives & Operational Workplan ({selectedMonth})
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Key performance indicators and operational execution timelines for {selectedMonth} are being finalized by the High Secretariat.
            </p>
          </div>
        </ScrollReveal>

        {/* Milestone Timeline Skeletons */}
        <ScrollReveal delayMs={100}>
          <div className="space-y-4">
            {[1, 2, 3].map((milestone) => (
              <div
                key={milestone}
                className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                    <Flag className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        Milestone {selectedMonth} #{milestone}
                      </span>
                      <span className="text-xs text-slate-400">Execution Timeline</span>
                    </div>
                    <div className="h-4 w-48 sm:w-64 bg-slate-200/80 rounded" />
                    <div className="h-3 w-32 sm:w-40 bg-slate-100 rounded" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-slate-300" />
                  <span>Status: Ready for Content</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
