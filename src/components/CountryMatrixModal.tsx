import React, { useState } from 'react';
import { COUNTRY_MATRIX, CountryMatrixEntry } from '../data/munData';
import { 
  X, 
  Search, 
  Globe2, 
  Check, 
  ShieldAlert, 
  Lock, 
  Filter 
} from 'lucide-react';

interface CountryMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountryForReg: (country: string, committee: string) => void;
}

export const CountryMatrixModal: React.FC<CountryMatrixModalProps> = ({
  isOpen,
  onClose,
  onSelectCountryForReg
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommittee, setSelectedCommittee] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  if (!isOpen) return null;

  const committees = ['All', 'UNSC', 'ARF', 'UNHRC', 'UNEP'];
  const statuses = ['All', 'Available', 'Reserved', 'Assigned'];

  const filtered = COUNTRY_MATRIX.filter((item) => {
    const matchesSearch = 
      item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesComm = selectedCommittee === 'All' || item.committee === selectedCommittee;
    const matchesStat = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesComm && matchesStat;
  });

  const availableCount = COUNTRY_MATRIX.filter(c => c.status === 'Available').length;
  const totalCount = COUNTRY_MATRIX.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1D3A] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#418FDE]/20 text-[#70A9E7] flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                PUMUN 2026 Country Allocation Matrix
              </h3>
              <p className="text-xs text-slate-300">
                Live availability of sovereign delegations across simulated councils
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close country matrix"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and search strip */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by country name (e.g. Indonesia, Japan, USA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-md text-xs sm:text-sm focus:outline-none focus:border-[#418FDE]"
              />
            </div>

            {/* Stats counter */}
            <div className="text-xs text-slate-600 bg-white px-3 py-2 border border-slate-200 rounded-md shrink-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available Portfolios: <strong className="text-slate-900">{availableCount}</strong> / {totalCount}</span>
            </div>
          </div>

          {/* Council & Status filter controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Council:</span>
              <div className="flex items-center gap-1">
                {committees.map((comm) => (
                  <button
                    key={comm}
                    onClick={() => setSelectedCommittee(comm)}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      selectedCommittee === comm
                        ? 'bg-[#1E5C99] text-white font-semibold'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {comm}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Status:</span>
              <div className="flex items-center gap-1">
                {statuses.map((stat) => (
                  <button
                    key={stat}
                    onClick={() => setSelectedStatus(stat)}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      selectedStatus === stat
                        ? 'bg-[#0B1D3A] text-white font-semibold'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {stat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Table content */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="sticky top-0 bg-slate-100 text-slate-600 uppercase text-[11px] font-bold border-b border-slate-200 z-10">
              <tr>
                <th className="py-2.5 px-4 sm:px-6">Country / Member State</th>
                <th className="py-2.5 px-4">Council</th>
                <th className="py-2.5 px-4">Region</th>
                <th className="py-2.5 px-4">Portfolio Status</th>
                <th className="py-2.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 sm:px-6 font-medium text-slate-900">
                    <span className="mr-2 text-base">{item.flag}</span>
                    <span>{item.country}</span>
                    <span className="ml-1.5 text-xs text-slate-400 font-mono">({item.code})</span>
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold text-[#1E5C99]">
                    {item.committee}
                  </td>
                  <td className="py-3 px-4 text-slate-500 text-xs">
                    {item.continent}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded ${
                      item.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      item.status === 'Reserved' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {item.status === 'Available' && <Check className="w-3 h-3" />}
                      {item.status === 'Reserved' && <Lock className="w-3 h-3" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {item.status === 'Available' ? (
                      <button
                        onClick={() => {
                          onSelectCountryForReg(item.country, item.committee);
                          onClose();
                        }}
                        className="bg-[#418FDE] hover:bg-[#347cc4] text-white text-xs font-semibold px-2.5 py-1 rounded transition-colors cursor-pointer"
                      >
                        Claim Country
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Locked</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-xs sm:text-sm">
              No country entries matched your search criteria.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Country allocations operate on a rolling basis following registration submission.</span>
          <button
            onClick={onClose}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-1.5 rounded font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
