"use client"
import React, { useState } from 'react';
import Images from './Images';

const Share = () => {
    const [media, setMedia] = useState<File | null>(null);
    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0])
        };
    }
    return (
        <form className='flex gap-4 p-4'>
            {/* avatar */}
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                <Images path='general/em.png' w={100} h={100} alt='logo' />
            </div>

            {/* inputs */}
            <div className='flex-1 flex flex-col gap-4'>
                <input type="text" placeholder='what’s happening?' className='bg-transparent text-white dark:text-white text-2xl border-0 border-b-2 border-borderGray w-full focus:outline-none focus:ring-0 focus:border-borderGray placeholder:text-textGray py-2' />

                {/* content */}
                <div className='flex justify-between items-center'>
                    {/* icons */}
                    <div className='flex gap-3 md:gap-4'>
                        {/* upload images */}
                        <div className=''>
                            <input type="file" name="" id="file" className='hidden' onChange={handleMediaChange} />
                            <label htmlFor="file">
                                <Images path='icons/image.svg' alt='image' w={20} h={20} className='cursor-pointer' />
                            </label>
                        </div>
                        <Images path='icons/gif.svg' alt='gif' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/poll.svg' alt='poll' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/emoji.svg' alt='emoji' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/schedule.svg' alt='schedule' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/location.svg' alt='location' w={20} h={20} className='cursor-pointer' />
                    </div>
                    <button className='bg-textGray rounded-full px-3 py-1 md:px-4 md:py-2 font-bold cursor-pointer flex items-center capitalize'>post</button>
                </div>
            </div>
        </form>
    );
}

export default Share;
