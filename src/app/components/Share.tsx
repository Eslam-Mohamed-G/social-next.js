"use client"
import React, { useState } from 'react';
import Images from './Images';
import { shareAction } from '@/action';
import ImageFromNext from 'next/image';
import ImageEditor from './ImageEditor';

const Share = () => {
    const [media, setMedia] = useState<File | null>(null);
    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0])
        };
    }

    const [isEditeOpen, setIsEditeOpen] = useState(false);
    const [settings, setSettings] = useState<{ type: "original" | "wide" | "square"; sensitive: boolean; }>({
        type: "original",
        sensitive: false,
    });

    const previewURL = media ? URL.createObjectURL(media) : null;
    return (
        <form className='flex gap-2 md:gap-4 py-2 px-2 md:px-4 border-b-1 border-textGrayLight dark:border-borderGray' action={(formData) => shareAction(formData, settings)}>
            {/* avatar */}
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                <Images path='general/em.png' w={100} h={100} alt='logo' />
            </div>

            {/* inputs */}
            <div className='flex-1 flex flex-col gap-2'>
                <input type="text" name="desc" placeholder='what’s happening?' className='bg-transparent text-black dark:text-white text-2xl border-0 border-b-1 border-textGrayLight dark:border-borderGray w-full focus:outline-none focus:ring-0 focus:border-textGrayLight dark:focus:border-borderGray placeholder:text-textGray py-2' />

                {
                    media?.type.includes("image") && previewURL &&
                    <div className='relative rounded-xl w-fit overflow-hidden'>
                        <ImageFromNext src={previewURL} alt='image' width={300} height={300}
                            className={`w-full ${settings.type === "original"
                                ? "h-full object-contain"
                                : settings.type === "square"
                                    ? "aspect-square object-cover"
                                    : "aspect-video object-cover"
                                }`}
                        />
                        <div className='absolute top-2 left-2 bg-black/40 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer' onClick={() => setIsEditeOpen(true)}>edit</div>
                    </div>
                }

                {
                    media?.type.includes("video") && previewURL && 
                    (<div className='relative'>
                        <video src={previewURL} controls/>
                        <button className='absolute top-2 right-2 bg-black/50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer' onClick={()=>setMedia(null)}>X</button>
                    </div>)
                }

                {isEditeOpen && previewURL && (
                    <ImageEditor
                        onClose={() => setIsEditeOpen(false)}
                        previewURL={previewURL}
                        settings={settings}
                        setSettings={setSettings}
                    />
                )}
                {/* content */}
                <div className='flex justify-between items-center'>
                    {/* icons */}
                    <div className='flex gap-3 md:gap-4'>
                        {/* upload images */}
                        <div className=''>
                            <input type="file" name="file" id="file" accept='image/*,video/*' className='hidden' onChange={handleMediaChange} />
                            <label htmlFor="file">
                                <Images path='icons/image.svg' alt='image' w={20} h={20} className='cursor-pointer' />
                            </label>
                        </div>
                        <Images path='icons/gif.svg' alt='gif' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/poll.svg' alt='poll' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/emoji.svg' alt='emoji' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/schedule.svg' alt='schedule' w={20} h={20} className='cursor-pointer' />
                        <Images path='icons/location.svg' alt='location' w={20} h={20} className='cursor-pointer' />
                    </div>
                    <button type='submit' className='bg-textGray text-white rounded-full px-3 py-1 md:px-4 md:py-2 font-bold cursor-pointer flex items-center capitalize'>post</button>
                </div>
            </div>
        </form>
    );
}

export default Share;
