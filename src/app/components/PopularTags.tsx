import React from 'react';
import Images from './Images';

const PopularTags = () => {
    return (
        <div className='p-4 rounded-2xl border-1 border-textGrayLight dark:border-borderGray flex flex-col gap-4'>
            <h1 className='text-xl font-bold text-textGray'>what’s happening</h1>
            {/* trends */}
            <div className='flex gap-2'>
                <div className='relative w-20 h-20 rounded-lg overflow-hidden'>
                    <Images path='general/post.jpeg' alt='img' tr={true} w={120} h={120} />
                </div>
                <div className='flex-1'>
                    <h2 className='font-bold text-textGrayLight'>everst</h2>
                    <span className='text-sm text-textGray'>good night</span>
                </div>
            </div>

            {/* topics */}
            <div className=''>
                <div className='flex items-center justify-between'>
                    <span>technology * trending</span>
                </div>
            </div>
        </div>
    );
}

export default PopularTags;
