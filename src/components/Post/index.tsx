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
  widthPost: string;
  heightPost: string;
  heightImagePost: string;
}

export default function Post({ newsData, visibleItems, widthPost, heightPost, heightImagePost }: PropsNewsItem) {

  const formattedDate = (date: string) => moment(date).format("ll");

  // ADICIONAR PROPS DE TAMANHO, COR E FUNDO DO POST PARA COLOCAR
  // POST EM DESTAQUE E ETC...

  const postWidth = widthPost ? widthPost : "max-w-[20rem]";
  const postHeight = heightPost ? heightPost : "max-h-[30rem]";
  const postImageHeight = heightImagePost ? heightImagePost : "h-48";

  const backgroundPost = "bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700";

  return (
    <>
      {newsData?.slice(0, visibleItems).map((item: any) => (
        <>
          <div className={`${postWidth} ${postHeight} rounded-lg p-4`}>
            
            {item?.urlToImage ? (
              <div className={`${postImageHeight} w-full my-5`}>
                <img
                  className="rounded-t-lg object-cover w-full h-full"
                  src={item?.urlToImage}
                  alt="Imagem"
                />
              </div>
            ) : null}

            <div>
              <h1 className="mb-2 text-[1.2rem] font-bold cursor-pointer">
               {item?.title?.length >= 50 ? `${item.title?.slice(0,50)}...` : item?.title}
              </h1>
              <p className="mb-3 text-[0.9rem] font-light">
                {item?.description?.length >= 120 ? `${item.description?.slice(0,120)}...` : item?.description}
              </p>
            </div>
            
          </div>
        </>
      ))}
    </>
  );
}
