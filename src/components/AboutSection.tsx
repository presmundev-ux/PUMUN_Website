import React from 'react';
import { SECRETARIAT_BOARD } from '../data/munData';
import { PumunLogo } from './PumunLogo';

export const AboutSection: React.FC = () => {
  const sg = SECRETARIAT_BOARD[0]; // Secretary General

  return (
    <section id="about" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Simple & Formal Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            ABOUT PUMUN
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            President University Model United Nations (PUMUN) is a premier collegiate student organization established to cultivate diplomatic negotiation, multilateral debate, and global leadership skills at President University, Kota Jababeka, Indonesia.
          </p>
        </div>

        {/* Secretary-General's Welcome Address - Formal Card, No Blue Lines */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* SG Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <div className="relative">
                <img 
                  src={sg.avatar} 
                  alt={sg.name}
                  className="w-36 h-48 rounded-xl object-cover border border-slate-300 shadow-xs" 
                />
                <span className="absolute bottom-2 left-2 bg-[#7A181D] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Secretary-General
                </span>
              </div>

              <div className="space-y-0.5">
                <h3 className="font-serif text-base font-bold text-slate-900">{sg.name}</h3>
                <p className="text-xs font-semibold text-slate-700">{sg.role}</p>
                <p className="text-xs text-slate-500">{sg.major}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 w-full text-xs text-slate-600 italic">
                "{sg.quote}"
              </div>
            </div>

            {/* Letter Content */}
            <div className="lg:col-span-8 space-y-3.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                    OFFICIAL DIPLOMATIC ADDRESS
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    Welcome Address from the Secretary-General
                  </h4>
                </div>
                <div className="shrink-0 hidden sm:block">
                  <PumunLogo variant="seal" size="sm" />
                </div>
              </div>

              <p className="font-semibold text-slate-800">
                Distinguished Faculty Advisors, Esteemed Members, and Students,
              </p>
              <p>
                It is my honor to welcome you to President University Model United Nations (PUMUN). For over a decade, our organization has championed diplomatic education, critical geopolitical discourse, and international competence among President University students.
              </p>
              <p>
                Through structured academic training, competitive external delegations, investigative policy research, and collaborative youth roadshows, PUMUN empowers students across all faculties to become principled, articulate leaders in a rapidly changing world.
              </p>
              <p>
                We invite passionate students from all backgrounds to join our standing committees and functional divisions, contributing to our mission of advancing youth diplomacy in Indonesia and beyond.
              </p>

              <div className="pt-3 flex items-center justify-between border-t border-slate-200 text-xs text-slate-600">
                <div>
                  <span className="font-serif font-bold text-slate-900 block text-sm">{sg.name}</span>
                  <span>Secretary-General, PUMUN Secretariat</span>
                </div>
                <div className="text-right">
                  <span className="block font-medium">Kota Jababeka, Cikarang</span>
                  <span>Republic of Indonesia</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
