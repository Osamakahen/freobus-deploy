import { App, Category } from '../types';

// Format URL to ensure it starts with https://
export const formatUrl = (url: string): string => {
  if (!url.startsWith('http')) {
    return `https://${url}`;
  }
  return url;
};

// Filter apps by category
export const filterAppsByCategory = (apps: App[], category: string): App[] => {
  if (category === 'all') return apps;
  return apps.filter(app => app.category === category);
};

// Search apps by name or description
export const searchApps = (apps: App[], query: string): App[] => {
  const searchTerm = query.toLowerCase();
  return apps.filter(app => 
    app.name.toLowerCase().includes(searchTerm) ||
    app.description.toLowerCase().includes(searchTerm)
  );
};

// Sort categories by name
export const sortCategories = (categories: Category[]): Category[] => {
  return [...categories].sort((a, b) => a.name.localeCompare(b.name));
}; 