/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { useNewsCategory } from "@/context";
import MainPost from "@/components/MainPost";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import { NewsItem } from "@/services/Interfaces";
import { useFetchNews } from "@/services/api";

export default function Main() {
  const {
    newsCategory,
    newsData,
    currentPage,
    setCurrentPage,
    loading,
  }: any = useNewsCategory();

  const fetchNews = useFetchNews(newsCategory, currentPage);

  const newsWithImage = newsData?.filter(
    (news: any) => news?.multimedia?.length !== 0
  )[0];

  const loadData = async () => {
    await fetchNews();
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, [newsCategory, currentPage]);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 pb-7 sm:px-6 mb-10">
        {loading ? (
          <Loading color="bg-indigo-500" size="w-3 h-3" />
        ) : (
          <>
            <div
              className="flex flex-col justify-start my-16">
              <h1 className="text-[2.5rem] font-bold mb-10 w-full md:w-7/12" data-aos="fade-right">
                Seu destino ideal para notícias relevantes
              </h1>
              <MainPost newsData={newsWithImage} />
            </div>

            <div className="w-full h-full flex flex-col items-start">
              <h1
                className="text-[1.5rem] font-bold text-start mb-5"
                data-aos="fade-right"
              >
                Últimas novidades
              </h1>
              <div className="w-full h-[0.1rem] mb-7 bg-neutral-700"></div>

              <div className="w-full m-0 md:mr-10 mb-4 flex flex-row flex-wrap justify-between items-stretch">
                {newsData?.map((news: NewsItem) => (
                  <Post key={news?._id} newsData={news} />
                ))}
              </div>

              <div className="container mx-auto mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={5}
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
