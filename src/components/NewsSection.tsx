import React, { useState } from 'react';
import { NEWS_ARTICLES, NewsArticle } from '../data/munData';
import { Search, X } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'IPC News', 'Press Release', 'Diplomatic Insight', 'Conference Update'];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.agency && article.agency.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="news" className="py-14 sm:py-16 bg-slate-50/60 border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-sans">
            PUMUN NEWS
          </h2>
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            PRESIDENT UNIVERSITY MODEL UNITED NATIONS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Articles, press releases, and diplomatic insights from PUMUN.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border cursor-pointer whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1872C4] text-white border-[#1872C4]'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-md text-xs focus:outline-none focus:border-[#1872C4]"
            />
          </div>
        </div>

        {/* 3-Column News Cards Grid Matching Uploaded Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const agencyTag = article.agency || (article.category === 'IPC News' ? 'IPC PRESS' : 'PUMUN');
            return (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                {/* Card Top Image with Maroon Agency Badge */}
                <div className="relative w-full h-48 sm:h-52 bg-slate-900 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  {/* Floating Red/Maroon Badge Top Left */}
                  <div className="absolute top-3 left-3 bg-[#7A181D] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider font-sans">
                    {agencyTag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {/* Meta line: Date • By Author */}
                    <div className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      {article.date} • By {article.author}
                    </div>

                    {/* Headline in Formal Serif Font */}
                    <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-[#7A181D] transition-colors">
                      {article.title}
                    </h3>

                    {/* Dateline and Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {article.dateline && (
                        <span className="font-bold text-slate-800 uppercase">
                          {article.dateline} —{' '}
                        </span>
                      )}
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read Article Link with Arrow */}
                  <div className="pt-2 flex items-center text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#7A181D] transition-colors">
                    <span>Read Article</span>
                    <span className="ml-1 text-base leading-none">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-slate-300 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="p-5 bg-[#1872C4] text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  {activeArticle.agency && (
                    <span className="bg-[#7A181D] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {activeArticle.agency}
                    </span>
                  )}
                  <span className="text-[11px] uppercase font-bold text-blue-100">
                    {activeArticle.category} · {activeArticle.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif mt-1 leading-snug">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-white hover:text-slate-200 p-1 cursor-pointer shrink-0 ml-3"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Image Banner */}
            <div className="w-full h-56 bg-slate-900 overflow-hidden">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <div className="text-xs text-slate-500 pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>By <strong>{activeArticle.author}</strong> ({activeArticle.authorRole})</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="space-y-3">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
