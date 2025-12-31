import { LucideIcon } from 'lucide-react';

export interface SectionData {
  title: string;
  description: string;
}

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PracticeArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
}