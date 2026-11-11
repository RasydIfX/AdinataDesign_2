'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Project,
  NewsItem,
  JobVacancy,
  INITIAL_PROJECTS,
  INITIAL_NEWS,
  INITIAL_VACANCIES,
} from '@/data/mockData';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  division: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Baru' | 'Diproses' | 'Selesai';
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experienceYears: string;
  linkedinUrl?: string;
  resumeFileName: string;
  coverLetter?: string;
  appliedAt: string;
  status: 'Ditinjau' | 'Wawancara' | 'Diterima' | 'Ditolak';
}

interface DataContextType {
  projects: Project[];
  news: NewsItem[];
  vacancies: JobVacancy[];
  messages: ContactMessage[];
  applications: JobApplication[];
  addProject: (p: Omit<Project, 'id' | 'slug'>) => void;
  updateProject: (id: string, p: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addNews: (n: Omit<NewsItem, 'id' | 'slug'>) => void;
  updateNews: (id: string, n: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  addVacancy: (v: Omit<JobVacancy, 'id'>) => void;
  deleteVacancy: (id: string) => void;
  submitMessage: (m: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  submitApplication: (a: Omit<JobApplication, 'id' | 'appliedAt' | 'status'>) => void;
  updateMessageStatus: (id: string, status: ContactMessage['status']) => void;
  updateApplicationStatus: (id: string, status: JobApplication['status']) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);
  const [vacancies, setVacancies] = useState<JobVacancy[]>(INITIAL_VACANCIES);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);

  useEffect(() => {
    try {
      const savedProj = localStorage.getItem('adinata_projects');
      if (savedProj) setProjects(JSON.parse(savedProj));

      const savedNews = localStorage.getItem('adinata_news');
      if (savedNews) setNews(JSON.parse(savedNews));

      const savedVac = localStorage.getItem('adinata_vacancies');
      if (savedVac) setVacancies(JSON.parse(savedVac));

      const savedMsg = localStorage.getItem('adinata_messages');
      if (savedMsg) setMessages(JSON.parse(savedMsg));

      const savedApp = localStorage.getItem('adinata_applications');
      if (savedApp) setApplications(JSON.parse(savedApp));
    } catch {
      // Fallback silently if localStorage is not accessible
    }
  }, []);

  const saveProjects = (items: Project[]) => {
    setProjects(items);
    try { localStorage.setItem('adinata_projects', JSON.stringify(items)); } catch {}
  };

  const saveNews = (items: NewsItem[]) => {
    setNews(items);
    try { localStorage.setItem('adinata_news', JSON.stringify(items)); } catch {}
  };

  const saveVacancies = (items: JobVacancy[]) => {
    setVacancies(items);
    try { localStorage.setItem('adinata_vacancies', JSON.stringify(items)); } catch {}
  };

  const saveMessages = (items: ContactMessage[]) => {
    setMessages(items);
    try { localStorage.setItem('adinata_messages', JSON.stringify(items)); } catch {}
  };

  const saveApplications = (items: JobApplication[]) => {
    setApplications(items);
    try { localStorage.setItem('adinata_applications', JSON.stringify(items)); } catch {}
  };

  const addProject = (data: Omit<Project, 'id' | 'slug'>) => {
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newProj: Project = {
      ...data,
      id: `prj-${Date.now()}`,
      slug: slug || `proj-${Date.now()}`,
    };
    saveProjects([newProj, ...projects]);
  };

  const updateProject = (id: string, patch: Partial<Project>) => {
    saveProjects(projects.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  };

  const deleteProject = (id: string) => {
    saveProjects(projects.filter((p) => p.id !== id));
  };

  const addNews = (data: Omit<NewsItem, 'id' | 'slug'>) => {
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const item: NewsItem = {
      ...data,
      id: `news-${Date.now()}`,
      slug: slug || `news-${Date.now()}`,
    };
    saveNews([item, ...news]);
  };

  const updateNews = (id: string, patch: Partial<NewsItem>) => {
    saveNews(news.map((n) => (n.id === id ? { ...n, ...patch } : n)));
  };

  const deleteNews = (id: string) => {
    saveNews(news.filter((n) => n.id !== id));
  };

  const addVacancy = (data: Omit<JobVacancy, 'id'>) => {
    const item: JobVacancy = {
      ...data,
      id: `job-${Date.now()}`,
    };
    saveVacancies([item, ...vacancies]);
  };

  const deleteVacancy = (id: string) => {
    saveVacancies(vacancies.filter((v) => v.id !== id));
  };

  const submitMessage = (m: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const msg: ContactMessage = {
      ...m,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'Baru',
    };
    saveMessages([msg, ...messages]);
  };

  const submitApplication = (a: Omit<JobApplication, 'id' | 'appliedAt' | 'status'>) => {
    const app: JobApplication = {
      ...a,
      id: `app-${Date.now()}`,
      appliedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'Ditinjau',
    };
    saveApplications([app, ...applications]);
  };

  const updateMessageStatus = (id: string, status: ContactMessage['status']) => {
    saveMessages(messages.map((m) => (m.id === id ? { ...m, status } : m)));
  };

  const updateApplicationStatus = (id: string, status: JobApplication['status']) => {
    saveApplications(applications.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        news,
        vacancies,
        messages,
        applications,
        addProject,
        updateProject,
        deleteProject,
        addNews,
        updateNews,
        deleteNews,
        addVacancy,
        deleteVacancy,
        submitMessage,
        submitApplication,
        updateMessageStatus,
        updateApplicationStatus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
}
