import Link from 'next/link';
import React from 'react';
import Images from '../components/Images';

const UserPage = () => {
    return (
        <div className=''>
            {/* title */}
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-sm p-4 z-10 bg-black/25'>
                <Link href="/">
                    <Images path='icons/back.svg' alt='back forward' w={24} h={24}/>
                </Link>
                <h1 className='font-bold text-lg'>Eslam</h1>
            </div>

            {/* info */}
            <div className=''>
                {/* cover avatar container */}
                <div className='relative w-full'>
                    {/* cover img */}
                    <div className='w-full h-[200px] aspect-[3/1] border border-red-500'>
                        {/* <Images path='general/sunset.jpg' alt='' w={700} h={220} tr={true}/> */}
                    </div>

                    {/* avatar */}
                    <div className='w-1/5 aspect-square rounded-full overflow-hidden border-4 border-white dark:border-black bg-gray-300 absolute left-4 -translate-y-1/2'>
                        <Images path='general/photo.jpg' alt='' w={100} h={100} tr={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
