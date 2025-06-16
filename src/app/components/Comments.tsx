import React from 'react';
import Post from './Post';
import Images from './Images';

const Comments = () => {
    return (
        <div className='border-b-1 border-textGrayLight dark:border-borderGray'>
            <form className='flex items-center p-2 px-4'>
                <div className='flex flex-1 items-center gap-2'>
                    <Images path='general/em.png' alt='avatar' w={35} h={35} />
                    <input type="text" name="desc" placeholder='Post your reply' className='flex-1 bg-transparent text-black dark:text-white text-xl border-0 w-full focus:outline-none focus:ring-0 focus:border-textGrayLight dark:focus:border-borderGray placeholder:text-textGray py-1' />
                </div>
                <button type='submit' className='bg-textGray text-white rounded-full px-4 py-1 justify-items-center content-center font-bold cursor-pointer flex items-center capitalize'>reply</button>
            </form>
        </div>
    );
}

export default Comments;
