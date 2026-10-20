export interface Committee {
  id: string;
  name: string;
  shortName: string;
  focusArea: string;
  description: string;
  leadRole: string;
  leadName: string;
  membersCount: number;
  openRecruitmentQuota: number;
  backgroundUrl: string;
  keyResponsibilities: string[];
  qualifications: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Press Release' | 'Diplomatic Insight' | 'Conference Update' | 'Delegate Spotlight' | 'IPC News';
  agency?: string;
  dateline?: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

export interface MunEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  category: 'Flagship' | 'Workshop' | 'Pre-Event' | 'Social';
  description: string;
  status: 'Open' | 'Upcoming' | 'Completed';
  registrationDeadline: string;
}

export interface Division {
  id: string;
  name: string;
  shortName: string;
  headName: string;
  headTitle: string;
  headAvatar: string;
  quote: string;
  description: string;
  responsibilities: string[];
  deliverables: string[];
  membersCount: number;
  iconName: string;
}

export interface WorkplanMilestone {
  id: string;
  quarter: 'Q1 2026' | 'Q2 2026' | 'Q3 2026' | 'Q4 2026';
  monthRange: string;
  title: string;
  division: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
  milestonePoints: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Conference Sessions' | 'Opening Ceremony' | 'Gala & Socials' | 'Awarding Ceremony' | 'Workshops';
  year: '2025' | '2024' | '2023';
  description: string;
  imageUrl: string;
  location: string;
}

export interface CountryMatrixEntry {
  country: string;
  code: string;
  flag: string;
  committee: string;
  status: 'Available' | 'Reserved' | 'Assigned';
  continent: 'Asia' | 'Europe' | 'Americas' | 'Africa' | 'Oceania' | 'Global / IGO';
}

export const PUMUN_INFO = {
  name: "President University Model United Nations",
  edition: "11th Annual Edition (PUMUN 2026)",
  theme: "Navigating Multilateralism in an Era of Polycrisis: Rebuilding Global Trust, Resilience, and Sustainable Peace",
  dates: "November 20 - 22, 2026",
  venue: "President University Convention Center & Charles Himawan Auditorium, Kota Jababeka, Cikarang, Indonesia",
  earlyBirdDeadline: "August 30, 2026",
  regularDeadline: "October 15, 2026",
  expectedDelegates: "650+",
  partnerEmbassies: "18+",
  contactEmail: "xxx@gmail.com",
  instagram: "@pumunclub",
  linkedin: "President University MUN Club",
};

export const COMMITTEES: Committee[] = [
  {
    id: "dtac",
    name: "Diplomatic Training & Academic Coaching Committee",
    shortName: "DTAC",
    focusArea: "Debate Coaching, RoP Mastery & Speechcraft",
    description: "The core academic engine of PUMUN responsible for curriculum design, weekly simulation chambers, public speaking drills, and training novice members into championship-caliber debaters.",
    leadRole: "Academic Director",
    leadName: "Arkananta Dwi Putra",
    membersCount: 18,
    openRecruitmentQuota: 6,
    backgroundUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    keyResponsibilities: [
      "Conduct weekly parliamentary debate training and resolution drafting workshops",
      "Coach delegates on Harvard & UNA-USA Rules of Procedure",
      "Organize internal mock chambers and peer adjudication clinics"
    ],
    qualifications: [
      "Active President University student with passion for debate & diplomacy",
      "Strong analytical writing and English verbal communication skills",
      "Prior MUN experience or debate club participation is advantageous"
    ]
  },
  {
    id: "edc",
    name: "External Delegations & Competitions Committee",
    shortName: "EDC",
    focusArea: "Competitive Squad, Delegations & National/Global MUNs",
    description: "Selects, prepares, finances, and leads President University's official student delegation to premier national and international MUN conferences worldwide (Harvard WorldMUN, Asia-Pacific MUN, etc.).",
    leadRole: "Head of Delegations",
    leadName: "Rizky Ramadhan",
    membersCount: 16,
    openRecruitmentQuota: 5,
    backgroundUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    keyResponsibilities: [
      "Coordinate delegation selection trials and competitive briefing sessions",
      "Liaise with international conference secretariats for country portfolio allocation",
      "Manage travel logistics, institutional sponsorships, and delegate mentoring"
    ],
    qualifications: [
      "Demonstrated commitment to represent President University in competitive circuits",
      "High discipline and readiness for rigorous pre-conference research camps",
      "Team player with cross-cultural adaptability"
    ]
  },
  {
    id: "phc",
    name: "PresMUN Conference Host Committee",
    shortName: "PHC",
    focusArea: "International Conference Planning & Secretariat Operations",
    description: "The dedicated organizing steering committee behind PresMUN (President International Model United Nations), executing logistics, council administration, and diplomatic partnerships.",
    leadRole: "Secretary-General of PresMUN",
    leadName: "Farhan Hakim",
    membersCount: 28,
    openRecruitmentQuota: 10,
    backgroundUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    keyResponsibilities: [
      "Manage comprehensive summit venue, technical setup, and protocol hospitality",
      "Coordinate international participant registrations and embassy accreditations",
      "Execute the Grand Opening Ceremony, Diplomatic Dinner, and Social Gala"
    ],
    qualifications: [
      "Interest in large-scale event production, crisis management, or protocol relations",
      "Solid organizational and interpersonal problem-solving skills",
      "Ability to coordinate with university administration and external vendors"
    ]
  },
  {
    id: "rpb",
    name: "Research & Policy Bureau",
    shortName: "RPB",
    focusArea: "Foreign Policy Analysis, Position Papers & PUMUN News",
    description: "The intellectual think tank of PUMUN producing geopolitical intelligence reports, position paper guidelines, and investigative diplomatic dispatches published on PUMUN News.",
    leadRole: "Editor-in-Chief & Research Lead",
    leadName: "Jessica Lauren",
    membersCount: 14,
    openRecruitmentQuota: 4,
    backgroundUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    keyResponsibilities: [
      "Author substantive study dossiers on contemporary international crises",
      "Publish journalistic coverage and editorial commentary under PUMUN News & IPC",
      "Review and evaluate working papers, treaties, and draft resolutions"
    ],
    qualifications: [
      "Strong research background in International Relations, Law, or Communications",
      "Sharp editing acumen and objective factual reporting standards",
      "Keen interest in multilateral policy, treaties, and global affairs"
    ]
  },
  {
    id: "ydco",
    name: "Youth Diplomacy & Community Outreach",
    shortName: "YDCO",
    focusArea: "High School Roadshows & Youth Leadership Empowerment",
    description: "Drives PUMUN's educational social impact through diplomatic roadshows, high school mentoring programs, charity summits, and youth MUN introductory clinics across Indonesia.",
    leadRole: "Director of Outreach",
    leadName: "Nadia Kusuma",
    membersCount: 12,
    openRecruitmentQuota: 5,
    backgroundUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    keyResponsibilities: [
      "Host 'MUN 101' masterclasses for high school students across Greater Jakarta & West Java",
      "Lead community outreach and social diplomacy projects aligned with UN SDGs",
      "Build partnerships with youth communities, student councils, and educational NGOs"
    ],
    qualifications: [
      "Enthusiastic educator and youth mentor with engaging communication style",
      "Strong community engagement, empathy, and networking initiative",
      "Experience in youth projects or educational advocacy is a plus"
    ]
  },
  {
    id: "acab",
    name: "Alumni & Career Development Board",
    shortName: "ACAB",
    focusArea: "Diplomatic Mentorship, Alumni Network & Career Pathways",
    description: "Bridges current PUMUN members with our alumni network working in foreign ministries, the United Nations, multinational consulting firms, and international law practices.",
    leadRole: "Head of Alumni Relations",
    leadName: "Eleanor Vance",
    membersCount: 10,
    openRecruitmentQuota: 4,
    backgroundUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    keyResponsibilities: [
      "Organize Diplomatic Career Talks and closed-door alumni sharing sessions",
      "Maintain the global PUMUN Alumni Directory across 20+ countries",
      "Facilitate internship opportunities and professional mentorship for members"
    ],
    qualifications: [
      "High professionalism, executive communication, and relationship management",
      "Interest in career networking, corporate relations, and diplomatic careers",
      "Well-organized record keeping and stakeholder coordination"
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-shot-1",
    title: "Death Penalty Debate Sparks Fierce Clashes Between Global Powers in UNGA",
    agency: "BBC",
    dateline: "CIKARANG",
    excerpt: "Reporting from the United Nations General Assembly's 6th Session that was held in President University, Cikarang on 11th of July 2026, the calm atmosphere had fractured under passionate debates on human dignity, deterrence, and sovereign judicial rights.",
    content: [
      "CIKARANG — Reporting from the United Nations General Assembly's 6th Session that was held in President University, Cikarang on 11th of July 2026, the calm atmosphere had fractured under passionate debates on human dignity, deterrence, and sovereign judicial rights.",
      "Tensions reached a boiling point as the delegate of the United States and the delegate of Iran exchanged heated rhetoric regarding the international moratorium on capital punishment.",
      "With dozens of member states divided along regional alignments, the Legal Committee (Sixth Committee) witnessed unprecedented unmoderated caucusing as delegates scrambled to salvage a consensus draft resolution before the afternoon voting session."
    ],
    category: "IPC News",
    author: "Alya Salsabila",
    authorRole: "International Press Corps (BBC Bureau)",
    date: "July 11, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "news-shot-2",
    title: "Myanmar urged by UNHRC over worsening refugee situation",
    agency: "TRT WORLD",
    dateline: "GENEVA",
    excerpt: "As the United Nations Human Rights Council (UNHRC) continues discussions on Myanmar's worsening humanitarian crisis, pressure is mounting on the international community to fund safe corridors and ensure non-refoulement protection for displaced populations across border regions.",
    content: [
      "GENEVA — As the United Nations Human Rights Council (UNHRC) continues discussions on Myanmar's worsening humanitarian crisis, pressure is mounting on the international community to fund safe corridors and ensure non-refoulement protection for displaced populations across border regions.",
      "Delegates from ASEAN member states and European donor nations called for immediate biometric registration and uninterrupted humanitarian aid delivery to border camps.",
      "'The humanitarian imperative supersedes political deadlock,' argued the delegate representing UNHCR. 'Without immediate coordinated action, an entire generation of displaced children faces statelessness.'"
    ],
    category: "Diplomatic Insight",
    author: "Fahrez Adi",
    authorRole: "Senior Diplomatic Correspondent (TRT World)",
    date: "July 11, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "news-shot-3",
    title: "Inside the Fractural UNHRC Press Conference on Myanmar",
    agency: "BBC",
    dateline: "CIKARANG",
    excerpt: "Can international human rights accountability truly exist when a regime is allowed to become its own judge? The opening minutes of the UNHRC press conference descended into intense journalistic scrutiny as reporters pressed the chair on investigative access.",
    content: [
      "CIKARANG — Can international human rights accountability truly exist when a regime is allowed to become its own judge? The opening minutes of the UNHRC press conference descended into intense journalistic scrutiny as reporters pressed the chair on investigative access.",
      "Journalists from BBC, Reuters, and Al Jazeera pressed council representatives on the feasibility of the proposed fact-finding mission and the legal enforceability of recommendations submitted to the Security Council.",
      "The press briefing concluded with a contentious defense of national sovereignty, signaling that consensus in subsequent draft resolutions remains precarious."
    ],
    category: "IPC News",
    author: "Alya Salsabila",
    authorRole: "International Press Corps (BBC Bureau)",
    date: "July 11, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "news-1",
    title: "PUMUN 2026 Unveils Grand Theme: Navigating Multilateralism in an Era of Polycrisis",
    excerpt: "President University Model United Nations proudly reveals the conceptual vision guiding this year's 11th edition, focusing on systemic resilience and collaborative diplomacy.",
    content: [
      "Kota Jababeka, Indonesia — The Executive Secretariat of President University Model United Nations (PUMUN) has officially announced the overarching theme for its 11th annual international conference: 'Navigating Multilateralism in an Era of Polycrisis: Rebuilding Global Trust, Resilience, and Sustainable Peace'.",
      "In an era where geopolitical friction, technological disruptions, and ecological instability converge simultaneously, the need for empathetic diplomacy and rigorous multilateral consensus has never been more urgent. PUMUN 2026 aims to serve as a crucible where youth delegates do not merely simulate diplomacy, but pioneer actionable frameworks.",
      "'We are not living through isolated challenges, but an interwoven polycrisis,' remarked the Secretary-General during the launch address. 'Through rigorous debate, procedural mastery, and principled negotiation, PUMUN 2026 empowers students to bridge ideological divides and discover common humanity.'",
      "The conference will feature six simulation councils ranging from the United Nations Security Council to the dynamic 1962 Historical Crisis Committee, hosting over 650 delegates from universities and secondary institutions across the Indo-Pacific region."
    ],
    category: "Press Release",
    author: "Secretariat Media & Publication Division",
    authorRole: "Bureau of Public Information",
    date: "September 24, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "news-2",
    title: "Early Bird Delegate Registration Surges with International Delegations from 14 Nations",
    excerpt: "Record-breaking early registration phase underscores PUMUN's status as one of Southeast Asia's most anticipated collegiate diplomatic conferences.",
    content: [
      "Within forty-eight hours of opening the Early Bird portal, PUMUN 2026 has witnessed unprecedented participation from delegations representing Singapore, Malaysia, the Philippines, Japan, Australia, India, and prestigious Indonesian universities.",
      "The Department of Delegate Relations confirmed that coveted allocations for the United Nations Security Council and the Historical Crisis Committee are over 75% filled. Double delegation applications have experienced a 40% year-on-year increase.",
      "Delegates are encouraged to submit their committee and country preferences early to secure their top-choice portfolios prior to the regular deadline closing on October 15, 2026."
    ],
    category: "Conference Update",
    author: "Delegate Relations Team",
    authorRole: "Under-Secretary-General for Delegate Affairs",
    date: "September 28, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "news-3",
    title: "Mastering the Rules of Procedure: 5 Cardinal Tips for Novice and Seasoned Delegates",
    excerpt: "Insights from PUMUN's Substantive Board on leveraging points, motions, unmoderated caucuses, and working papers to dominate the committee floor.",
    content: [
      "A Model United Nations conference can initially feel intimidating with its labyrinth of parliamentary rules, points of personal privilege, and formal resolution phrasing. However, the Rules of Procedure (RoP) are designed to empower, not constrain.",
      "1. Master the Flow of Debate: Distinguish between Moderated Caucuses (targeted debate with specific speaker times) and Unmoderated Caucuses (informal lobbying and resolution drafting).",
      "2. Write Purposeful Working Papers: Avoid writing resolutions in isolation. Real diplomacy happens in blocs; build coalitions with diverse regional interests to construct robust draft clauses.",
      "3. Use Points with Precision: Understand the hierarchy between Points of Order, Points of Parliamentary Inquiry, and Points of Personal Privilege.",
      "4. Embody Foreign Policy Consistency: High-scoring delegates stay strictly loyal to their assigned country's foreign policy rather than their personal beliefs.",
      "5. Diplomacy Over Belligerence: The most impactful delegates are coalition-builders who listen actively and synthesize competing perspectives into unanimous consensus."
    ],
    category: "Diplomatic Insight",
    author: "Academic & Substantive Board",
    authorRole: "Director of Substantive Affairs",
    date: "September 15, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "news-4",
    title: "President University Delegates Sweep Outstanding Awards at Asia-Pacific Invitational",
    excerpt: "PUMUN delegation earns Best Delegate and Outstanding Diplomat honors, showcasing President University's rigorous diplomatic training pipeline.",
    content: [
      "Representing President University, our student delegation clinched top honors including Best Delegate in UNODC and Honorable Mention in the G20 Summit at the prestigious Asia-Pacific Invitational held earlier this month.",
      "The victory highlights PUMUN's internal simulation training regimen, which prepares members through weekly crisis drills, position paper clinics, and public speaking workshops.",
      "'This triumph is testament to the culture of excellence nurtured at President University,' remarked the faculty advisor from the School of International Relations."
    ],
    category: "Delegate Spotlight",
    author: "Public Relations Bureau",
    authorRole: "External Affairs Lead",
    date: "August 20, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
  }
];

export const EVENTS_LIST: MunEvent[] = [
  {
    id: "event-conf-2026",
    title: "PUMUN 2026 Flagship Conference",
    subtitle: "The 11th Annual International Summit",
    date: "November 20 - 22, 2026",
    time: "08:00 - 21:00 WIB (Daily)",
    venue: "President University Convention Center (PUCC), Jababeka",
    category: "Flagship",
    description: "Three immersive days of committee debate, unmoderated caucusing, guest keynote speeches from ambassadors, press conferences, and the prestigious Diplomatic Gala Dinner.",
    status: "Open",
    registrationDeadline: "October 15, 2026"
  },
  {
    id: "event-masterclass",
    title: "Diplomatic Masterclass & RoP Bootcamp",
    subtitle: "Pre-Conference Training Workshop",
    date: "October 24, 2026",
    time: "10:00 - 15:30 WIB",
    venue: "Charles Himawan Auditorium & Zoom Hybrid",
    category: "Workshop",
    description: "An intensive skills clinic led by veteran MUN champions and former diplomats covering resolution drafting, speech mechanics, and strategic bloc building.",
    status: "Upcoming",
    registrationDeadline: "October 20, 2026"
  },
  {
    id: "event-mini-sim",
    title: "High School Pre-MUN Mini Simulation",
    subtitle: "Youth Diplomatic Accelerator",
    date: "September 12, 2026",
    time: "09:00 - 17:00 WIB",
    venue: "President University Campus A, Cikarang",
    category: "Pre-Event",
    description: "A tailored single-day simulation designed specifically to onboard high school students and novice debaters into the collegiate MUN ecosystem.",
    status: "Completed",
    registrationDeadline: "September 5, 2026"
  },
  {
    id: "event-gala",
    title: "Diplomatic Social Night & Awarding Gala",
    subtitle: "Celebrating Global Youth Friendship",
    date: "November 22, 2026",
    time: "18:30 - 22:30 WIB",
    venue: "Grand Ballroom, Jababeka Golf & Country Club",
    category: "Social",
    description: "The official grand finale of PUMUN 2026 featuring cultural performances, gourmet banquet, red carpet photography, and conferring of Best Delegate gavels.",
    status: "Upcoming",
    registrationDeadline: "Inclusive for registered delegates"
  }
];

export const SCHEDULE_DAYS = [
  {
    day: "Day 1",
    date: "Friday, Nov 20, 2026",
    title: "Inauguration & Initial Deliberations",
    sessions: [
      { time: "08:00 - 09:30", name: "Delegate Registration & Welcome Kit Distribution", venue: "PUCC Foyer" },
      { time: "09:30 - 11:30", name: "Grand Opening Ceremony & Ambassador Keynote Address", venue: "Charles Himawan Auditorium" },
      { time: "11:30 - 13:00", name: "Friday Prayer, Networking & Welcome Luncheon", venue: "Convention Dining Hall" },
      { time: "13:00 - 15:30", name: "Committee Session I: Roll Call & Setting the Agenda", venue: "Respective Council Rooms" },
      { time: "15:30 - 16:00", name: "Coffee & Refreshment Break", venue: "Lobby Lounges" },
      { time: "16:00 - 18:30", name: "Committee Session II: General Speakers List & Moderated Caucuses", venue: "Respective Council Rooms" }
    ]
  },
  {
    day: "Day 2",
    date: "Saturday, Nov 21, 2026",
    title: "Intensive Debate & Working Papers",
    sessions: [
      { time: "08:30 - 10:30", name: "Committee Session III: Introduction of Working Papers", venue: "Respective Council Rooms" },
      { time: "10:30 - 11:00", name: "Diplomatic Tea Break & Informal Lobbying", venue: "Lobby Lounges" },
      { time: "11:00 - 13:00", name: "Committee Session IV: Crisis Flash & Unmoderated Coalitions", venue: "Respective Council Rooms" },
      { time: "13:00 - 14:15", name: "Executive Networking Luncheon", venue: "Dining Hall" },
      { time: "14:15 - 17:30", name: "Committee Session V: Merging Draft Resolutions & Amendments", venue: "Respective Council Rooms" },
      { time: "19:00 - 22:00", name: "Diplomatic Mixer & Cultural Showcase Night", venue: "Student Center Amphitheater" }
    ]
  },
  {
    day: "Day 3",
    date: "Sunday, Nov 22, 2026",
    title: "Voting Procedure & Gala Dinner",
    sessions: [
      { time: "09:00 - 11:30", name: "Committee Session VI: Final Resolution Voting & Action Plan Adoption", venue: "Respective Council Rooms" },
      { time: "11:30 - 12:30", name: "Dais Feedback, Delegate Debriefing & Feedback Submission", venue: "Respective Council Rooms" },
      { time: "12:30 - 14:00", name: "Farewell Lunch & Rest Time", venue: "Campus Cafeteria" },
      { time: "17:30 - 18:30", name: "Red Carpet Arrival & Photo Call for Diplomatic Gala", venue: "Grand Ballroom Foyer" },
      { time: "18:30 - 22:00", name: "Grand Closing Ceremony, Awarding of Gavels & Gala Dinner", venue: "Grand Ballroom, Jababeka Club" }
    ]
  }
];

export const SECRETARIAT_BOARD = [
  {
    name: "Ahmad Fadhil Prasetya",
    role: "Secretary-General",
    division: "Executive Board",
    major: "International Relations, 2023",
    bio: "Passionate about Indo-Pacific multilateral security and diplomatic negotiations. Spearheading PUMUN 2026 with a vision of global youth empowerment.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "True diplomacy is not the art of coercion, but the craft of finding common ground where none seemed to exist."
  },
  {
    name: "Valerie Anastasia Widjaja",
    role: "Deputy Secretary-General",
    division: "Executive Board",
    major: "Law, 2023",
    bio: "Champion of international human rights law and debate adjudication. Overseeing conference operations and academic rigor.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "Every resolution written today lays the foundation for real-world policy reform tomorrow."
  },
  {
    name: "Brandon Christopher Liu",
    role: "Under-Secretary-General for Substantive Affairs",
    division: "Substantive & Academics",
    major: "International Relations, 2024",
    bio: "Directing committee topic guides, dais appointments, crisis matrices, and academic integrity across all 6 simulated councils.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "Academic precision and substantive depth transform a simulation into a life-defining learning crucible."
  },
  {
    name: "Siti Rahma Azzahra",
    role: "Under-Secretary-General for Delegate Relations",
    division: "Delegate Relations & Protocol",
    major: "Communications, 2024",
    bio: "Managing international delegate services, country allocations, visa assistance letters, and accommodations in Jababeka.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote: "We treat every delegate not just as a participant, but as an honored ambassador to our university."
  }
];

export const DIVISIONS: Division[] = [
  {
    id: "board-of-executive",
    name: "Board of Executive",
    shortName: "Executive",
    headName: "Executive Secretariat",
    headTitle: "High Presidium Board",
    headAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "Institutional leadership, strategic governance, and organizational stewardship.",
    description: "The governing executive presidium responsible for strategic leadership, cross-divisional alignment, and external relations.",
    responsibilities: [
      "Executive oversight and strategic governance",
      "Inter-divisional coordination and institutional policy formulation",
      "Institutional representation to President University leadership"
    ],
    deliverables: ["PUMUN Annual Governance Charter", "Strategic Executive Directives"],
    membersCount: 6,
    iconName: "Shield"
  },
  {
    id: "ppfb",
    name: "PPFB",
    shortName: "PPFB",
    headName: "Director of PPFB",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote: "Fostering institutional integrity, human capital, and operational discipline.",
    description: "Responsible for human resource development, recruitment, and organizational member oversight.",
    responsibilities: ["Member onboarding and capacity development", "Organizational assessment and welfare"],
    deliverables: ["Member Development Framework", "Recruitment Evaluation Rubrics"],
    membersCount: 8,
    iconName: "Users"
  },
  {
    id: "funding",
    name: "Funding",
    shortName: "Funding",
    headName: "Director of Funding",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    quote: "Securing financial resilience and sustainable funding streams.",
    description: "Orchestrating institutional merchandise, fundraising initiatives, and financial viability.",
    responsibilities: ["Fundraising campaigns and merchandise drives", "Budgetary allocation support"],
    deliverables: ["Financial sustainability reports", "Fundraising portfolios"],
    membersCount: 10,
    iconName: "DollarSign"
  },
  {
    id: "it-divisions",
    name: "IT Divisions",
    shortName: "IT",
    headName: "Director of IT",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "Architecting reliable digital platforms, portals, and diplomatic tech infrastructure.",
    description: "Maintaining official digital portals, registration infrastructure, and institutional technical systems.",
    responsibilities: ["Web architecture and technical infrastructure", "Digital portal engineering and database security"],
    deliverables: ["Official web portal and conference systems", "Delegate portal management"],
    membersCount: 8,
    iconName: "Terminal"
  },
  {
    id: "research-analysis",
    name: "Research Analysis",
    shortName: "Research",
    headName: "Director of Research",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "Uncompromising geopolitical research, academic veracity, and policy depth.",
    description: "Conducting in-depth international relations studies, committee background research, and substantive dossier evaluations.",
    responsibilities: ["Geopolitical research dossiers", "Substantive evaluation rubrics and policy briefs"],
    deliverables: ["Academic study briefs", "International crisis background papers"],
    membersCount: 12,
    iconName: "FileText"
  },
  {
    id: "marketing",
    name: "Marketing",
    shortName: "Marketing",
    headName: "Director of Marketing",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quote: "Amplifying organizational reach and building an iconic collegiate diplomatic brand.",
    description: "Strategizing marketing campaigns, audience acquisition, and brand visibility across digital channels.",
    responsibilities: ["Marketing campaigns and roadshows", "Brand expansion and audience analytics"],
    deliverables: ["Marketing campaign matrix", "Delegation conversion analytics"],
    membersCount: 10,
    iconName: "TrendingUp"
  },
  {
    id: "internal-affairs",
    name: "Internal Affairs",
    shortName: "Internal",
    headName: "Director of Internal Affairs",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote: "Strengthening organizational synergy, inter-divisional cohesion, and member engagement.",
    description: "Managing internal club bonding, member development sessions, and secretarial cohesion.",
    responsibilities: ["Internal club bonding and gatherings", "Inter-divisional communication channels"],
    deliverables: ["Internal calendar of engagements", "Member satisfaction surveys"],
    membersCount: 8,
    iconName: "Heart"
  },
  {
    id: "partnership",
    name: "Partnership",
    shortName: "Partnership",
    headName: "Director of Partnership",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    quote: "Building strategic bilateral relationships with institutions, sponsors, and embassies.",
    description: "Establishing corporate partnerships, diplomatic sponsorships, media partnerships, and institutional alliances.",
    responsibilities: ["Sponsorship negotiations and corporate engagement", "Inter-university MUN club alliances"],
    deliverables: ["Sponsorship agreements & MoUs", "Partner acknowledgment portfolios"],
    membersCount: 10,
    iconName: "Handshake"
  },
  {
    id: "administration-affairs",
    name: "Administration Affairs",
    shortName: "Administration",
    headName: "Director of Administration",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    quote: "Ensuring meticulous record-keeping, institutional archives, and formal correspondence.",
    description: "Managing official documentation, institutional proposals, correspondence with university administration, and archives.",
    responsibilities: ["Official secretarial correspondence and archives", "Meeting minutes and documentation filing"],
    deliverables: ["PUMUN Institutional Archives", "Official Correspondence Lettering"],
    membersCount: 8,
    iconName: "FolderOpen"
  },
  {
    id: "media",
    name: "Media",
    shortName: "Media",
    headName: "Director of Media",
    headTitle: "Division Head",
    headAvatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    quote: "Crafting visual excellence, cinematic documentation, and creative storytelling.",
    description: "Designing official visual assets, managing social media channels, and documenting conferences.",
    responsibilities: ["Social media content production and design", "Photography, videography, and visual branding"],
    deliverables: ["Official Design System & Media Guidelines", "Digital Content Calendar"],
    membersCount: 12,
    iconName: "Camera"
  }
];

export const WORKPLAN_MILESTONES: WorkplanMilestone[] = [
  {
    id: "wp-1",
    quarter: "Q1 2026",
    monthRange: "January - March 2026",
    title: "Secretariat Formulation, Vision & Foundation",
    division: "Executive Secretariat",
    status: "Completed",
    description: "Establishing the organizational core, theme ratification, and constitutional planning for the 11th edition.",
    milestonePoints: [
      "Recruitment and onboarding of 85+ Secretariat committee members",
      "Ratification of the PUMUN 2026 Grand Theme with Faculty Advisors",
      "Formulation of the 6 simulated councils and agenda topic briefs",
      "Digital infrastructure overhaul and official portal deployment"
    ]
  },
  {
    id: "wp-2",
    quarter: "Q2 2026",
    monthRange: "April - June 2026",
    title: "International Outreach, Dais Recruitment & Early Bird",
    division: "Delegate Relations & Substantive",
    status: "Completed",
    description: "Global open call for Chairs and Directors, university roadshows, and launching preferential Early Bird registration.",
    milestonePoints: [
      "Global recruitment of 12 Council Chairs across 6 international universities",
      "High school outreach roadshow across Jabodetabek and West Java",
      "Early Bird registration portal launch with subsidized delegate fees",
      "Diplomatic partnership outreach to ASEAN and European Embassies"
    ]
  },
  {
    id: "wp-3",
    quarter: "Q3 2026",
    monthRange: "July - September 2026",
    title: "Substantive Guides Release & Pre-Conference Bootcamp",
    division: "All Divisions",
    status: "In Progress",
    description: "Releasing academic study guides, hosting training bootcamps, and managing country matrix allocation rounds.",
    milestonePoints: [
      "Publication of official Study Guides for all 6 councils",
      "Conducting the Pre-MUN High School Workshop & Mock Simulation",
      "Rolling Country Matrix allocations and delegate portfolio confirmations",
      "Finalizing venue layout and ballroom contracts with Jababeka venues"
    ]
  },
  {
    id: "wp-4",
    quarter: "Q4 2026",
    monthRange: "October - December 2026",
    title: "The Flagship Summit, Gala & Post-Summit Handover",
    division: "Executive Secretariat",
    status: "Upcoming",
    description: "Executing the 3-day flagship conference, hosting foreign dignitaries, awarding ceremony, and annual handover.",
    milestonePoints: [
      "Hosting 650+ international delegates at President University Convention Center",
      "Execution of the Diplomatic Social Night & Awarding Banquet",
      "Post-conference resolution compilation submitted to UN Information Centre",
      "Annual General Assembly, audited financial audit, and Secretariat transition"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "United Nations Security Council in Session",
    category: "Conference Sessions",
    year: "2025",
    description: "Delegates passionately debating crisis directives during the midnight emergency session of PUMUN.",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80",
    location: "PUCC Executive Council Chamber"
  },
  {
    id: "gal-2",
    title: "Grand Opening Ceremony & Parade of Nations",
    category: "Opening Ceremony",
    year: "2025",
    description: "Dignitaries and delegates gather at the Charles Himawan Auditorium for the keynote address.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    location: "Charles Himawan Auditorium"
  },
  {
    id: "gal-3",
    title: "Diplomatic Gala Night & Cultural Banquet",
    category: "Gala & Socials",
    year: "2025",
    description: "An evening of cross-cultural camaraderie, traditional performances, and delegate mingling.",
    imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80",
    location: "Grand Ballroom, Jababeka Club"
  },
  {
    id: "gal-4",
    title: "Best Delegate Gavel Presentation",
    category: "Awarding Ceremony",
    year: "2025",
    description: "Secretary-General conferring the coveted wooden gavel to the Best Delegate of UNHRC.",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80",
    location: "Plenary Stage"
  },
  {
    id: "gal-5",
    title: "Unmoderated Caucus & Resolution Merging",
    category: "Conference Sessions",
    year: "2025",
    description: "Bloc leaders negotiating cross-regional draft clauses on the floor of the General Assembly.",
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80",
    location: "Committee Room B"
  },
  {
    id: "gal-6",
    title: "Diplomatic Masterclass & Speech Clinic",
    category: "Workshops",
    year: "2025",
    description: "First-time delegates honing their rhetoric and points of order under veteran chair mentorship.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    location: "Faculty Lounge Room 402"
  },
  {
    id: "gal-7",
    title: "International Press Corps Press Briefing",
    category: "Conference Sessions",
    year: "2024",
    description: "IPC journalists pressing council leaders during an unscheduled mid-crisis press briefing.",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    location: "Media Press Center"
  },
  {
    id: "gal-8",
    title: "Secretariat & Organizing Committee Portrait",
    category: "Awarding Ceremony",
    year: "2024",
    description: "The dedicated organizing team celebrating a successful conclusion to PUMUN.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    location: "President University Main Monument"
  }
];

export const COUNTRY_MATRIX: CountryMatrixEntry[] = [
  { country: "United States of America", code: "USA", flag: "🇺🇸", committee: "UNSC", status: "Reserved", continent: "Americas" },
  { country: "United Kingdom", code: "GBR", flag: "🇬🇧", committee: "UNSC", status: "Available", continent: "Europe" },
  { country: "France", code: "FRA", flag: "🇫🇷", committee: "UNSC", status: "Available", continent: "Europe" },
  { country: "People's Republic of China", code: "CHN", flag: "🇨🇳", committee: "UNSC", status: "Reserved", continent: "Asia" },
  { country: "Russian Federation", code: "RUS", flag: "🇷🇺", committee: "UNSC", status: "Assigned", continent: "Europe" },
  { country: "Japan", code: "JPN", flag: "🇯🇵", committee: "UNSC", status: "Available", continent: "Asia" },
  { country: "Republic of Korea", code: "KOR", flag: "🇰🇷", committee: "UNSC", status: "Available", continent: "Asia" },
  { country: "Switzerland", code: "CHE", flag: "🇨🇭", committee: "UNSC", status: "Available", continent: "Europe" },
  { country: "Indonesia", code: "IDN", flag: "🇮🇩", committee: "ARF", status: "Reserved", continent: "Asia" },
  { country: "Singapore", code: "SGP", flag: "🇸🇬", committee: "ARF", status: "Available", continent: "Asia" },
  { country: "Malaysia", code: "MYS", flag: "🇲🇾", committee: "ARF", status: "Available", continent: "Asia" },
  { country: "Vietnam", code: "VNM", flag: "🇻🇳", committee: "ARF", status: "Available", continent: "Asia" },
  { country: "Philippines", code: "PHL", flag: "🇵🇭", committee: "ARF", status: "Assigned", continent: "Asia" },
  { country: "Thailand", code: "THA", flag: "🇹🇭", committee: "ARF", status: "Available", continent: "Asia" },
  { country: "Australia", code: "AUS", flag: "🇦🇺", committee: "ARF", status: "Available", continent: "Oceania" },
  { country: "Tuvalu", code: "TUV", flag: "🇹🇻", committee: "UNHRC", status: "Available", continent: "Oceania" },
  { country: "Kiribati", code: "KIR", flag: "🇰🇮", committee: "UNHRC", status: "Available", continent: "Oceania" },
  { country: "Maldives", code: "MDV", flag: "🇲🇻", committee: "UNHRC", status: "Reserved", continent: "Asia" },
  { country: "Germany", code: "DEU", flag: "🇩🇪", committee: "UNHRC", status: "Available", continent: "Europe" },
  { country: "Brazil", code: "BRA", flag: "🇧🇷", committee: "UNHRC", status: "Available", continent: "Americas" },
  { country: "South Africa", code: "ZAF", flag: "🇿🇦", committee: "UNHRC", status: "Available", continent: "Africa" },
  { country: "Kenya", code: "KEN", flag: "🇰🇪", committee: "UNEP", status: "Available", continent: "Africa" },
  { country: "Canada", code: "CAN", flag: "🇨🇦", committee: "UNEP", status: "Available", continent: "Americas" },
  { country: "Norway", code: "NOR", flag: "🇳🇴", committee: "UNEP", status: "Available", continent: "Europe" },
  { country: "India", code: "IND", flag: "🇮🇳", committee: "UNEP", status: "Reserved", continent: "Asia" }
];

export const ROP_CHEAT_SHEET = [
  {
    name: "Point of Personal Privilege",
    purpose: "Used when a delegate experiences personal discomfort that impairs their ability to participate (e.g. cannot hear speaker, room temperature, audibility).",
    interrupts: "Yes (only if related to audibility)",
    voteRequired: "None (Decided by Chair)"
  },
  {
    name: "Point of Order",
    purpose: "Raised when the chair or a delegate violates the established parliamentary rules of procedure.",
    interrupts: "No (Wait until current speaker concludes)",
    voteRequired: "None (Chairs rule immediately)"
  },
  {
    name: "Point of Parliamentary Inquiry",
    purpose: "Used to ask the Dais a clarification question regarding the rules of procedure or the current agenda state.",
    interrupts: "No",
    voteRequired: "None"
  },
  {
    name: "Motion for a Moderated Caucus",
    purpose: "Temporarily suspends the General Speakers List for focused debate on a sub-issue, specifying total duration, individual speaker time, and topic.",
    interrupts: "No",
    voteRequired: "Simple Majority (> 50%)"
  },
  {
    name: "Motion for an Unmoderated Caucus",
    purpose: "Suspends formal rules to allow delegates to move around freely, lobby, build voting blocs, and draft resolution clauses.",
    interrupts: "No",
    voteRequired: "Simple Majority (> 50%)"
  },
  {
    name: "Motion to Introduce a Draft Resolution",
    purpose: "Formally presents a draft resolution to the committee floor once vetted and approved by the Dais with required signatories.",
    interrupts: "No",
    voteRequired: "Simple Majority"
  }
];
