"use client"

import Header from '@/components/Header';
import MainPost from '@/components/MainPost';
import Post from '@/components/Post';
import PostWithoutImage from '@/components/PostWithoutImage';
import fetchNewsData from '@/services/fetchNewsData';
import { useState, useEffect } from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";
import axios from 'axios';

export default function Home() {

  const [newsData, setNewsData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleSeeMore = () => setVisibleItems((prev: number) => prev + 3);

  // const loadData = async () => {
  //   const response = await fetchNewsData();
  //   setNewsData(response?.data?.articles);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const uniqueNewsItem = newsData?.map((item) => item)[5];

  const loadNewData = async () => {
    const res = await axios.get("https://newsdata.io/api/1/news?apikey=pub_27205391203403f782608113506283d3c1d44&country=us&language=pt");
    setNewsData(res?.data?.results);
  }

  useEffect(() => {
    loadNewData();
  }, []);

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

        <div className="w-full flex flex-col md:flex-row justify-between items-center">

          <div className='w-full md:w-[70%] m-0 md:mr-10 flex flex-row flex-wrap justify-between items-stretch'>
            <Post newsData={newsData} visibleItems={visibleItems} />
          </div>

          <div className='w-full md:w-[30%] flex flex-row flex-wrap justify-between items-stretch'>
            <PostWithoutImage newsData={newsData} />
          </div>

        </div>

        <div className='w-full flex flex-row justify-center items-center'>
          {newsData?.length > visibleItems && (
            <button
              onClick={handleSeeMore}
              className="min-w-[9rem] flex flex-row justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Ver mais
              <AiOutlineArrowDown className="ml-1 w-[1rem] h-[1rem] font-bold" />
            </button>
          )}
        </div>

      </div>
    </>
  )
}
