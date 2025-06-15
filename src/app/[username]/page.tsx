import Link from 'next/link';
import React from 'react';
import Images from '../components/Images';

const menuList = [
    {
        id: 1,
        name: "infoMore",
        link: "/",
        icon: "infoMore.svg",
        d: "M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
        d: "M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
    },
    {
        id: 3,
        name: "Messages",
        link: "/",
        icon: "message.svg",
        d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
    },
]

const UserPage = () => {
    return (
        <div className=''>
            {/* title */}
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-sm px-4 py-2 z-10 bg-white/95 dark:bg-black/75'>
                <Link href="/" className='rounded-full p-2 hover:bg-textGrayLight dark:hover:bg-textGray transition-all delay-25'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                            className="fill-black dark:fill-white"
                        />
                    </svg>
                </Link>
                <h1 className='font-bold text-lg dark:text-textGrayLight'>Eslam</h1>
            </div>

            {/* info */}
            <div className='relative'>
                {/* cover avatar container */}
                <div className='relative'>
                    {/* cover img */}
                    <div className='w-full'>
                        <Images path='general/sunset.jpg' alt='' w={700} h={210} tr={true} className='hidden xl:block' />
                        <Images path='general/sunset.jpg' alt='' w={700} h={260} tr={true} className='block xl:hidden' />
                    </div>

                    {/* avatar */}
                    <div className='w-1/3 xsm:w-1/5 aspect-square rounded-full overflow-hidden border-4 border-white dark:border-black bg-gray-300 absolute left-4 -translate-y-1/2'>
                        <Images path='general/photo.jpg' alt='' w={200} h={200} tr={false} />
                    </div>
                </div>

                <div className='absolute translate-x-6 translate-y-14 xsm:end-9 xsm:translate-y-3'>
                    <div className='flex flex-row flex-wrap gap-2 items-center content-center'>
                        {menuList.map(icon => (
                            <div className='w-9 h-9 flex items-center justify-center rounded-full cursor-pointer border-1 border-textGray hover:bg-textGrayLight transition-all delay-25' key={icon.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='rounded-full'>
                                    <path
                                        className="fill-black dark:fill-white transition-all delay-50"
                                        d={icon.d}
                                    />
                                </svg>
                            </div>
                        ))}

                        <button className='rounded-full py-2 px-5 capitalize font-bold bg-black text-white dark:bg-white dark:text-black'>
                            follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
