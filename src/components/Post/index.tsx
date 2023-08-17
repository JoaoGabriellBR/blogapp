/* eslint-disable @next/next/no-img-element */
import formattedDate from "@/services/formattedDate";
import Link from "next/link";

interface NewsItem {
  title: string;
  url?: string;
  pub_date: string;
  snippet: string;
  multimedia: { url: string }[]
  headline: { main: string }
  byline: {
    person: {
      firstname: string;
      lastname: string;
    }[]
  }
}

interface PropsNewsItem {
  newsData: NewsItem[];
  visibleItems: number;
}

export default function Post({ newsData, visibleItems }: PropsNewsItem) {

  const abstract = newsData?.map((item) => item?.headline);
  const title = abstract?.map((item) => item?.main);
  const description = newsData?.map((item) => item?.snippet);
  const image = newsData?.map((item) => item?.multimedia?.map((i) => i?.url)[0]);
  const pubDate = newsData?.map((item) => item?.pub_date);
  const url = newsData?.map((item) => item?.url);
  const firstName = newsData?.map((item) => item?.byline?.person?.map((item: any) => item?.firstname)[0]);
  const lastName = newsData?.map((item) => item?.byline?.person?.map((item: any) => item?.lastname)[0]);

  return (
    <>
      {newsData
        // ?.filter((news: any) => news?.image_url !== null)
        // ?.slice(0, visibleItems)
        ?.map((item: any) => (
          <>
            <div
              className={`mb-10 w-full md:max-w-[20rem] max-h-[30rem] flex flex-col rounded-lg`}
            >
              {image ? (
                <div
                  className={`h-48 w-full mb-6 relative overflow-hidden cursor-pointer`}
                >
                  <img
                    className="rounded-t-lg object-cover w-full h-full transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
                    src={String(image)}
                    alt="Imagem"
                  />
                </div>
              ) : null}

              <div>
                <span className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 ease-in duration-200 text-white text-[0.7rem] font-semibold mr-2 px-2.5 py-1 rounded-full dark:bg-indigo-500 dark:text-white">{item?.category?.map((item: string) => item)}</span>
                <Link href={String(url)}>
                  <h1 className="my-2 text-[1.2rem] font-bold hover:text-white cursor-pointer">
                    {title?.length >= 50
                      ? `${title?.slice(0, 50)}...`
                      : title}
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
                  {formattedDate(String(pubDate))}
                </p>
                <p className="text-[0.7rem] text-gray-400">{firstName}</p>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
