"use client"

import { createContext, useContext, useState } from 'react';
import { NewsCategory } from '@/services/Interfaces';

const NewsCategoryContext = createContext<NewsCategory | null>(null);

export const NewsCategoryProvider = ({ children }: any) => {

  const [newsCategory, setNewsCategory] = useState<string>('Technology');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const updateNewsCategory = (category: string) => setNewsCategory(category);

  return (
    <NewsCategoryContext.Provider value={{ newsCategory, updateNewsCategory, currentPage, setCurrentPage }}>
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategory = () => useContext(NewsCategoryContext);
