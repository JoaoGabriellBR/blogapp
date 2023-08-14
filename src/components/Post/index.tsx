/* eslint-disable @next/next/no-img-element */
import formattedDate from "@/services/formattedDate";
import Link from "next/link";

interface NewsItem {
  title: string;
  urlToImage?: string;
  publishedAt: string;
  author: string;
}

interface PropsNewsItem {
  newsData: NewsItem[];
  visibleItems: number;
}

export default function Post({ newsData, visibleItems }: PropsNewsItem) {

  return (
    <>
      {newsData
        ?.filter((news: any) => news?.image_url !== null)
        ?.slice(0, visibleItems)
        ?.map((item: any) => (
          <>
            <div
              className={`mb-10 w-full md:max-w-[20rem] max-h-[30rem] flex flex-col rounded-lg`}
            >
              {item?.image_url ? (
                <div
                  className={`h-48 w-full mb-6 relative overflow-hidden cursor-pointer`}
                >
                  <img
                    className="rounded-t-lg object-cover w-full h-full transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
                    src={item?.image_url}
                    alt="Imagem"
                  />
                </div>
              ) : null}

              <div>
                <span className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 ease-in duration-200 text-white text-[0.7rem] font-semibold mr-2 px-2.5 py-1 rounded-full dark:bg-indigo-500 dark:text-white">{item?.category?.map((item: string) => item)}</span>
                <Link href={item?.link}>
                  <h1 className="my-2 text-[1.2rem] font-bold hover:text-white cursor-pointer">
                    {item?.title?.length >= 50
                      ? `${item.title?.slice(0, 50)}...`
                      : item?.title}
                  </h1>
                </Link>
                <p className="mb-3 text-[0.9rem] font-light text-gray-400">
                  {item?.description?.length >= 120
                    ? `${item.description?.slice(0, 120)}...`
                    : item?.description}
                </p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <p className="text-[0.7rem] text-gray-400">
                  {formattedDate(item?.pubDate)}
                </p>
                <p className="text-[0.7rem] text-gray-400">{item?.author}</p>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
