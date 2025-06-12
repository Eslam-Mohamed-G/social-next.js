import React from 'react';
import Images from './Images';
import Link from 'next/link';
import PostInfo from './PostInfo';

const PopularTags = () => {
    return (
        <div className='rounded-2xl overflow-hidden border-1 border-textGrayLight dark:border-borderGray flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-black dark:text-textGrayLight pl-4 pt-4'>what’s happening</h1>
            {/* trends */}
            <div className='px-4 hover:bg-textGrayLight dark:hover:bg-hoverBackGround cursor-pointer'>
                <div className='flex items-center justify-between'>
                    <span className='text-textGray capitalize text-sm'>trending in egypt</span>
                    <PostInfo />
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='text-black dark:text-textGrayLight text-center font-semibold'>#trend name</span>
                    <span className='text-textGray text-[12px]'>8k posts</span>
                </div>
            </div>
            <div className='px-4 hover:bg-textGrayLight dark:hover:bg-hoverBackGround cursor-pointer'>
                <div className='flex items-center justify-between'>
                    <span className='text-textGray capitalize text-sm'>trending in egypt</span>
                    <PostInfo />
                </div>
                <div className='flex flex-col justify-center'>
                    <span className='text-black dark:text-textGrayLight text-center font-semibold'>#trend name</span>
                    <span className='text-textGray text-[12px]'>7.2k posts</span>
                </div>
            </div>
            <Link href="/" className='text-iconBlue capitalize px-4 py-2 hover:bg-textGrayLight dark:hover:bg-hoverBackGround'>
                show more
            </Link>
        </div>
    );
}

export default PopularTags;
