/* eslint-disable @next/next/no-img-element */
import formattedDate from "@/services/formattedDate";
import Link from "next/link";
import { PropsNewsItem } from "@/services/Interfaces/newsItem";

export default function Post({ news, visibleItems }: PropsNewsItem) {

  const { headline, snippet, multimedia, pub_date, web_url, byline, section_name } = news || {};

  const title = headline?.main;
  const description = snippet;
  const image = multimedia?.[2]?.url;
  const pubDate = pub_date;
  const author = byline?.person?.[0];

  return (
    <>
      <div className={`mb-10 w-full md:max-w-[20rem] max-h-[30rem] flex flex-col rounded-lg`}>
        {image && (
          <div className={`h-48 w-full mb-6 relative overflow-hidden cursor-pointer`}>
            <img
              className="rounded-t-lg object-cover w-full h-full transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={`https://www.nytimes.com/${image}`}
              alt="Imagem"
            />
          </div>
        )}

        <div>
          <span className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 ease-in duration-200 text-white text-[0.7rem] font-semibold mr-2 px-2.5 py-1 rounded-full dark:bg-indigo-500 dark:text-white">{section_name}</span>
          <Link href={web_url}>
            <h1 className="my-2 text-[1.2rem] font-bold hover:text-white cursor-pointer">
              {title?.length >= 50 ? `${title?.slice(0, 50)}...` : title}
            </h1>
          </Link>
          <p className="mb-3 text-[0.9rem] font-light text-gray-400">
            {description.length >= 120
              ? `${description?.slice(0, 120)}...`
              : description}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="text-[0.7rem] text-gray-400">
            {formattedDate(pubDate)}
          </p>
          <p className="text-[0.7rem] text-gray-400">{author?.firstname} {author?.lastname}</p>
        </div>
      </div>
    </>
  );
}
