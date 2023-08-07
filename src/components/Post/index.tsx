/* eslint-disable @next/next/no-img-element */
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
              <h1 className="mb-2 text-[1.2rem] font-bold cursor-pointer">
                {item?.title?.length >= 50 ? `${item.title?.slice(0, 50)}...` : item?.title}
              </h1>
              <p className="mb-3 text-[0.9rem] font-light">
                {item?.description?.length >= 120 ? `${item.description?.slice(0, 120)}...` : item?.description}
              </p>
            </div>

          </div>
        </>
      ))}
    </>
  );
}
