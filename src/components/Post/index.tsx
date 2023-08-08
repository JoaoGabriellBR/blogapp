/* eslint-disable @next/next/no-img-element */
import { AiOutlineArrowRight } from "react-icons/ai";
import moment from "moment";
import "moment/locale/pt-br";

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

  const formattedDate = (date: string) => moment(date).format("ll");

  return (
    <>
      {newsData?.slice(0, visibleItems).map((item: any) => (
        <>
          <div className={`mb-10 w-full md:max-w-[20rem] max-h-[30rem] flex flex-col rounded-lg`}>

            {item?.urlToImage ? (
              <div className={`h-48 w-full mb-6`}>
                <img
                  className="rounded-t-lg object-cover w-full h-full"
                  src={item?.urlToImage}
                  alt="Imagem"
                />
              </div>
            ) : null}

            <div>
              <h1 className="mb-2 text-[1.2rem] font-bold">
                {item?.title?.length >= 50 ? `${item.title?.slice(0, 50)}...` : item?.title}
              </h1>
              <p className="mb-3 text-[0.9rem] font-light">
                {item?.description?.length >= 120 ? `${item.description?.slice(0, 120)}...` : item?.description}
              </p>
            </div>

            <div className="flex flex-row justify-between items-center">

              <div>
                <p className="text-[0.7rem]">
                  {formattedDate(item?.publishedAt)}
                </p>
                <p className="text-[0.7rem]">
                  {item?.author}
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:underline underline-offset-8"
              >
                Ver mais
                <AiOutlineArrowRight className="ml-1 w-[0.9rem] h-[0.9rem]" />
              </a>
            </div>

          </div>
        </>
      ))}
    </>
  );
}
