import React, { useState } from 'react';
import { EVENTS_LIST, MunEvent } from '../data/munData';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

interface EventSectionProps {
  onRegisterClick: () => void;
}

export const EventSection: React.FC<EventSectionProps> = ({ onRegisterClick }) => {
  const [selectedEventModal, setSelectedEventModal] = useState<MunEvent | null>(null);

  // High quality images for events matching the photo card style
  const eventImages: Record<string, string> = {
    'event-conf-2026': 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    'event-rop-workshop': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    'event-diplomatic-dinner': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    'event-gala-night': 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
  };

  return (
    <section id="events" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            EVENTS & PROGRAMS
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Diplomatic workshops, guest lectures, training sessions, and student activities.
          </p>
        </div>

        {/* 4 Featured Events Grid Following the Exact Screenshot Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS_LIST.map((evt) => {
            const imgUrl = eventImages[evt.id] || 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80';
            return (
              <div 
                key={evt.id}
                onClick={() => setSelectedEventModal(evt)}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                {/* Top Image with Maroon Category Badge */}
                <div className="relative w-full h-44 bg-slate-900 overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  {/* Floating Maroon Badge */}
                  <div className="absolute top-3 left-3 bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                    {evt.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                    {evt.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Meta line */}
                    <div className="text-[11px] text-slate-500 font-normal">
                      {evt.date} • {evt.time}
                    </div>

                    {/* Headline in Formal Serif */}
                    <h3 className="font-serif font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-[#7A181D] transition-colors">
                      {evt.title}
                    </h3>

                    {/* Excerpt with location dateline */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      <span className="font-bold text-slate-800 uppercase">VENUE — </span>
                      {evt.venue}. {evt.description}
                    </p>
                  </div>

                  {/* Read Article / Details style link */}
                  <div className="pt-2 flex items-center text-xs font-semibold text-slate-900 group-hover:text-[#7A181D] transition-colors border-t border-slate-100">
                    <span>View Details</span>
                    <span className="ml-1 text-base leading-none">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Event Modal */}
      {selectedEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="bg-[#7A181D] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {selectedEventModal.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">
                  {selectedEventModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEventModal(null)}
                className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
                <div>Date: <strong>{selectedEventModal.date}</strong></div>
                <div>Time: <strong>{selectedEventModal.time}</strong></div>
                <div>Venue: <strong>{selectedEventModal.venue}</strong></div>
              </div>
              <p className="leading-relaxed pt-2">
                {selectedEventModal.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
              <button
                onClick={() => setSelectedEventModal(null)}
                className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-bold uppercase rounded-md cursor-pointer hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedEventModal(null);
                  onRegisterClick();
                }}
                className="px-5 py-2 bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs font-bold uppercase rounded-md cursor-pointer"
              >
                Join PUMUN
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
