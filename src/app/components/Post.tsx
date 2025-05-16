import React from 'react'
import Images from './Images'

export default function Post() {
    return (
        <div className='p-4 border-y-[1px] border-gray-500'>
            {/* post */}
            <div className='flex items-center gap-2 text-gray-400 font-bold'>
                <Images
                    path="general/Screenshot (292).png"
                    w={600}
                    h={600}
                    alt="screen"
                    className=""
                />
            </div>
            post
        </div>
    )
};
