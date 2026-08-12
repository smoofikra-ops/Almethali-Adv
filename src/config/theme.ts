import { ThemeMode } from '../types';

export const themeRegistry: Record<ThemeMode, Record<string, string>> = {
  light: {
    '--background': '#FFFFFF',
    '--background-alt': '#F8FAFC',
    '--surface': '#FFFFFF',
    '--surface-elevated': '#F1F5F9',
    
    '--text-primary': '#141438',
    '--text-secondary': 'rgba(20, 20, 56, 0.7)',
    '--text-inverse': '#FFFFFF',
    
    '--border': 'rgba(20, 20, 56, 0.1)',
    '--border-strong': 'rgba(20, 20, 56, 0.2)',
    
    '--primary': '#141438',
    '--primary-hover': '#00506B',
    '--primary-foreground': '#FFFFFF',
    
    '--accent': '#0288A6',
    '--accent-soft': '#66C2B3',
    '--accent-deep': '#00506B',
    '--accent-foreground': '#FFFFFF',
    
    '--success': '#22c55e',
    '--warning': '#eab308',
    '--error': '#ef4444',
    
    '--shadow': 'rgba(20, 20, 56, 0.1)',
    '--overlay': 'rgba(20, 20, 56, 0.8)',
  },
  dark: {
    '--background': '#141438',
    '--background-alt': 'rgba(20, 20, 56, 0.95)',
    '--surface': '#00506B',
    '--surface-elevated': 'rgba(0, 80, 107, 0.4)',
    
    '--text-primary': '#FFFFFF',
    '--text-secondary': 'rgba(255, 255, 255, 0.75)',
    '--text-inverse': '#141438',
    
    '--border': 'rgba(255, 255, 255, 0.15)',
    '--border-strong': 'rgba(255, 255, 255, 0.3)',
    
    '--primary': '#141438',
    '--primary-hover': '#00506B',
    '--primary-foreground': '#FFFFFF',
    
    '--accent': '#0288A6',
    '--accent-soft': '#66C2B3',
    '--accent-deep': '#00506B',
    '--accent-foreground': '#FFFFFF',
    
    '--success': '#22c55e',
    '--warning': '#eab308',
    '--error': '#ef4444',
    
    '--shadow': 'rgba(0, 0, 0, 0.3)',
    '--overlay': 'rgba(20, 20, 56, 0.85)',
  },
  corporate: {
    '--background': '#141438',
    '--background-alt': '#00506B',
    '--surface': '#00506B',
    '--surface-elevated': 'rgba(255, 255, 255, 0.05)',
    
    '--text-primary': '#FFFFFF',
    '--text-secondary': 'rgba(255, 255, 255, 0.8)',
    '--text-inverse': '#141438',
    
    '--border': 'rgba(255, 255, 255, 0.1)',
    '--border-strong': 'rgba(255, 255, 255, 0.2)',
    
    '--primary': '#0288A6',
    '--primary-hover': '#66C2B3',
    '--primary-foreground': '#FFFFFF',
    
    '--accent': '#66C2B3',
    '--accent-soft': '#FFFFFF',
    '--accent-deep': '#0288A6',
    '--accent-foreground': '#141438',
    
    '--success': '#10b981',
    '--warning': '#f59e0b',
    '--error': '#ef4444',
    
    '--shadow': 'rgba(0, 0, 0, 0.25)',
    '--overlay': 'rgba(20, 20, 56, 0.8)',
  }
};
