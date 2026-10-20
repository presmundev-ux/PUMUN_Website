import React from 'react';
import { 
  X, 
  ExternalLink, 
  Globe2, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { PumunLogo } from './PumunLogo';

interface PresmunModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresmunModal: React.FC<PresmunModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75">
      <div className="bg-white border border-slate-400 max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header with Diplomatic Blue */}
        <div className="px-6 py-4 bg-[#1872C4] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PumunLogo variant="seal" size="sm" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-blue-100">
                SISTER CONFERENCE & INTERNATIONAL SUMMIT
              </div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                PRESMUN · President University International MUN
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white hover:text-slate-200 p-1 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Hero Banner inside modal */}
          <div className="relative rounded-xl overflow-hidden bg-slate-900 p-6 text-white border border-slate-800">
            <div className="relative z-10 space-y-3">
              <span className="inline-block bg-[#418FDE]/30 text-[#70A9E7] text-[11px] font-semibold px-2.5 py-0.5 rounded border border-[#418FDE]/40">
                Official International Conference
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold">
                PresUniv International Model United Nations (PRESMUN)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                The flagship international conference hosted annually by President University, gathering youth delegates, diplomats, and scholars from across the Asia-Pacific region.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#418FDE]" />
                  <span>Annual Global Assembly</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#418FDE]" />
                  <span>Jababeka, Indonesia</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Accredited International Simulation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Relation Explanation */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h5 className="font-bold text-slate-900 font-serif text-base">
              The Relationship Between PUMUN & PRESMUN
            </h5>
            <p>
              <strong>PUMUN (President University Model United Nations)</strong> serves as the premier student organization, training bureau, and institutional home for diplomacy at President University.
            </p>
            <p>
              <strong>PRESMUN (PresUniv International MUN)</strong> represents the international summit wing that welcomes foreign universities, international high schools, and diplomatic delegations from across the globe to compete for prestigious awards and draft groundbreaking international resolutions.
            </p>
          </div>

          {/* Key Links & Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Official Web Portal
              </span>
              <a
                href="https://presmun.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xs text-[#1E5C99] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>presmun.president.ac.id</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-[11px] text-slate-500 mt-1">
                Access international delegate registration, international accommodation packages, and study materials.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Global Network
              </span>
              <a
                href="https://modelunitednation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xs text-[#1E5C99] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>modelunitednation.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-[11px] text-slate-500 mt-1">
                International MUN circuit reference and global conference directory.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              President University · School of International Relations
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none text-xs text-slate-600 hover:text-slate-900 py-2 px-3 border border-slate-300 rounded-md font-semibold cursor-pointer"
              >
                Close
              </button>
              <a
                href="https://presmun.president.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-[#0B1D3A] hover:bg-[#122B54] text-white text-xs font-semibold py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Visit PRESMUN Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#70A9E7]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
