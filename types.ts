import { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface City {
  name: string;
}

export interface ContactMethod {
  label: string;
  action: string;
  icon: LucideIcon;
  primary?: boolean;
}