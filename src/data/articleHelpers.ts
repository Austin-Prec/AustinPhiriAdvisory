import { Shield, Search, FileCheck, TrendingUp } from 'lucide-react';
import articlesData from './articles.json';

// Export articles data
export const articles = articlesData;

// Get icon component by name
export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return Shield;
    case 'Search': return Search;
    case 'FileCheck': return FileCheck;
    case 'TrendingUp': return TrendingUp;
    default: return Shield;
  }
};

// Get article by ID
export const getArticleById = (id: number) => {
  return articles.find(article => article.id === id);
};

// Sort articles by date (newest first)
export const getSortedArticles = () => {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};
