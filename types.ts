export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string[];
  techStack: string[];
  repoLink?: string;
  liveLink?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}