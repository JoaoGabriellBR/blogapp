"use client";

import Header from "@/components/Header";
import MainPost from "@/components/MainPost";
import Post from "@/components/Post";
import fetchNewsData from "@/services/fetchNewsData";
import { useState, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { NewsItem, PropsNewsItem } from "@/services/Interfaces";
import { motion } from "framer-motion";
import Pagination from "@/components/Pagination";
// import axios from "axios";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { LazyLoadComponent } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Home() {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Replace with the total number of pages

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // You can implement your logic here to fetch data for the new page
  };


  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchNewsData();
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

  useEffect(() => {
    console.log(newsData)
  }, [newsData])

  return (
    <>
      <Header />
      {loading ? (
        <h1>Carregando...</h1>
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
            <h1 className="text-[1.5rem] font-bold text-start mb-5">
              Últimas novidades
            </h1>
            <div className="w-full h-[0.1rem] mb-7 bg-neutral-700"></div>

            <div className="w-full m-0 md:mr-10 mb-4 flex flex-row flex-wrap justify-between items-stretch">
              {newsData
                ?.slice(0, 10)
                ?.filter((item) => item?.multimedia?.length !== 0)
                ?.map((news: NewsItem) => (
                  <>
                    <Post
                      key={news?._id}
                      news={news}
                    />
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
    </>
  );
}
