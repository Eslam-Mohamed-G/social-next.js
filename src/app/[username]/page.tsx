import Link from 'next/link';
import React from 'react';
import Images from '../components/Images';

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
            <div className=''>
                {/* cover avatar container */}
                <div className='relative'>
                    {/* cover img */}
                    <div className='w-full aspect-[3/1]'>
                        <Images path='general/sunset.jpg' alt='' w={700} h={210} tr={true} className='hidden xl:block'/>
                        <Images path='general/sunset.jpg' alt='' w={700} h={280} tr={true} className='block xl:hidden'/>
                    </div>

                    {/* avatar */}
                    <div className='w-1/3 xsm:w-1/5 aspect-square rounded-full overflow-hidden border-4 border-white dark:border-black bg-gray-300 absolute left-4 -translate-y-1/2'>
                        <Images path='general/photo.jpg' alt='' w={200} h={200} tr={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
