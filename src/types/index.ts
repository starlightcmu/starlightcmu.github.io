export interface LabMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  links?: {
    google_scholar?: string;
    github?: string;
    twitter?: string;
    website?: string;
    email?: string;
    linkedin?: string;
  };
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pdf?: string;
  code?: string;
  demo?: string;
  abstract: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  content: string;
}