import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Calendar as CalendarIcon, Search, CalendarDays } from 'lucide-react';

interface CalendarPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const CalendarPage: React.FC<CalendarPageProps> = ({ onBack, onGoHome }) => {
  const months = [
    'All Months',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>('All Months');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="ANNUAL CALENDAR"
        category="DIPLOMATIC TIMETABLE"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8">
        {/* Month Selector Bar & Search */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-800">
                <CalendarDays className="w-4 h-4 text-[#1872C4]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Select Month (January – December):
                </span>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  disabled
                  placeholder="Search calendar events or programs..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            {/* 12 Months Horizontal Scrollable Pill Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedMonth === month
                      ? 'bg-[#1872C4] text-white shadow-xs font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Calendar Schedule State */}
        <ScrollReveal delayMs={100}>
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 sm:p-14 text-center space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-[#1872C4]">
              <CalendarIcon className="w-7 h-7" />
            </div>

            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                Diplomatic Schedule — {selectedMonth !== 'All Months' ? selectedMonth : 'Annual Overview'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                The official schedule of training workshops, delegation trials, and general assemblies is currently being finalized by the Secretariat.
              </p>
            </div>

            {/* Wireframe Skeletons for Schedule Rows */}
            <div className="max-w-xl mx-auto pt-4 space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-200/70 shrink-0 flex items-center justify-center text-[11px] font-bold text-slate-500">
                      #{item}
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-3.5 w-36 sm:w-48 bg-slate-200/70 rounded" />
                      <div className="h-2.5 w-24 bg-slate-100 rounded" />
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                    Agenda Slot #{item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
