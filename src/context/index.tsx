"use client"

import { PropsWithChildren, createContext, useContext, useState } from 'react';

const NewsCategoryContext = createContext(null);

export const NewsCategoryProvider = ({ children }: any) => {
  const [newsCategory, setNewsCategory] = useState<string>('Food');

  const updateNewsCategory = (category: string) => {
    setNewsCategory(category);
  };

  return (
    <NewsCategoryContext.Provider value={{ newsCategory, updateNewsCategory }}>
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategory = () => {
  return useContext(NewsCategoryContext);
};
