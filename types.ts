export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string;
  gpa?: string;
}

export interface Project {
  title: string;
  description: string[];
  techStack?: string[];
  githubUrl: string;
}

export interface Research {
  title: string;
  publication?: string;
  description: string[];
  status?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; color: string; icon?: string }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}