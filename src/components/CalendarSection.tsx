import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X, Check, Download } from 'lucide-react';

interface CalendarEvent {
  id: string;
  monthBadge: string;
  semester: 'Fall Semester 2026' | 'Spring Semester 2027';
  title: string;
  dates: string;
  time: string;
  venue: string;
  type: string;
  description: string;
  imageUrl: string;
  agendaItems: string[];
}

const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: "cal-1",
    monthBadge: "OCT 2026",
    semester: "Fall Semester 2026",
    title: "PUMUN Grand Open Recruitment & Candidate Interview Phase",
    dates: "October 01 - 15, 2026",
    time: "09:00 - 18:00 WIB",
    venue: "Charles Himawan Auditorium & Secretariat Room",
    type: "Organizational Intake",
    description: "Annual university-wide recruitment welcoming President University freshmen and sophomores across all majors into PUMUN standing committees and functional divisions.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    agendaItems: [
      "Document screening & curriculum vitae review",
      "Executive Board one-on-one panel interviews",
      "Announcement of accepted 2026/2027 Secretariat staff"
    ]
  },
  {
    id: "cal-2",
    monthBadge: "NOV 2026",
    semester: "Fall Semester 2026",
    title: "PresMUN 2026 International Conference & Diplomatic Gala",
    dates: "November 20 - 22, 2026",
    time: "08:00 - 21:00 WIB (3-Day Summit)",
    venue: "President University Convention Center (PUCC)",
    type: "Flagship Summit",
    description: "The 11th annual international conference hosting 650+ collegiate delegates, ambassadorial keynotes, 6 committee simulations, and the Diplomatic Dinner.",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    agendaItems: [
      "Grand Opening Plenary & Keynote Speeches",
      "Six Council Sessions & Moderated Caucuses",
      "Awarding Ceremony, Gavel Presentation & Gala Night"
    ]
  },
  {
    id: "cal-3",
    monthBadge: "DEC 2026",
    semester: "Fall Semester 2026",
    title: "Diplomatic Training Camp & Parliamentary RoP Masterclass",
    dates: "December 12 - 14, 2026",
    time: "13:00 - 17:30 WIB",
    venue: "Auditorium Building A & Online Chambers",
    type: "Internal Training",
    description: "Intensive 3-day internal clinic designed by DTAC to master Harvard and UNA-USA Rules of Procedure, speechcraft rhetoric, and working paper drafting.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    agendaItems: [
      "Parliamentary procedure drills and procedural motion clinics",
      "Position paper review by faculty advisors",
      "Speed resolution drafting and unmoderated caucus simulations"
    ]
  },
  {
    id: "cal-4",
    monthBadge: "FEB 2027",
    semester: "Spring Semester 2027",
    title: "National & Global External Delegation Selection Trials",
    dates: "February 05 - 10, 2027",
    time: "10:00 - 16:00 WIB",
    venue: "Secretariat Headquarters & Moot Court Room",
    type: "Delegation Trials",
    description: "Rigorous selection trials conducted by EDC to assemble President University's official competitive delegation for Harvard WorldMUN and Singapore MUN circuits.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    agendaItems: [
      "Blind policy essay evaluation and topic defense",
      "Full simulation chamber and crisis intervention testing",
      "Final portfolio allocation and delegation roster announcement"
    ]
  },
  {
    id: "cal-5",
    monthBadge: "APR 2027",
    semester: "Spring Semester 2027",
    title: "High School Diplomacy Roadshow & Jababeka Youth MUN Clinic",
    dates: "April 15 - 18, 2027",
    time: "08:30 - 15:00 WIB",
    venue: "PU High School & Regional Partner Campuses",
    type: "Community Outreach",
    description: "Youth outreach program organized by YDCO delivering introductory diplomacy masterclasses, SDGs workshops, and mock debates to secondary schools.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    agendaItems: [
      "'MUN 101' beginner guide for high school students",
      "Interactive climate policy mini-summit",
      "Scholarship guidance and President University admissions talk"
    ]
  },
  {
    id: "cal-6",
    monthBadge: "JUN 2027",
    semester: "Spring Semester 2027",
    title: "PUMUN Annual Think Tank Dossier & General Assembly (RUA)",
    dates: "June 25 - 26, 2027",
    time: "09:00 - 17:00 WIB",
    venue: "PUCC Main Hall & Executive Boardroom",
    type: "Annual Accountability",
    description: "Year-end plenary session presenting PUMUN's research publication, operational accountability report, and the democratic election of the next Secretariat.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    agendaItems: [
      "Release of the 2027 Global Geopolitics Whitepaper by RPB",
      "Secretariat operational report & financial audit",
      "Election and formal inauguration of the 12th Secretary-General"
    ]
  }
];

interface CalendarSectionProps {
  onJoinClick: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onJoinClick }) => {
  const [selectedSemester, setSelectedSemester] = useState<string>('All');
  const [activeModalEvent, setActiveModalEvent] = useState<CalendarEvent | null>(null);

  const filterOptions = ['All', 'Fall Semester 2026', 'Spring Semester 2027'];

  const filteredEvents = selectedSemester === 'All'
    ? CALENDAR_EVENTS
    : CALENDAR_EVENTS.filter(e => e.semester === selectedSemester);

  return (
    <section id="calendar" className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            ANNUAL CALENDAR
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Schedule of open recruitment, training sessions, external delegations, and organization activities.
          </p>

          {/* Filter Buttons */}
          <div className="pt-2 flex items-center justify-center gap-1.5 flex-wrap">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedSemester(opt)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border cursor-pointer transition-colors ${
                  selectedSemester === opt
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Calendar Cards - Following Exact Screenshot Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div 
              key={evt.id}
              onClick={() => setActiveModalEvent(evt)}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              {/* Card Top Image with Maroon Badge */}
              <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden">
                <img 
                  src={evt.imageUrl} 
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                />
                {/* Maroon Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                  {evt.monthBadge}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  {evt.type}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  {/* Meta line */}
                  <div className="text-[11px] sm:text-xs text-slate-500 font-normal">
                    {evt.dates} • {evt.semester}
                  </div>

                  {/* Headline in Formal Serif */}
                  <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-[#7A181D] transition-colors">
                    {evt.title}
                  </h3>

                  {/* Dateline Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    <span className="font-bold text-slate-800 uppercase">VENUE — </span>
                    {evt.venue}. {evt.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#7A181D] transition-colors border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <span>Program Details</span>
                    <span className="text-base leading-none">→</span>
                  </div>

                  <span className="text-[11px] font-bold uppercase text-slate-500 font-mono">
                    {evt.time.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Event Details Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#7A181D] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {activeModalEvent.monthBadge}
                  </span>
                  <span className="text-[11px] uppercase font-bold text-slate-300">
                    {activeModalEvent.semester} · {activeModalEvent.type}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mt-1 leading-snug">
                  {activeModalEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalEvent(null)}
                className="text-white hover:text-slate-300 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Banner Image */}
            <div className="w-full h-44 bg-slate-900 overflow-hidden">
              <img 
                src={activeModalEvent.imageUrl} 
                alt={activeModalEvent.title}
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-800">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-[#7A181D]" />
                  <span><strong>Date:</strong> {activeModalEvent.dates}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-[#7A181D]" />
                  <span><strong>Time:</strong> {activeModalEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#7A181D]" />
                  <span><strong>Venue:</strong> {activeModalEvent.venue}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                  Program Overview
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {activeModalEvent.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-700 tracking-wider block mb-2">
                  Key Agenda & Deliverables
                </span>
                <ul className="space-y-1.5">
                  {activeModalEvent.agendaItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#7A181D] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalEvent(null);
                    onJoinClick();
                  }}
                  className="px-5 py-2 bg-[#FDB813] hover:bg-[#E5A408] text-slate-900 text-xs font-extrabold uppercase tracking-wider rounded-md cursor-pointer shadow-xs"
                >
                  Join PUMUN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
