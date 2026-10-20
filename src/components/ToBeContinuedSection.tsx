import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';

interface ToBeContinuedSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  bgLight?: boolean;
  onBackHome?: () => void;
}

export const ToBeContinuedSection: React.FC<ToBeContinuedSectionProps> = ({
  id,
  title,
  subtitle = 'PRESIDENT UNIVERSITY MODEL UNITED NATIONS',
  category,
  bgLight = false,
  onBackHome,
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 sm:py-20 border-b border-slate-200 transition-colors ${
        bgLight ? 'bg-slate-50/70' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Section Header */}
        <div className="space-y-1.5">
          {category && (
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider bg-slate-100 text-slate-700 border border-slate-200 inline-block mb-1">
              {category}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            {title}
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            {subtitle}
          </div>
        </div>

        {/* To Be Continued Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-[#1872C4]">
            <Clock className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider font-sans">
              COMING SOON
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 pt-1">
              To be continued...
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Official content and documentation for this section are being curated and will be published shortly.
            </p>
            <p className="text-[11px] text-slate-400 italic">
              Please check back for official updates from the PUMUN Secretariat.
            </p>
          </div>

          {onBackHome && (
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1872C4] hover:text-[#125899] transition-colors cursor-pointer"
              >
                <span>Return to Home</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
