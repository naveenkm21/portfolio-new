import { Experience, Project, SkillCategory, Certification } from './types';
import { 
  Code2, 
  Smartphone, 
  BrainCircuit, 
  Database, 
  Layout, 
  GitBranch,
  Terminal
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp1',
    role: 'Frontend Development Intern',
    company: 'Unified Mentor Pvt. Ltd.',
    period: 'Jun 2025 – Sep 2025',
    description: [
      'Architecting responsive, high-performance user interfaces using React.js and Next.js ecosystems.',
      'Optimizing web vitals through strategic code splitting and advanced state management patterns.',
      'Driving agile development processes within a collaborative version-controlled environment.'
    ],
    technologies: ['React', 'Next.js', 'Tailwind']
  },
  {
    id: 'exp2',
    role: 'Machine Learning Intern',
    company: 'Reliance Industries Ltd.',
    period: 'Dec 2024 – Jan 2025',
    description: [
      'Engineered high-accuracy ML models for gasifier refractory lifespan prediction.',
      'Developed real-time operational insight dashboards using Power BI for data visualization.',
      'Analyzed complex historical datasets to revolutionize maintenance scheduling workflows.'
    ],
    technologies: ['Python', 'ML', 'Power BI']
  },
  {
    id: 'exp3',
    role: 'Android Development Intern',
    company: 'AICTE - Eduskills',
    period: 'Oct 2024 – Dec 2024',
    description: [
      'Built native Android applications leveraging Kotlin and modern Jetpack Compose UI toolkit.',
      'Implemented robust MVVM architecture with StateFlow for reactive data persistence.',
      'Integrated RESTful APIs ensuring seamless cloud connectivity and comprehensive testing.'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM']
  },
  {
    id: 'exp4',
    role: 'Technical Team Member',
    company: 'SRM University ACM-W Student Chapter',
    period: '2024 – Present',
    description: [
      'Orchestrating technical workshops focusing on modern web and mobile development stacks.',
      'Mentoring 50+ peers on programming fundamentals and industry best practices.',
      'Coordinating hackathons and managing complex event logistics for student innovation.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'EstateHub India',
    category: 'Web Development',
    description: [
      'A comprehensive real estate platform featuring advanced search and filtering capabilities.',
      'Responsive design architecture supporting seamless experiences across all device form factors.',
      'Performance optimization via efficient React component composition.'
    ],
    techStack: ['React', 'JavaScript', 'CSS', 'REST API'],
    repoLink: '#',
    liveLink: '#'
  },
  {
    id: 'proj2',
    title: 'FitTrack AI',
    category: 'AI & Computer Vision',
    description: [
      'AI-powered fitness tracker utilizing real-time exercise detection via computer vision.',
      'Implemented pose detection algorithms to provide instant form analysis and feedback.',
      'Personalized workout recommendation engine with granular progress tracking.'
    ],
    techStack: ['TensorFlow.js', 'Computer Vision', 'Web Tech'],
    repoLink: '#',
    liveLink: '#'
  },
  {
    id: 'proj3',
    title: 'UnscrambleApp',
    category: 'Mobile Game',
    description: [
      'Engaging word puzzle game architected with MVVM patterns for stability.',
      'Features include an intelligent hint system, score tracking, and progressive difficulty scaling.',
      'Fully accessible design compliant with modern UI standards for various screen sizes.'
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Android'],
    repoLink: '#'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'C++', 'TypeScript']
  },
  {
    name: 'Web Technologies',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs']
  },
  {
    name: 'Mobile & AI',
    skills: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'TensorFlow.js']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'Power BI', 'Tableau', 'Figma']
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'OCI 2025 Certified AI Foundations Associate', issuer: 'Oracle', year: '2025' },
  { name: 'OCI 2025 Foundations Associate', issuer: 'Oracle', year: '2025' },
  { name: 'OCI 2025 Generative AI Professional', issuer: 'Oracle', year: '2025' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/naveenkm21',
  linkedin: 'https://www.linkedin.com/in/naveenkumarmohanarajan',
  portfolio: 'https://naveenkm-01.vercel.app',
  email: 'mailto:contact@naveen.dev' // Placeholder
};

export const SKILL_ICONS: Record<string, any> = {
  'Languages': Terminal,
  'Web Technologies': Layout,
  'Mobile & AI': BrainCircuit,
  'Tools & Platforms': Database
};