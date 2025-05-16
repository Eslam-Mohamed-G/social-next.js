import React from 'react';
import Images from './Images';

const PostInfo = () => {
    return (
        <div className='cursor-pointer w-4 h-4'>
            <Images path='icons/infoMore.svg' alt='more info' w={16} h={16}/>
        </div>
    );
}

export default PostInfo;
