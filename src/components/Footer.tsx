import React from 'react';
import { 
  MapPin, 
  Mail, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  ChevronUp 
} from 'lucide-react';
import { PumunLogo } from './PumunLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPresmun: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPresmun }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D0B0B] text-slate-300 font-sans border-t border-stone-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Column: Brand & Description (PUMUN) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <PumunLogo variant="full" size="sm" />
              <div>
                <span className="font-serif font-bold text-white text-xl sm:text-2xl tracking-wide block leading-none">
                  PUMUN
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#FDB813] block mt-1">
                  PRESIDENT UNIVERSITY MODEL UNITED NATIONS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md pt-1">
              The official collegiate diplomatic organization and Model United Nations society of President University. Dedicated to cultivating global leadership, multilateral negotiation, and geopolitical scholarship.
            </p>
            <p className="text-[11px] text-stone-500 italic">
              "tagline"
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About PUMUN
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('calendar')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Calendar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('news')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pumun News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('events')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Event & Schedule
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('division')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Secretariat
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('workplan')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Workplan Roadmap
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPresmun} 
                  className="text-[#FDB813] hover:text-white transition-colors cursor-pointer"
                >
                  PresMUN Portal ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Address & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              ADDRESS & CONTACT
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FDB813] shrink-0 mt-0.5" />
                <span>
                  Secretariat PUMUN, President University, Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang Utara, Bekasi 17550 – Indonesia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FDB813] shrink-0" />
                <a 
                  href="mailto:xxx@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  xxx@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <a 
                href="https://www.instagram.com/pumunclub?psln=M3ZxNjBqaDBtZ2Zy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:bg-stone-800 transition-all p-2 rounded-lg"
                aria-label="Instagram"
                title="Instagram @pumunclub"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/president-university-mun-club/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:bg-stone-800 transition-all p-2 rounded-lg"
                aria-label="LinkedIn"
                title="LinkedIn President University MUN Club"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/presunivMUN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:bg-stone-800 transition-all p-2 rounded-lg"
                aria-label="Twitter / X"
                title="Twitter / X @presunivMUN"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://tiktok.com/@pumun_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:bg-stone-800 transition-all p-2 rounded-lg"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.88 3.48 2.67 1.5-.1 2.74-1.22 2.99-2.7.08-.49.07-.99.07-1.49V.02h-3.73v.02z" />
                </svg>
              </a>
              <a 
                href="mailto:xxx@gmail.com" 
                className="hover:text-white hover:bg-stone-800 transition-all p-2 rounded-lg"
                aria-label="Email"
                title="Email: xxx@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white hover:bg-stone-800 transition-all p-2 rounded-lg"
                aria-label="YouTube"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll-to-Top Button */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <PumunLogo variant="seal" size="sm" className="w-4 h-4" />
            <span>© 2026 President University Model United Nations (PUMUN). All Rights Reserved.</span>
          </div>

          {/* Floating red circle back to top button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#B91C1C] hover:bg-[#DC2626] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
