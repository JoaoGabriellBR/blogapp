/* eslint-disable @next/next/no-img-element */
interface NewsItem {
    title: string;
    description: string;
    urlToImage?: string;
    publishedAt: string;
    author: string;
}

interface PropsNewsItem {
    newsData: NewsItem;
}

export default function MainPost({ newsData }: PropsNewsItem) {
    return (
        <>
            <div>
                <hr className="w-full h-[1rem] mt-2"></hr>
                <div className="w-full">

                    <div className={`h-96 mb-6`}>
                        <img
                            className="rounded-t-lg object-cover w-full h-full"
                            src={newsData?.urlToImage}
                            alt="Imagem"
                        />
                    </div>

                    <div>
                        <h1 className="mb-2 text-[1.2rem] font-bold cursor-pointer">
                            {newsData?.title}
                        </h1>
                        <p className="mb-3 text-[0.9rem] font-light">
                            {newsData?.description}
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};