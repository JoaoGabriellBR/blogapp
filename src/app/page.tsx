"use client"

import Post from '@/components/Post';
import fetchNewsData from '@/services/fetchNewsData';
import { useState, useEffect } from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";
import Header from '@/components/Header';
import MainPost from '@/components/MainPost';

export default function Home() {

  const [newsData, setNewsData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  const handleSeeMore = () => setVisibleItems((prev: number) => prev + 3);

  const loadData = async () => {
    const response = await fetchNewsData();
    setNewsData(response?.data?.articles);
  };

  useEffect(() => {
    loadData();
  }, []);

  const uniqueNewsItem = newsData?.map((item) => item)[1]

  return (
    <>

      <Header />
      <div className='flex flex-col justify-start my-16'>
        <h1 className='text-[3rem] font-bold'>News App</h1>
        <div>
          <MainPost newsData={uniqueNewsItem} />
        </div>
      </div>

      <div className='w-full h-full flex flex-col items-start'>
        
        <h1 className='text-[1.5rem] font-bold text-start mb-8'>Últimas novidades</h1>

        <div className='flex flex-row flex-wrap justify-between items-stretch'>
          <Post
            newsData={newsData}
            visibleItems={visibleItems}
          />
        </div>

        {newsData?.length > visibleItems && (
          <button
            onClick={handleSeeMore}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Ver mais
            <AiOutlineArrowDown className="ml-1 w-[1rem] h-[1rem] font-bold" />
          </button>
        )}

      </div>
    </>
  )
}
