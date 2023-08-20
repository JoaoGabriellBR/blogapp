/* eslint-disable @next/next/no-img-element */
import formattedDate from "@/services/formattedDate";
import { PropsNewsItem } from "@/services/Interfaces";
import Link from "next/link";

export default function MainPost({ news }: PropsNewsItem) {

  const { headline, snippet, multimedia, pub_date, web_url, byline, section_name } = news || {};

  const title = headline?.main;
  const description = snippet;
  const image = multimedia?.[0]?.url;
  const pubDate = pub_date;
  const author = byline?.person?.[0];

  return (
    <>
      <div className="w-full min-h-[14rem]">
        <div className=" w-full h-full md:h-[15rem] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-6/12 h-full relative overflow-hidden cursor-pointer mb-6 md:mb-0">
            <img
              className="rounded-t-lg object-cover w-full h-full transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={`https://www.nytimes.com/${image}`}
              alt="Imagem"
            />
          </div>

          <div className="w-full md:w-6/12 h-full ml-0 md:ml-[4rem] flex flex-col justify-between">
            <div>
              <span className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 ease-in duration-200 text-white text-[0.7rem] font-semibold mr-2 px-2.5 py-1 rounded-full dark:bg-indigo-500 dark:text-white">{section_name}</span>
              <Link href={String(web_url)}>
                <h1 className="my-2 text-[1.5rem] font-bold hover:text-white cursor-pointer">
                  {title}
                </h1>
              </Link>
              <p className="mb-3 text-[0.9rem] font-light text-gray-400">
                {description?.slice(0, 180)}...
              </p>
            </div>

            <div>
              <p className="text-[0.7rem] text-gray-400">
                {formattedDate(pubDate)}
              </p>
              <p className="text-[0.7rem] text-gray-400">{author?.firstname} {author?.lastname}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
