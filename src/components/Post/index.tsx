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

  return (
    <>
      {newsData?.slice(0, visibleItems).map((item: any) => (
        <>
          <div className={`${postWidth} ${postHeight} bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4`}>
            
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
              <h1 className="mb-2 text-[1.2rem] font-bold text-gray-900 dark:text-white cursor-pointer">
               {item?.title?.length >= 50 ? `${item.title?.slice(0,50)}...` : item?.title}
              </h1>
              <p className="mb-3 text-[0.9rem] font-light text-gray-700 dark:text-gray-400">
                {item?.description?.length >= 120 ? `${item.description?.slice(0,120)}...` : item?.description}
              </p>

              {/* <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-[0.7rem] text-gray-700 dark:text-gray-400">
                    {formattedDate(item?.publishedAt)}
                  </p>
                  <p className="text-[0.7rem] text-gray-700 dark:text-gray-400">
                    {item?.author}
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
                >
                  Ver mais
                  <AiOutlineArrowRight className="ml-1 w-[0.9rem] h-[0.9rem]" />
                </a>
              </div> */}
            </div>
          </div>
        </>
      ))}
    </>
  );
}
