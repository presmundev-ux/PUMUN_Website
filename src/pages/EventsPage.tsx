import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, MapPin, Calendar, Users } from 'lucide-react';

interface EventsPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onBack, onGoHome }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Workshops' | 'Delegations' | 'Conferences'>('All');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="EVENTS & PROGRAMS"
        category="ORGANIZATION ACTIVITIES"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-8">
        {/* Category Filter Pills */}
        <ScrollReveal>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {(['All', 'Workshops', 'Delegations', 'Conferences'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#1872C4] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Status Message */}
        <ScrollReveal delayMs={50}>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1872C4] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900">
              Events & Programs Schedule in Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              The complete roster of diplomatic clinics, parliamentary simulation sessions, and public outreach programs will be announced here.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Clean Wireframe Event Cards */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-dashed border-slate-300 overflow-hidden flex flex-col justify-between p-5 space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs font-semibold">
                    Program Banner Slot #{idx}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Date
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Venue
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="h-4 w-4/5 bg-slate-200/80 rounded" />
                    <div className="h-4 w-3/5 bg-slate-200/80 rounded" />
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="h-2.5 w-full bg-slate-100 rounded" />
                    <div className="h-2.5 w-3/4 bg-slate-100 rounded" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-semibold">
                    <Users className="w-3.5 h-3.5" /> Participant Capacity
                  </span>
                  <span className="text-slate-400">Details →</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
