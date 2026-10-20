/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { PresmunModal } from './components/PresmunModal';
import { CheckStatusModal } from './components/CheckStatusModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollReveal } from './components/ScrollReveal';

// Dedicated Pages with Under Maintenance / To Be Continued UI structures
import { AboutPage } from './pages/AboutPage';
import { CalendarPage } from './pages/CalendarPage';
import { NewsPage } from './pages/NewsPage';
import { EventsPage } from './pages/EventsPage';
import { DivisionPage } from './pages/DivisionPage';
import { WorkplanPage } from './pages/WorkplanPage';
import { GalleryPage } from './pages/GalleryPage';

import { 
  Building2, 
  Calendar, 
  Newspaper, 
  Sparkles, 
  Users2, 
  Target, 
  Camera, 
  ArrowRight,
  ShieldCheck,
  Globe2
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [history, setHistory] = useState<string[]>(['home']);
  
  // Modals state
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isPresmunOpen, setIsPresmunOpen] = useState(false);
  const [isCheckStatusOpen, setIsCheckStatusOpen] = useState(false);

  // Preselected role preference
  const [preselectedCommittee, setPreselectedCommittee] = useState<string>('');

  // Handle navigation to dedicated pages
  const handleNavigate = (pageId: string) => {
    if (pageId === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setHistory((prev) => [...prev, pageId]);
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to previous page
  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // remove current
      const prevPage = newHistory[newHistory.length - 1] || 'home';
      setHistory(newHistory);
      setCurrentPage(prevPage);
    } else {
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenJoin = (committeeName: string = '') => {
    setPreselectedCommittee(committeeName);
    setIsJoinOpen(true);
  };

  // Home Quick Directory Cards
  const menuDirectory = [
    {
      id: 'about',
      title: 'About PUMUN',
      subtitle: 'Institutional Profile & Charter',
      desc: 'Discover PUMUN leadership, diplomatic ethos, mission, and institutional heritage.',
      icon: Building2,
      badge: 'PROFILE'
    },
    {
      id: 'calendar',
      title: 'Annual Calendar',
      subtitle: 'Diplomatic Schedule & Timetable',
      desc: 'Official calendar of workshops, general assemblies, and delegation trials.',
      icon: Calendar,
      badge: 'SCHEDULE'
    },
    {
      id: 'news',
      title: 'Pumun News',
      subtitle: 'Press Releases & Dispatches',
      desc: 'Official diplomatic dispatches, committee updates, and institutional statements.',
      icon: Newspaper,
      badge: 'DISPATCHES'
    },
    {
      id: 'events',
      title: 'Events & Programs',
      subtitle: 'Diplomatic Academies & Workshops',
      desc: 'Comprehensive training clinics, rules of procedure bootcamps, and diplomatic summits.',
      icon: Sparkles,
      badge: 'PROGRAMS'
    },
    {
      id: 'division',
      title: 'Secretariat & Divisions',
      subtitle: 'Executive Board & Functional Bureaus',
      desc: 'Leadership roster and specialized operational divisions of the PUMUN Secretariat.',
      icon: Users2,
      badge: 'ORGANIZATION'
    },
    {
      id: 'workplan',
      title: 'Workplan Roadmap',
      subtitle: 'Annual Strategic Milestones',
      desc: 'Monthly institutional targets and operational key performance indicators.',
      icon: Target,
      badge: 'ROADMAP'
    },
    {
      id: 'gallery',
      title: 'Photo Gallery',
      subtitle: 'Visual Archive & Documentation',
      desc: 'Photographic documentation of committee sessions, award ceremonies, and diplomatic forums.',
      icon: Camera,
      badge: 'ARCHIVE'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans relative">
      {/* Sticky Navigation */}
      <Navbar
        activeSection={currentPage}
        onNavigate={handleNavigate}
        onOpenRegister={() => handleOpenJoin('')}
        onOpenPresmun={() => setIsPresmunOpen(true)}
        onOpenCheckStatus={() => setIsCheckStatusOpen(true)}
      />

      {/* Main Content Router */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <main>
            {/* Hero Section with smooth reveal and social badges */}
            <div id="home">
              <Hero
                onJoinClick={() => handleOpenJoin('')}
                onOpenCheckStatus={() => setIsCheckStatusOpen(true)}
                onOpenPresmun={() => setIsPresmunOpen(true)}
              />
            </div>

            {/* Home Portal Highlights & Section Navigation Directory */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                
                {/* Section Header */}
                <ScrollReveal>
                  <div className="text-center max-w-3xl mx-auto space-y-2">
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider bg-blue-100/80 text-[#1872C4] border border-blue-200">
                      PUMUN PORTAL DIRECTORY
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
                      EXPLORE PUMUN DIRECTORY
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Select any section below to explore the institutional structure, official roadmap, and programs of PUMUN.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Directory Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuDirectory.map((menu, index) => {
                    const Icon = menu.icon;
                    return (
                      <ScrollReveal key={menu.id} delayMs={index * 60}>
                        <div
                          onClick={() => handleNavigate(menu.id)}
                          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-[#1872C4] transition-all cursor-pointer group flex flex-col justify-between h-full space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1872C4] flex items-center justify-center group-hover:bg-[#1872C4] group-hover:text-white transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                                {menu.badge}
                              </span>
                            </div>

                            <div>
                              <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#1872C4] transition-colors">
                                {menu.title}
                              </h3>
                              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                                {menu.subtitle}
                              </p>
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {menu.desc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1872C4]">
                            <span>Explore Page</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* International Affiliation Banner */}
                <ScrollReveal delayMs={100}>
                  <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#1872C4] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1.5 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-yellow-300 text-xs font-bold uppercase tracking-wider">
                        <Globe2 className="w-4 h-4" />
                        <span>International Wing</span>
                      </div>
                      <h4 className="font-serif font-bold text-xl sm:text-2xl">
                        PresMUN (President International Model United Nations)
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                        The premier international collegiate conference wing welcoming university and secondary school delegations from across the globe.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsPresmunOpen(true)}
                      className="px-6 py-3 bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shrink-0 cursor-pointer shadow-sm transition-transform hover:scale-105"
                    >
                      Explore PresMUN Portal ↗
                    </button>
                  </div>
                </ScrollReveal>

              </div>
            </section>
          </main>
        )}

        {/* Dedicated Pages with Arrow Back Navigation */}
        {currentPage === 'about' && (
          <AboutPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'calendar' && (
          <CalendarPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'news' && (
          <NewsPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'events' && (
          <EventsPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'division' && (
          <DivisionPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'workplan' && (
          <WorkplanPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onBack={handleBack} onGoHome={() => handleNavigate('home')} />
        )}
      </div>

      {/* Official Footer with Social Media Links */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPresmun={() => setIsPresmunOpen(true)}
      />

      {/* Join PUMUN Recruitment Modal */}
      <RegistrationModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        preselectedCommittee={preselectedCommittee}
      />

      {/* PresMUN International Portal Modal */}
      <PresmunModal
        isOpen={isPresmunOpen}
        onClose={() => setIsPresmunOpen(false)}
      />

      {/* Check Status Modal */}
      <CheckStatusModal
        isOpen={isCheckStatusOpen}
        onClose={() => setIsCheckStatusOpen(false)}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
