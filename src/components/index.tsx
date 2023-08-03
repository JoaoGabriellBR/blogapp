/* eslint-disable @next/next/no-img-element */

export default function Publication() {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">

                <div className="w-full h-48 my-5">
                    <img
                        className="rounded-t-lg object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1690818723724-865c77962c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
                        alt="Image"
                    />
                </div>

                <div>
                    <h1 className="mb-2 text-[1.2rem] font-bold text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h1>
                    <p className="mb-3 text-[0.9rem] font-light text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <p className="text-[0.7rem] text-gray-700 dark:text-gray-400">15/03/2023</p>
                            <p className="text-[0.7rem] text-gray-700 dark:text-gray-400">João Gabriel Silva</p>
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ver mais
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};