import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Newspaper, Search, ArrowRight } from 'lucide-react';

interface NewsPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onBack, onGoHome }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Press Release', 'Diplomatic Insight', 'Internal Updates', 'IPC News'];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="PUMUN NEWS"
        category="ARTICLES & PRESS"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-8">
        {/* Category Pills & Search Bar */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#1872C4] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                disabled
                placeholder="Search press releases or diplomatic insights..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-400 cursor-not-allowed"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Empty State Banner */}
        <ScrollReveal delayMs={50}>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1872C4] flex items-center justify-center mx-auto">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900">
              Press Archives & Publications in Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              No articles have been published in this category yet. The PUMUN Press Corps and Editorial Bureau will release official diplomatic dispatches shortly.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Wireframe Article Card Slots (Clean Preview Skeletons) */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((slot) => (
              <div
                key={slot}
                className="bg-white rounded-2xl border border-dashed border-slate-300 p-5 flex flex-col justify-between space-y-4 hover:border-slate-400 transition-colors"
              >
                <div className="space-y-3">
                  {/* Thumbnail Slot */}
                  <div className="w-full h-40 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs font-semibold">
                    Article Thumbnail Slot #{slot}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Category
                    </span>
                    <span className="text-[10px] text-slate-400">Release Date</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="h-4 w-5/6 bg-slate-200/80 rounded" />
                    <div className="h-4 w-3/4 bg-slate-200/80 rounded" />
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="h-2.5 w-full bg-slate-100 rounded" />
                    <div className="h-2.5 w-4/5 bg-slate-100 rounded" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
