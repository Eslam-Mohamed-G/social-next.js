import Image from 'next/image';
import React from 'react';

const ImageEditor = ({ onClose, previewURL, settings, setSettings }: {
    onClose: () => void;
    previewURL: string;
    settings: { type: "original" | "wide" | "square"; sensitive: boolean; };
    setSettings: React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>
}) => {

    const handleChangeSensitive = (sensitive: boolean) => {
        setSettings(prev => ({ ...prev, sensitive }))
    };
    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-black/75 z-10 flex items-center justify-center'>
            <div className='bg-black rounded-xl p-12 flex flex-col gap-4'>
                {/* top */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <svg viewBox="0 0 24 24" width={32} onClick={onClose} className='cursor-pointer'>
                            <path
                                className='fill-white'
                                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                            />
                        </svg>
                        <h1 className='font-bold text-xl text-white'>Media Settings</h1>
                    </div>

                    <button className='bg-white py-2 px-4 rounded-full text-black font-bold cursor-pointer'>Save</button>
                </div>

                {/* image container */}
                <div className='w-[600px] h-[600px] flex items-center'>
                    <Image src={previewURL} alt='image' width={600} height={600}
                        className={`w-full ${settings.type === "original"
                            ? "h-full object-contain"
                            : settings.type === "square"
                                ? "aspect-square object-cover"
                                : "aspect-video object-cover"
                            }`}
                    />
                </div>

                {/* setting */}
                <div className='flex items-center justify-between text-sm'>
                    <div className='flex items-center gap-8'></div>
                    <div className={`cursor-pointer py-1 px-4 rounded-full text-black ${settings.sensitive ? "bg-red-500" : "bg-white"}`}
                        onClick={() => handleChangeSensitive(!settings.sensitive)}
                    >
                        sensitive
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageEditor;
