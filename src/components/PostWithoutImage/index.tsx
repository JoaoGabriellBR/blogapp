/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import formattedDate from "@/services/formattedDate";

export default function PostWithoutImage({ newsData }: any) {
    return (
        <>
            {newsData?.filter((news: any) => news?.image_url === null)?.map((item: any) => (
                <>
                    <div className={`mb-10 w-full md:max-w-[20rem] max-h-[30rem] flex flex-col rounded-lg`}>
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
                                    {formattedDate(item?.pubDate)}
                                </p>
                                <p className="text-[0.7rem]">
                                    {item?.author}
                                </p>
                            </div>

                            <Link
                                href={item?.link}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:underline underline-offset-8"
                            >
                                Ver mais
                                <AiOutlineArrowRight className="ml-1 w-[0.9rem] h-[0.9rem]" />
                            </Link>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
};