import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  onBack: () => void;
  onGoHome?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = 'PRESIDENT UNIVERSITY MODEL UNITED NATIONS',
  category,
  onBack,
  onGoHome,
}) => {
  return (
    <div className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-5">
        
        {/* Navigation Breadcrumb & Back Arrow Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80 px-3.5 py-1.5 rounded-lg border border-slate-700 transition-all cursor-pointer shadow-xs"
            title="Return to previous page"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FDB813]" />
            <span>Back to Previous Page</span>
          </button>

          {onGoHome && (
            <button
              onClick={onGoHome}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
              <span>/</span>
              <span className="text-white font-medium capitalize">{title.toLowerCase()}</span>
            </button>
          )}
        </div>

        {/* Clean, Simple, Formal Title & Subtitle */}
        <div className="space-y-1.5">
          {category && (
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider bg-[#1872C4]/20 text-blue-300 border border-blue-500/30 inline-block font-sans mb-1">
              {category}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white font-sans">
            {title}
          </h1>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};
