import React from 'react';
import Images from './Images';

const PopularTags = () => {
    return (
        <div className='p-4 rounded-2xl border-1 border-textGrayLight dark:border-borderGray flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-textGray'>what’s happening</h1>
            {/* trends */}
            <div className=''>
                <div className='relative w-20 h-20 rounded-lg overflow-hidden'>
                    <Images path='general/post.jpeg' alt='img' tr={true} w={120} h={120} />
                </div>
            </div>

            {/* topics */}
            <div className=''></div>
        </div>
    );
}

export default PopularTags;
