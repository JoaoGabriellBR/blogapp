"use client"

import Post from '@/components/Post'
import fetchNewsData from '@/services/fetchNewsData'
import { useState, useEffect } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Home() {

  const [newsData, setNewsData] = useState([]);

  const [visibleItems, setVisibleItems] = useState(3); // Number of items to display initially

  const handleSeeMore = () => {
    setVisibleItems((prev: any) => prev + 3); // Increase the number of visible items when "Ver mais" is clicked
  };

  const loadData = async () => {
    const response = await fetchNewsData();
    setNewsData(response?.data?.articles);
  }

  useEffect(() => {
    loadData();
  }, [])


  return (
    <>
    <main className='w-screen h-screen flex flex-col justify-start items-start'>

      <h1 className='text-[3rem] self-start font-bold'>News App</h1>

      <div className='flex flex-row flex-wrap justify-center items-center items-stretch'>
        <Post newsData={newsData} visibleItems={visibleItems} />
      </div>

      {newsData?.length > visibleItems && (
        <button
          onClick={handleSeeMore}
          className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white rounded-lg bg-blue-500"
        >
          Ver mais
          <AiOutlineArrowDown className="ml-1 w-[1rem] h-[1rem] font-bold" />
        </button>
      )}
    </main>
    </>
  )
}
