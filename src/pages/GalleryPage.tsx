import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Image, Camera } from 'lucide-react';

interface GalleryPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBack, onGoHome }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Committee Sessions', 'Workshops & Training', 'Gala & Social Receptions'];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="PHOTO GALLERY"
        category="MEDIA ARCHIVE"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-8">
        {/* Category Filter Pills */}
        <ScrollReveal>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#1872C4] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Media Archive Status */}
        <ScrollReveal delayMs={50}>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1872C4] flex items-center justify-center mx-auto">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
              Visual Documentation & Media Archives
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Official photography from conference proceedings, diplomatic receptions, and award presentations will be published following media curation.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Photo Grid Slots */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
              <div
                key={photo}
                className="bg-white rounded-2xl border border-dashed border-slate-300 overflow-hidden flex flex-col justify-between p-4 space-y-3 hover:border-slate-400 transition-colors"
              >
                <div className="w-full h-48 bg-slate-100 rounded-xl flex flex-col items-center justify-center text-slate-400 space-y-2">
                  <Image className="w-8 h-8 text-slate-300" />
                  <span className="text-xs font-semibold">Photo Archive Slot #{photo}</span>
                </div>

                <div className="space-y-1">
                  <div className="h-3.5 w-3/4 bg-slate-200/80 rounded" />
                  <div className="h-2.5 w-1/2 bg-slate-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
