import Images from '@/app/components/Images';
import React from 'react';

const PostModal = () => {
    return (
        <div className='fixed top-0 left-0 end-0 bottom-0 z-20 bg-textGray/55 flex justify-center'>
            <div className='bg-white dark:bg-black w-screen md:w-[600px] h-screen md:h-max md:rounded-xl mt-0 md:mt-12 p-2'>
                {/* top */}
                <div className='text-black dark:text-white flex flex-row justify-items-center justify-between'>
                    <button className='dark:text-white text-black cursor-pointer w-8 h-8 rounded-full hover:bg-textGray/25'>X</button>
                    <button className='rounded-full px-4 hover:bg-iconBlue/15 cursor-pointer transition-all delay-75 text-iconBlue'>Drafts</button>
                </div>
                {/* center */}
                <div className='h-28 border-b-1 border-textGrayLight dark:border-borderGray p-2 mt-4 mb-1'>
                    <div className='flex items-center gap-2'>
                        <Images path='general/em.png' alt='avatar' w={35} h={35}/>
                        <input type="text" name="desc" placeholder='what’s happening?' className='bg-transparent text-black dark:text-white text-2xl border-0 w-full focus:outline-none focus:ring-0 focus:border-textGrayLight dark:focus:border-borderGray placeholder:text-textGray py-2' />
                    </div>
                </div>
                {/* bottom */}
                <div className='p-2'>
                    <div className=''></div>
                    <button type='submit' className='bg-textGray text-white rounded-full px-4 py-1 justify-items-center content-center font-bold cursor-pointer flex items-center capitalize'>post</button>
                </div>
            </div>
        </div>
    );
}

export default PostModal;
