import Link from 'next/link';
import React from 'react';
import Images from './Images';

const Recommendations = () => {
    return (
        <div className='flex flex-col gap-2 rounded-2xl border-1 border-textGrayLight dark:border-borderGray'>
            <p className='font-bold text-xl dark:text-textGrayLight px-4 pt-2'>Who to follow</p>
            {/* user card */}
            <div className=''>
                <div className='flex gap-2 px-4 py-2 hover:bg-textGrayLight dark:hover:bg-hoverBackGround'>
                    <div className='relative rounded-full overflow-hidden w-12 h-12'>
                        <Images path='general/me.jpeg' alt='avater' w={100} h={100} />
                    </div>
                    <div className='flex flex-1 items-center justify-between'>
                        <div>
                            <h1 className='text-md font-bold dark:text-textGrayLight'>john doe</h1>
                            <span className='text-textGray text-sm'>@johonDoe</span>
                        </div>
                        <button className='bg-black dark:bg-white rounded-2xl capitalize font-semibold text-textGrayLight dark:text-black h-fit px-4 py-1'>
                            follow
                        </button>
                    </div>
                </div>

                <div className='flex gap-2 px-4 py-2 hover:bg-textGrayLight dark:hover:bg-hoverBackGround'>
                    <div className='relative rounded-full overflow-hidden w-12 h-12'>
                        <Images path='general/me.jpeg' alt='avater' w={100} h={100} />
                    </div>
                    <div className='flex flex-1 items-center justify-between'>
                        <div>
                            <h1 className='text-md font-bold dark:text-textGrayLight'>john doe</h1>
                            <span className='text-textGray text-sm'>@johonDoe</span>
                        </div>
                        <button className='bg-black dark:bg-white rounded-2xl capitalize font-semibold text-textGrayLight dark:text-black h-fit px-4 py-1'>
                            follow
                        </button>
                    </div>
                </div>
            </div>
            <Link href="/" className='text-iconBlue capitalize px-4 pb-2'>
                show more
            </Link>
        </div>
    );
}

export default Recommendations;
