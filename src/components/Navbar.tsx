import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ExternalLink,
  Instagram,
  Twitter,
  Mail,
  Linkedin
} from 'lucide-react';
import { PumunLogo } from './PumunLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenRegister: () => void;
  onOpenPresmun: () => void;
  onOpenCheckStatus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenRegister,
  onOpenPresmun,
  onOpenCheckStatus
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'news', label: 'Pumun News' },
    { id: 'events', label: 'Event' },
    { id: 'division', label: 'Division' },
    { id: 'workplan', label: 'Workplan' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1872C4] shadow-md border-b border-[#145fa4]">
      {/* Top Utility & Social Links Bar */}
      <div className="bg-[#125899] text-blue-100 text-[11px] border-b border-blue-400/20 px-4 sm:px-8 py-1 hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">President University Model United Nations</span>
          <span className="opacity-40">|</span>
          <span>Kota Jababeka, Indonesia</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-blue-200 text-[11px]">Follow Us:</span>
          <a
            href="https://www.instagram.com/pumunclub?psln=M3ZxNjBqaDBtZ2Zy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            title="Instagram @pumunclub"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/president-university-mun-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            title="LinkedIn President University MUN Club"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://x.com/presunivMUN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            title="Twitter / X @presunivMUN"
          >
            <Twitter className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Twitter</span>
          </a>
          <a
            href="https://tiktok.com/@pumun_official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            title="TikTok"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.88 3.48 2.67 1.5-.1 2.74-1.22 2.99-2.7.08-.49.07-.99.07-1.49V.02h-3.73v.02z" />
            </svg>
            <span className="hidden md:inline">TikTok</span>
          </a>
          <a
            href="mailto:xxx@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1"
            title="Email xxx@gmail.com"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Email</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Official PUMUN Logos & Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            {/* Authentic PUMUN Shield Logo */}
            <div className="bg-white p-1 rounded-md shadow-xs">
              <PumunLogo variant="full" size="sm" />
            </div>

            <div className="flex flex-col text-white">
              <span className="font-bold tracking-wider text-lg sm:text-xl font-sans leading-tight">
                PUMUN
              </span>
              <span className="text-[10.5px] text-blue-100 font-medium tracking-tight hidden sm:block">
                President University Model United Nations
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Formal plain styling from user screenshot) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-white font-bold border-b-2 border-white pb-1' 
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* PresMUN Web Link (Requested by user) */}
            <button
              onClick={onOpenPresmun}
              className="text-xs font-bold uppercase tracking-wider text-yellow-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer bg-white/10 px-2.5 py-1 rounded"
              title="President International Model United Nations"
            >
              <span>PresMUN ↗</span>
            </button>

            {/* Join PUMUN Button */}
            <button
              onClick={onOpenRegister}
              className="bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow cursor-pointer ml-2"
            >
              Join PUMUN
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="bg-[#FDB813] text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#155A9C] border-t border-[#124b82] px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-blue-400/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-xs font-semibold rounded text-white ${
                  activeSection === item.id ? 'bg-white/20 font-bold' : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPresmun();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-xs font-bold text-yellow-300 py-2 px-3 bg-white/10 rounded flex items-center justify-between"
            >
              <span>PresMUN International Web</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                onOpenCheckStatus();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left text-xs font-semibold text-white py-2 px-3 bg-black/20 rounded"
            >
              Check Application Status
            </button>

            <button
              onClick={() => {
                onOpenRegister();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#FDB813] text-slate-900 text-center py-2.5 rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Join PUMUN
            </button>

            {/* Mobile Social Media Icons */}
            <div className="pt-3 border-t border-blue-400/20 grid grid-cols-5 gap-1 text-white text-center">
              <a
                href="https://www.instagram.com/pumunclub?psln=M3ZxNjBqaDBtZ2Zy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-1 text-xs"
                title="Instagram @pumunclub"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-[10px]">IG</span>
              </a>
              <a
                href="https://www.linkedin.com/company/president-university-mun-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-1 text-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-[10px]">LinkedIn</span>
              </a>
              <a
                href="https://x.com/presunivMUN"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-1 text-xs"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-[10px]">X</span>
              </a>
              <a
                href="https://tiktok.com/@pumun_official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-1 text-xs"
                title="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.88 3.48 2.67 1.5-.1 2.74-1.22 2.99-2.7.08-.49.07-.99.07-1.49V.02h-3.73v.02z" />
                </svg>
                <span className="text-[10px]">TikTok</span>
              </a>
              <a
                href="mailto:xxx@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex flex-col items-center gap-1 text-xs"
                title="Email: xxx@gmail.com"
              >
                <Mail className="w-4 h-4" />
                <span className="text-[10px]">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
