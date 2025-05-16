import React from 'react'
import Images from './Images'
import PostInfo from './PostInfo'

export default function Post() {
    return (
        <div className='p-4 border-y-1 border-gray-500'>
            {/* post */}
            <div className='flex items-center gap-2 text-gray-400 font-bold'>
                icon
                <span>lama</span>
                <Images
                    path="general/Screenshot (292).png"
                    w={600}
                    h={600}
                    alt="screen"
                    className=""
                />
            </div>
            {/* post content */}
            <div className='flex gap-4'>
                {/* avatar */}
                <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                    <Images path='general/em.png' alt='avatar' w={40} h={40} />
                </div>

                {/* content */}
                <div className=''>
                    {/* top */}
                    <div className=''>
                        <div className=''></div>
                        <PostInfo/>
                    </div>
                </div>
            </div>

            post
        </div>
    )
};
