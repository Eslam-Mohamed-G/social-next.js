import Post from '@/app/components/Post';
import Link from 'next/link';
import React from 'react';

const StatusPage = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-8 sticky top-0 start-0 end-0 backdrop-blur-sm px-4 py-2 z-10 bg-white/95 dark:bg-black/75'>
                <Link href="/" className='rounded-full p-2 hover:bg-textGrayLight dark:hover:bg-textGray transition-all delay-25'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                            className="fill-black dark:fill-white"
                        />
                    </svg>
                </Link>
                <h1 className='font-bold text-lg dark:text-textGrayLight'>Post</h1>
            </div>
            <Post/>
        </div>
    );
}

export default StatusPage;
