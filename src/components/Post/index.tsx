/* eslint-disable @next/next/no-img-element */
import { AiOutlineArrowRight } from "react-icons/ai";
import moment from "moment";
import "moment/locale/pt-br";

export default function Post({ newsData }: any) {

  const formattedDate = (date: string) => moment(date).format('ll');

  // ADICIONAR PROPS DE TAMANHO, COR E FUNDO DO POST PARA COLOCAR
  // POST EM DESTAQUE E ETC...

  return (
    <>
      {newsData?.map((item: any) => (
        <>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
            {item?.urlToImage ? (
              <div className="w-full h-48 my-5">
                <img
                  className="rounded-t-lg object-cover w-full h-full"
                  src={item?.urlToImage}
                  alt="Imagem"
                />
              </div>
            ) : null}

            <div>
              <h1 className="mb-2 text-[1.2rem] font-bold text-gray-900 dark:text-white">
                {item?.title}
              </h1>
              <p className="mb-3 text-[0.9rem] font-light text-gray-700 dark:text-gray-400">
                {item?.description}
              </p>

              <div className="flex flex-row justify-between items-center">
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
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
