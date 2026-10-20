import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/munData';
import { X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Conference Sessions', 'Opening Ceremony', 'Gala & Socials', 'Awarding Ceremony', 'Workshops'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            PHOTO GALLERY
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Photo documentation of training sessions, workshops, events, and student activities.
          </p>

          <div className="pt-2 flex items-center justify-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid - Exactly Matching Screenshot Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              {/* Photo with Maroon Badge */}
              <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                />
                {/* Floating Maroon Badge */}
                <div className="absolute top-3 left-3 bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                  {item.category.split(' ')[0]}
                </div>

                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  {item.year}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5">
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 font-normal">
                    {item.year} • {item.category}
                  </div>

                  <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-[#7A181D] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    <span className="font-bold text-slate-800 uppercase">LOCATION — </span>
                    {item.location}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-semibold text-slate-900 group-hover:text-[#7A181D] transition-colors border-t border-slate-100">
                  <span>View Photo</span>
                  <span className="ml-1 text-base leading-none">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-3xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900 text-white text-xs font-bold uppercase">
              <div className="flex items-center gap-2">
                <span className="bg-[#7A181D] text-white text-[10px] px-2 py-0.5 rounded">
                  {activePhoto.category}
                </span>
                <span className="font-serif text-sm font-bold">{activePhoto.title} ({activePhoto.year})</span>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="text-white hover:text-slate-300 cursor-pointer p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-black flex items-center justify-center max-h-[60vh]">
              <img 
                src={activePhoto.imageUrl} 
                alt={activePhoto.title}
                className="max-h-[60vh] max-w-full object-contain" 
              />
            </div>

            <div className="p-5 text-xs space-y-1 text-slate-700 bg-white">
              <p className="text-sm font-serif font-bold text-slate-900">{activePhoto.title}</p>
              <p className="text-slate-600 leading-relaxed">{activePhoto.description}</p>
              <div className="text-slate-500 font-medium pt-1">
                Location: {activePhoto.location} · {activePhoto.category}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
