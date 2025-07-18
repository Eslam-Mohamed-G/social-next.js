"use client"
import Images from '@/app/components/Images';
import { useRouter } from 'next/navigation';
import React from 'react';

const PostModal = () => {

    const router = useRouter();
    const closeModal = ()=>{
        router.back()
    };
    return (
        <div className='fixed top-0 left-0 end-0 bottom-0 z-20 bg-textGray/55 flex justify-center'>
            <div className='bg-white dark:bg-black w-screen md:w-[600px] h-screen md:h-max md:rounded-xl mt-0 md:mt-12 p-2 pb-0'>
                {/* top */}
                <div className='text-black dark:text-white flex flex-row justify-items-center justify-between'>
                    <button onClick={closeModal} className='dark:text-white text-black cursor-pointer w-8 h-8 rounded-full hover:bg-textGray/25'>X</button>
                    <button className='rounded-full px-4 hover:bg-iconBlue/15 cursor-pointer transition-all delay-75 text-iconBlue'>Drafts</button>
                </div>
                {/* center */}
                <div className='h-28 border-b-1 border-textGrayLight dark:border-borderGray p-2 mt-4 mb-1'>
                    <div className='flex items-center gap-2'>
                        <Images path='general/em.png' alt='avatar' w={35} h={35} />
                        <input type="text" name="desc" placeholder='what’s happening?' className='bg-transparent text-black dark:text-white text-2xl border-0 w-full focus:outline-none focus:ring-0 focus:border-textGrayLight dark:focus:border-borderGray placeholder:text-textGray py-2' />
                    </div>
                </div>
                {/* bottom */}
                <div className='p-2 flex items-center justify-between'>
                    <div className='flex flex-row'>
                        <div className='rounded-full p-2 hover:bg-iconBlue/15'>
                            <Images path='icons/image.svg' alt='image' w={20} h={20} className='cursor-pointer' />
                        </div>
                        <div className='rounded-full p-2 hover:bg-iconBlue/15'>
                            <Images path='icons/gif.svg' alt='gif' w={20} h={20} className='cursor-pointer' />
                        </div>
                        <div className='rounded-full p-2 hover:bg-iconBlue/15'>
                            <Images path='icons/poll.svg' alt='poll' w={20} h={20} className='cursor-pointer' />
                        </div>
                        <div className='rounded-full p-2 hover:bg-iconBlue/15'>
                            <Images path='icons/emoji.svg' alt='emoji' w={20} h={20} className='cursor-pointer' />
                        </div>
                        <div className='rounded-full p-2 hover:bg-iconBlue/15'>
                            <Images path='icons/schedule.svg' alt='schedule' w={20} h={20} className='cursor-pointer' />
                        </div>
                        <div className='rounded-full p-2 hover:bg-iconBlue/15'>
                            <Images path='icons/location.svg' alt='location' w={20} h={20} className='cursor-pointer' />
                        </div>
                    </div>
                    <button type='submit' className='bg-textGray text-white rounded-full px-4 py-1 justify-items-center content-center font-bold cursor-pointer flex items-center capitalize'>post</button>
                </div>
            </div>
        </div>
    );
}

export default PostModal;
