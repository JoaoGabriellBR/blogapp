/* eslint-disable @next/next/no-img-element */
import formattedDate from "@/services/formattedDate";

interface NewsItem {
  title: string;
  description: string;
  image_url?: string;
  publishedAt: string;
  author: string;
  pubDate: string;
}

interface PropsNewsItem {
  newsData: NewsItem;
}

export default function MainPost({ newsData }: PropsNewsItem) {
  return (
    <>
      <div className="w-full min-h-[14rem]">
        <div className=" w-full h-full md:h-[15rem] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-6/12 h-full relative overflow-hidden cursor-pointer mb-6 md:mb-0">
            <img
              className="rounded-t-lg object-cover w-full h-full transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={newsData?.image_url}
              alt="Imagem"
            />
          </div>

          <div className="w-full md:w-6/12 h-full ml-0 md:ml-[4rem] flex flex-col justify-between">
            <div>
              <h1 className="mb-2 text-[1.2rem] font-bold hover:text-white cursor-pointer">
                {newsData?.title}
              </h1>
              <p className="mb-3 text-[0.9rem] font-light text-gray-400">
                {newsData?.description.slice(0, 120)}...
              </p>
            </div>

            <div>
              <p className="text-[0.7rem] text-gray-400">
                {formattedDate(newsData?.pubDate)}
              </p>
              <p className="text-[0.7rem]">{newsData?.author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
