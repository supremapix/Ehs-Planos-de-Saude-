import { ReactNode } from 'react';

export interface PlanType {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  planType: string;
  message: string;
  agreeTerms: boolean;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  duration: number;
}