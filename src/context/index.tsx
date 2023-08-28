"use client"

import { createContext, useContext, useState } from 'react';
import { NewsCategory, NewsItem } from '@/services/Interfaces';

const NewsCategoryContext = createContext<NewsCategory | null>(null);

export const NewsCategoryProvider = ({ children }: any) => {

  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [newsCategory, setNewsCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const updateNewsCategory = (category: string) => setNewsCategory(category);
  const updateNewsData = (news: any) => setNewsData(news);

  return (
    <NewsCategoryContext.Provider value={{ newsCategory, updateNewsCategory, newsData, updateNewsData, currentPage, setCurrentPage }}>
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategory = () => useContext(NewsCategoryContext);
