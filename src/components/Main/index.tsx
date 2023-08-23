"use client";

import MainPost from "@/components/MainPost";
import Post from "@/components/Post";
import fetchNewsData from "@/services/fetchNewsData";
import { useState, useEffect } from "react";
import { NewsItem } from "@/services/Interfaces";
import { motion } from "framer-motion";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import axios from "axios";
// import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [newsCategory, setNewsCategory] = useState<string>('Food');
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5; // Replace with the total number of pages

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const apiKey = "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG";
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&api-key=${apiKey}&page=${pageNumber}`);
    setNewsData(res?.data?.response?.docs?.reverse());
    console.log(res);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchNewsData(newsCategory);
      setNewsData(res?.data?.response?.docs?.reverse());
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 pb-7 sm:px-6 mb-10">
        {loading ? (
          <Loading color="bg-indigo-500" size="w-3 h-3"/>
        ) : (
          <>
            <motion.div
              className="flex flex-col justify-start my-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              <h1 className="text-[2.5rem] font-bold mb-10 w-full md:w-7/12">
                Seu destino ideal para notícias relevantes
              </h1>
              <MainPost
                news={newsData?.filter((i) => i?.multimedia?.length !== 0)[0]}
              />
            </motion.div>

            <div className="w-full h-full flex flex-col items-start">
              <motion.h1 
              className="text-[1.5rem] font-bold text-start mb-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              >
                Últimas novidades
              </motion.h1>
              <div className="w-full h-[0.1rem] mb-7 bg-neutral-700"></div>

              <div className="w-full m-0 md:mr-10 mb-4 flex flex-row flex-wrap justify-between items-stretch">
                {newsData
                  ?.slice(0, 10)
                  ?.filter((item) => item?.multimedia?.length !== 0)
                  ?.map((news: NewsItem) => (
                    <>
                      <Post key={news?._id} news={news} />
                    </>
                  ))}
              </div>

              <div className="container mx-auto mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
