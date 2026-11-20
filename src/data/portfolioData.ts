import type { ProjectShowcaseConfig } from '../components/PhoneTriptych';

export type ProjectStatus = 'Completed' | 'In Progress';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  /** Optional 3-phone showcase images [left, center, right] for the upper card area */
  showcase?: ProjectShowcaseConfig;
  /** Real GitHub repository URL, or null when repository is not yet published */
  githubUrl: string | null;
  /** Optional live deployment URL */
  liveDemoUrl: string | null;
  year: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  iconName: 'code' | 'smartphone' | 'database' | 'wrench';
  items: string[];
}

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export const PORTFOLIO_CONFIG = {
  brandMark: 'AEINT',
  fullName: 'Aeint Chit Thu',
  initials: 'ACT',
  roleLine: 'Computer Science Student · Software Developer',
  heroSummary:
    'I enjoy turning ideas into functional applications through thoughtful design and development.',
  profileImagePath: '/images/profile.png',
  email: 'painskull8210@gmail.com',
  githubUrl: 'https://github.com/oreo-aeint',
  githubHandle: '@oreo-aeint',
  telegramUrl: 'https://t.me/aeint_ct',
  telegramHandle: '@aeint_ct',
  /**
   * Configurable LinkedIn URL placeholder.
   * Replace null with your actual profile URL (e.g., 'https://www.linkedin.com/in/your-handle') when ready.
   */
  linkedinUrl: null as string | null,
  linkedinPlaceholderLabel: 'LinkedIn Profile (Link Pending)',
  footerText: '© 2026 Aeint Chit Thu. Built with passion and code.',
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PROFILE_BACK_FACTS = {
  heading: 'A little about me.',
  bio: "I'm a Computer Science student at Myanmar Institute of Information Technology, passionate about software development, thoughtful UI, and AI engineering.",
  quickFacts: [
    { label: 'Education', value: 'BE (Hons) Computer Science' },
    { label: 'University', value: 'Myanmar Institute of Information Technology' },
    { label: 'Graduation', value: '2027' },
    { label: 'Focus', value: 'App Development, System Design & AI Engineering' },
    { label: 'Technologies', value: 'Flutter, Dart, Firebase, Supabase, React and TypeScript' },
  ],
};

export const ABOUT_PARAGRAPHS = [
  "I'm a Computer Science student at Myanmar Institute of Information Technology (MIIT), currently pursuing my BE (Hons) degree. When building software, I care deeply about thoughtful UI design and user experience, while thinking logically through database planning and overall system architecture.",
  "I enjoy working and communicating with teams, and I stay up to date through self-study—exploring backend and API structures, modern AI-assisted development workflows, and clean interface craft. Beyond general app development, I'm actively learning AI engineering, studying how foundation models and LLMs work and how prompt engineering shapes reliable AI-powered applications.",
  "Looking ahead, I aim to become a Software Engineer or AI Engineer building impactful, real-world apps and systems. I'm excited to work on collaborative engineering teams and connect with fellow builders who share the same curiosity to turn ideas into meaningful products.",
];

export const ABOUT_HIGHLIGHTS = [
  {
    label: 'How I Work',
    value:
      'Careful attention to UI and UX, logical database and system design, clear team communication, and effective use of AI agent workflows.',
  },
  {
    label: 'Exploring Now',
    value:
      'AI engineering fundamentals, LLMs, foundation models, prompt engineering, and backend API structures.',
  },
  {
    label: 'Looking Ahead',
    value:
      'Becoming a Software or AI Engineer building impactful systems and collaborating with like-minded teams.',
  },
];

export const EDUCATION_INFO = {
  institution: 'Myanmar Institute of Information Technology (MIIT)',
  degree: 'BE (Hons) in Computer Science',
  expectedGraduation: '2027',
  period: '2022 – 2027 (Expected)',
  focusNote: 'Software Engineering, Mobile Application Development, and Database Systems',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    iconName: 'code',
    items: ['Dart', 'Java', 'JavaScript', 'Python'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    iconName: 'smartphone',
    items: ['Flutter'],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    iconName: 'database',
    items: ['Firebase', 'Supabase', 'REST API'],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    iconName: 'wrench',
    items: ['Git', 'GitHub', 'Android Studio', 'VS Code'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'miit-smart-enrollment',
    name: 'MIIT Smart Enrollment System',
    category: 'Mobile & Academic Platform',
    status: 'Completed',
    shortDescription:
      'A student enrollment management application developed to simplify the university registration process.',
    fullDescription:
      'Built to streamline university registration workflows at MIIT, bringing student onboarding, fee verification, payment voucher generation, and administrative approval into a single mobile experience with real-time status updates and bilingual support.',
    features: [
      'Student registration workflow with structured academic validation',
      'Online payment integration for tuition and registration fees',
      'Automated PDF payment vouchers for student records',
      'Admin notifications for new submissions and pending reviews',
      'Role-based access control separating students and administrators',
      'Real-time registration status tracking from submission to approval',
      'Bilingual interface for accessible campus-wide adoption',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase'],
    showcase: {
      screens: [
        '/images/projects/miit-payment.png',
        '/images/projects/miit-enrollment.png',
        '/images/projects/miit-dashboard-mobile.png',
      ],
      addDeviceFrame: true,
    },
    githubUrl: 'https://github.com/oreo-aeint/miit_smart_enrollment_system',
    liveDemoUrl: null,
    year: '2025',
  },
  {
    id: 't-personal-finance',
    name: 'T-Personal Finance',
    category: 'Personal Finance Web App',
    status: 'In Progress',
    shortDescription:
      'A personal budgeting and financial tracking application designed to help international students manage their income, expenses, and financial activities.',
    fullDescription:
      'Designed specifically around the financial realities of international students—tracking part-time income, monthly living budgets, recurring bills, and categorized daily expenses using a local SQLite persistence layer for fast, reliable record keeping.',
    features: [
      'Income and expense ledger tailored for international student budgets',
      'Monthly category budget limits with usage tracking and copy-last-month setup',
      'Part-time salary tracker comparing estimated gross vs. net pay and deductions',
      'Dedicated savings goals for emergency funds and tuition reserves',
      'Bilingual English and Japanese labels across transactions and summaries',
      'Structured local SQLite database storage for offline-first reliability',
    ],
    technologies: ['React', 'TypeScript', 'SQLite'],
    showcase: {
      screens: [
        '/images/projects/t-finance-transaction.png',
        '/images/projects/t-finance-home.png',
        '/images/projects/t-finance-activity.png',
      ],
      addDeviceFrame: true,
    },
    githubUrl: 'https://github.com/oreo-aeint/T-Personal-Finance',
    liveDemoUrl: null,
    year: '2026',
  },
];
