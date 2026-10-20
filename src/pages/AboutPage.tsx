import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { PumunLogo } from '../components/PumunLogo';
import { Shield, Target, Compass, Award, FileText } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onGoHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onGoHome }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <PageHeader
        title="ABOUT PUMUN"
        category="ORGANIZATION PROFILE"
        subtitle="PRESIDENT UNIVERSITY MODEL UNITED NATIONS"
        onBack={onBack}
        onGoHome={onGoHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-12">
        {/* Notice Card */}
        <ScrollReveal>
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 sm:p-6 text-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-100 text-[#1872C4] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-bold uppercase tracking-wider block text-xs text-[#1872C4]">
                INSTITUTIONAL FRAMEWORK READY
              </span>
              <p className="text-slate-600 leading-relaxed">
                The official organizational profile structure for PUMUN is established. The sections below are designated for the official address from the Secretary-General, institutional charter, and mission statement upon final ratification.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Executive Address Placeholder Card */}
        <ScrollReveal delayMs={100}>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  DIPLOMATIC ADDRESS SLOT
                </span>
                <h3 className="font-serif font-bold text-xl text-slate-900 mt-0.5">
                  Welcome Address from the Secretary-General
                </h3>
              </div>
              <div className="shrink-0">
                <PumunLogo size="sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Photo Box Placeholder */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                <div className="w-36 h-48 rounded-xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-3 text-center text-slate-400">
                  <span className="text-xs font-semibold">Official Portrait</span>
                  <span className="text-[10px] text-slate-400 mt-1">Secretary-General</span>
                </div>
                <div className="space-y-1">
                  <div className="h-4 w-32 bg-slate-200 rounded" />
                  <div className="h-3 w-40 bg-slate-100 rounded" />
                </div>
              </div>

              {/* Text Wireframe Placeholder */}
              <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-500">
                <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold text-xs text-slate-600">Executive Address Area</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200/80 rounded" />
                  <div className="h-3 w-5/6 bg-slate-200/80 rounded" />
                  <div className="h-3 w-4/6 bg-slate-200/80 rounded" />
                </div>
                <p className="text-xs text-slate-400 italic">
                  * The official welcome address from the Secretary-General of PUMUN will be published in this section.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Vision, Mission, Values Structural Grids */}
        <ScrollReveal delayMs={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-slate-800">Organizational Vision</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designated slot for PUMUN official international vision and collegiate aspirations for 2026/2027.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-slate-800">Organizational Mission</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designated slot for diplomatic education missions and collegiate leadership objectives.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 space-y-3 text-center">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-slate-800">Core Values</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Guiding tenets of diplomatic integrity, multilateral cooperation, and substantive rigor.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  );
};
