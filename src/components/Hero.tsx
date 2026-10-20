import React from 'react';
import { ExternalLink, Instagram, Twitter, Mail, Linkedin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onJoinClick: () => void;
  onOpenCheckStatus: () => void;
  onOpenPresmun: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onJoinClick,
  onOpenCheckStatus,
  onOpenPresmun
}) => {
  return (
    <section className="bg-[#1872C4] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Formal Typography */}
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="up" delayMs={50}>
              <div className="space-y-1.5">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-blue-100 block">
                  DISCOVER THE WORLD OF DIPLOMACY WITH
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-sans">
                  MODEL UNITED NATIONS
                </h1>

                <div className="text-sm sm:text-base font-bold text-blue-100">
                  by President University (PUMUN Organization)
                </div>
                <div className="text-xs italic text-yellow-300 font-medium">
                  "tagline"
                </div>
              </div>
            </ScrollReveal>

            {/* Organization Mission & Profile Box */}
            <ScrollReveal direction="up" delayMs={150}>
              <div className="bg-white/10 rounded-xl border border-white/20 p-4 text-xs sm:text-sm space-y-1 backdrop-blur-xs">
                <div className="font-semibold text-white">
                  Official Student Diplomatic Organization of President University
                </div>
                <div className="text-blue-100 text-xs flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  <span>Secretariat: Kota Jababeka, Cikarang, Indonesia</span>
                  <span className="opacity-40">|</span>
                  <span>Open Recruitment: 2026/2027 Academic Intake</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Buttons & Status */}
            <ScrollReveal direction="up" delayMs={250}>
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onJoinClick}
                    className="bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider px-7 py-3 rounded-full cursor-pointer shadow-xs transition-transform hover:scale-105"
                  >
                    JOIN PUMUN
                  </button>

                  <button
                    onClick={onOpenPresmun}
                    className="bg-black/20 hover:bg-black/30 text-yellow-300 hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-full border border-yellow-300/40 cursor-pointer transition-colors flex items-center gap-1.5"
                  >
                    <span>PresMUN Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Recruitment Check Status */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white pt-1">
                  <span>Applied for Recruitment?</span>
                  <button
                    onClick={onOpenCheckStatus}
                    className="bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 font-bold px-2.5 py-0.5 rounded text-xs uppercase cursor-pointer transition-colors"
                  >
                    Check Your Status
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Media Link Badges */}
            <ScrollReveal direction="up" delayMs={350}>
              <div className="pt-3 border-t border-white/20 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-blue-200 text-[11px] font-semibold mr-1">Connect with PUMUN:</span>
                
                <a
                  href="https://www.instagram.com/pumunclub?psln=M3ZxNjBqaDBtZ2Zy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-[11px]"
                  title="Instagram @pumunclub"
                >
                  <Instagram className="w-3 h-3 text-[#FDB813]" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/president-university-mun-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-[11px]"
                  title="LinkedIn President University MUN Club"
                >
                  <Linkedin className="w-3 h-3 text-[#FDB813]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com/presunivMUN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-[11px]"
                  title="Twitter / X @presunivMUN"
                >
                  <Twitter className="w-3 h-3 text-[#FDB813]" />
                  <span>Twitter</span>
                </a>

                <a
                  href="https://tiktok.com/@pumun_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-[11px]"
                  title="TikTok"
                >
                  <svg className="w-3 h-3 fill-[#FDB813]" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.88 3.48 2.67 1.5-.1 2.74-1.22 2.99-2.7.08-.49.07-.99.07-1.49V.02h-3.73v.02z" />
                  </svg>
                  <span>TikTok</span>
                </a>

                <a
                  href="mailto:xxx@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-[11px]"
                  title="Email: xxx@gmail.com"
                >
                  <Mail className="w-3 h-3 text-[#FDB813]" />
                  <span>Email</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Clean Formal Delegate Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="left" delayMs={200}>
              <div className="w-full max-w-md rounded-2xl border-4 border-white/20 bg-slate-900 overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
                  alt="President University Model United Nations Assembly"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="bg-slate-900 px-4 py-2 text-white flex items-center justify-between text-xs border-t border-white/10">
                  <span className="font-bold uppercase tracking-wider">PUMUN Secretariat</span>
                  <span className="text-slate-400">Kota Jababeka, Indonesia</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
