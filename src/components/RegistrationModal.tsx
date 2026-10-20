import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  School, 
  Globe2, 
  Award,
  ChevronRight
} from 'lucide-react';
import { COMMITTEES, DIVISIONS } from '../data/munData';

interface JoinPumunModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCommittee?: string;
}

export const RegistrationModal: React.FC<JoinPumunModalProps> = ({
  isOpen,
  onClose,
  preselectedCommittee = ''
}) => {
  const [step, setStep] = useState<number>(1);
  
  // Member application fields
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [major, setMajor] = useState('International Relations');
  const [batchYear, setBatchYear] = useState('2025');
  
  // Preferences
  const [firstChoice, setFirstChoice] = useState(preselectedCommittee || 'Board of Executive');
  const [secondChoice, setSecondChoice] = useState('Marketing');
  const [experienceLevel, setExperienceLevel] = useState('Beginner (Eager to learn)');
  const [motivation, setMotivation] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');

  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!isOpen) return null;

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const generatedId = `PUMUN-JOIN-2026-${randomCode}`;
    setApplicationId(generatedId);

    // Save to localStorage so status checker works immediately
    const record = {
      id: generatedId,
      fullName,
      studentId,
      email,
      major,
      batchYear,
      firstChoice,
      secondChoice,
      status: 'Application Received (Screening)',
      appliedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    try {
      const existing = JSON.parse(localStorage.getItem('pumun_members_recruitment') || '[]');
      existing.unshift(record);
      localStorage.setItem('pumun_members_recruitment', JSON.stringify(existing));
    } catch {
      // Ignore fallback
    }

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const choiceOptions = DIVISIONS.map(d => d.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#FDB813]">
              PUMUN MEMBERSHIP APPLICATION
            </div>
            <h3 className="font-serif font-bold text-lg leading-tight mt-0.5">
              {isSubmitted ? 'Application Submitted' : 'Join President University Model United Nations'}
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress steps (if not submitted) */}
        {!isSubmitted && (
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
              }`}>1</span>
              <span className={step === 1 ? 'font-bold text-slate-900' : ''}>Student Identity</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
              }`}>2</span>
              <span className={step === 2 ? 'font-bold text-slate-900' : ''}>Role Preference</span>
            </div>
            <div className="w-8 h-px bg-slate-300"></div>

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'
              }`}>3</span>
              <span className={step === 3 ? 'font-bold text-slate-900' : ''}>Review & Submit</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Confirmation Card */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Registration Received
                </span>
                <h4 className="font-serif text-2xl font-bold text-slate-900">
                  Welcome to the Selection Process!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your application to become a member of <strong>President University Model United Nations</strong> has been logged in the Secretariat admissions registry.
                </p>
              </div>

              {/* Application Details Box */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-left max-w-lg mx-auto space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs text-slate-500">Application Number</span>
                  <span className="font-mono font-bold text-slate-900 text-sm">{applicationId}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Candidate Name</span>
                  <span className="font-semibold text-slate-800">{fullName} ({studentId})</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Major & Batch</span>
                  <span className="font-semibold text-slate-800">{major} | Batch {batchYear}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">First Preference</span>
                  <span className="font-semibold text-slate-800">{firstChoice}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-slate-200 pt-2">
                  <span className="text-slate-500">Current Status</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                    Application Received (Screening)
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 max-w-md mx-auto">
                Next Step: The Secretariat Delegate & Membership Affairs team will contact your WhatsApp ({whatsapp}) for the interview timetable.
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleResetAndClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-6 py-2.5 rounded-lg cursor-pointer transition-colors"
                >
                  Close & Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitApplication} className="space-y-5">
              {/* STEP 1: Student Identity */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-base">Step 1: Student Profile</h4>
                    <p className="text-xs text-slate-500">Enter your official student credentials at President University.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Raden Arya Wijaya"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Student ID / NIM *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 012202300045"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Intake / Batch Year *
                      </label>
                      <select
                        value={batchYear}
                        onChange={(e) => setBatchYear(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                      >
                        <option value="2026">Batch 2026 (Freshmen)</option>
                        <option value="2025">Batch 2025 (Sophomore)</option>
                        <option value="2024">Batch 2024 (Junior)</option>
                        <option value="2023">Batch 2023 (Senior)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Major / Study Program *
                      </label>
                      <select
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                      >
                        <option value="International Relations">International Relations</option>
                        <option value="Law">Law</option>
                        <option value="Communications">Communications</option>
                        <option value="Management">Management</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Industrial Engineering">Industrial Engineering</option>
                        <option value="Environmental Engineering">Environmental Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Other">Other Study Program</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+62 812-3456-7890"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Student / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@student.president.ac.id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      disabled={!fullName || !studentId || !whatsapp || !email}
                      onClick={() => setStep(2)}
                      className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue to Preferences</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Role & Committee Preference */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-base">Step 2: Committee & Division Preference</h4>
                    <p className="text-xs text-slate-500">Choose the internal committee or functional division you want to join.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      First Choice (Primary Department) *
                    </label>
                    <select
                      value={firstChoice}
                      onChange={(e) => setFirstChoice(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    >
                      {choiceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Second Choice (Secondary Preference) *
                    </label>
                    <select
                      value={secondChoice}
                      onChange={(e) => setSecondChoice(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    >
                      {choiceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Prior MUN / Organizational Experience
                    </label>
                    <select
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    >
                      <option value="Beginner (Eager to learn)">Beginner (No prior MUN experience, eager to learn)</option>
                      <option value="Intermediate (1-3 MUNs / High school council)">Intermediate (1-3 MUN conferences or high school council)</option>
                      <option value="Advanced (Multiple awards / experienced organizer)">Advanced (Seasoned delegate / conference organizer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Portfolio / CV Link (Google Drive / LinkedIn)
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or LinkedIn URL (Optional)"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-slate-300 text-slate-700 font-bold text-xs uppercase px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-100 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue to Statement</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Statement & Final Submit */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-base">Step 3: Motivation Statement</h4>
                    <p className="text-xs text-slate-500">Briefly share why you wish to join PUMUN and what you hope to achieve.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Why do you want to join PUMUN? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your goals, interest in diplomacy/organizing, and how you plan to contribute to President University Model United Nations..."
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900"
                    ></textarea>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-xs space-y-1.5">
                    <div className="font-bold text-slate-900 uppercase">Application Summary:</div>
                    <div className="text-slate-600">Candidate: <strong>{fullName}</strong> (NIM: {studentId})</div>
                    <div className="text-slate-600">Major: <strong>{major}</strong> | Batch {batchYear}</div>
                    <div className="text-slate-600">Primary Choice: <strong>{firstChoice}</strong></div>
                    <div className="text-slate-600">Secondary Choice: <strong>{secondChoice}</strong></div>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-slate-300 text-slate-700 font-bold text-xs uppercase px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-100 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!motivation}
                      className="bg-[#FDB813] hover:bg-[#E5A408] disabled:bg-slate-300 text-slate-900 font-extrabold text-xs uppercase px-6 py-2.5 rounded-lg cursor-pointer transition-colors shadow-sm"
                    >
                      Submit Member Application
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
