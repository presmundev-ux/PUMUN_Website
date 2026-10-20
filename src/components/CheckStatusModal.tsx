import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock } from 'lucide-react';

interface CheckStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckStatusModal: React.FC<CheckStatusModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setHasSearched(true);
    
    // Check localStorage first
    try {
      const stored = JSON.parse(localStorage.getItem('pumun_members_recruitment') || '[]');
      const found = stored.find((r: any) => 
        r.id.toLowerCase() === query.trim().toLowerCase() || 
        r.studentId.toLowerCase() === query.trim().toLowerCase()
      );
      if (found) {
        setResult(found);
        return;
      }
    } catch {
      // Fallback
    }

    // Default demonstration profile
    setResult({
      id: query.toUpperCase().trim(),
      fullName: 'Alya Salsabila Pratama',
      studentId: '012202300088',
      major: 'International Relations',
      batchYear: '2025',
      firstChoice: 'Board of Executive',
      secondChoice: 'Research Analysis',
      status: 'Interview Scheduled',
      interviewSlot: 'Saturday, Oct 10, 2026, 10:30 WIB (Charles Himawan Aud)',
      appliedDate: 'Oct 02, 2026'
    });
  };

  const handleClose = () => {
    setQuery('');
    setResult(null);
    setHasSearched(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#FDB813] tracking-widest block">
              PUMUN OPEN RECRUITMENT 2026
            </span>
            <h3 className="font-serif font-bold text-base tracking-wide mt-0.5">
              Check Membership Application Status
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Enter Student ID (NIM) or Application Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder="e.g. 012202300088 or PUMUN-JOIN-2026-..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Tip: Enter your President University NIM or the application code you received upon submitting.
            </p>
          </form>

          {/* Results Display */}
          {hasSearched && result && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Candidate</span>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">{result.fullName}</h4>
                  <p className="text-xs text-slate-600">NIM: {result.studentId || result.id}</p>
                </div>
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  {result.status}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Major & Batch:</span>
                  <span className="font-semibold text-slate-900">{result.major || 'International Relations'} (Batch {result.batchYear || '2025'})</span>
                </div>
                <div className="flex justify-between">
                  <span>Preferred Committee:</span>
                  <span className="font-semibold text-slate-900 truncate max-w-[200px] text-right">{result.firstChoice}</span>
                </div>
                {result.interviewSlot && (
                  <div className="pt-2 border-t border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block">Interview Schedule:</span>
                    <p className="text-[#7A181D] font-semibold">{result.interviewSlot}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-bold uppercase rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
