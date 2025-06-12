import React from 'react';
import Images from './Images';

const PostInfo = () => {
    return (
        <div className='cursor-pointer w-8 h-8 content-center rounded-full hover:bg-iconBlue/15 delay-50 group'>
            {/* <Images path='icons/infoMore.svg' alt='more info' w={16} h={16} className='m-auto'/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='m-auto'>
                <path 
                    className="fill-textGray group-hover:fill-iconBlue transition-all delay-50"
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                />
            </svg>
        </div>
    );
}

export default PostInfo;
