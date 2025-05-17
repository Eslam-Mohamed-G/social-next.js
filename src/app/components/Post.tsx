import React from 'react'
import Images from './Images'
import PostInfo from './PostInfo'
import PostInteractions from './PostInteractions'

export default function Post() {
    return (
        <div className='p-4 border-y-1 border-gray-500'>
            {/* post */}
            <div className='flex items-center gap-2 text-gray-400 font-bold'>
                icon
                <span>lama</span>
            </div>
            {/* post content */}
            <div className='flex gap-4'>
                {/* avatar */}
                <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                    <Images path='general/em.png' alt='avatar' w={40} h={40} />
                </div>

                {/* content */}
                <div className='flex-1 flex flex-col gap-2'>
                    {/* top */}
                    <div className='flex items-center justify-between gap-2 text-gray-400'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <h1 className='text-2xl font-bold'>eslam</h1>
                            <span className='text-[#71767b]'>@esl</span>
                            <span className='text-[#71767b]'>1 day</span>
                        </div>
                        <PostInfo />
                    </div>
                    {/* text * media */}
                    <div className='text-white flex flex-col gap-2'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quia ipsum sit velit, vel ab delectus ipsam, corrupti ratione ad voluptatibus corporis! Ea earum harum fuga incidunt laborum odio exercitationem?</p>
                        <Images
                            path="general/Screenshot (292).png"
                            w={600}
                            h={600}
                            alt="screen"
                            className=""
                        />
                    </div>
                <PostInteractions/>
                </div>
            </div>
        </div>
    )
};
