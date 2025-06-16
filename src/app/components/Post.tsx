import React from 'react'
import Images from './Images'
import PostInfo from './PostInfo'
import PostInteractions from './PostInteractions'
import { imageKit } from './utils';
import Video from './Video';
import Comments from './Comments';
import Link from 'next/link';

interface fileDetailsResponse {
    width: number;
    height: number;
    filePath: string;
    url: string;
    fileType: string;
    CustomMetadata?: { sensitive: boolean };
}

const Post = async ({ type }: { type?: "status" | "comment" }) => {

    const getFileDetails = async (fileId: string): Promise<fileDetailsResponse> => {
        return new Promise((resolve, reject) => {
            imageKit.getFileDetails(fileId, function (error, result) {
                if (error) console.log(error);
                else resolve(result as fileDetailsResponse);
            });
        })
    };

    const fileDetails = await getFileDetails("68322623432c476416fa4e64");
    console.log(fileDetails);

    return (
        <div className='border-b-1 border-textGrayLight dark:border-borderGray'>
            {/* post content */}
            <div className='flex gap-2 md:gap-4 p-2 md:p-4'>
                {/* avatar */}
                <div className={`${type === "status" && "hidden"} relative w-10 h-10 rounded-full overflow-hidden`}>
                    <Images path='general/em.png' alt='avatar' w={40} h={40} />
                </div>

                {/* content */}
                <div className={`flex-1 flex flex-col gap-2 ${type === "status" && "px-2"}`}>
                    {/* top */}
                    <div className='flex items-center justify-between w-full'>
                        <Link href={`/test`} className='flex gap-2'>
                            <div className={`${type !== "status" && "hidden"} relative w-10 h-10 rounded-full overflow-hidden`}>
                                <Images path='general/em.png' alt='avatar' w={40} h={40} />
                            </div>
                            <div className={`flex ${type ==="status" && "flex-col gap-0 items-start justify-center leading-none"} items-center gap-1 flex-wrap`}>
                                <span className='font-bold'>eslam</span>
                                <span className={`text-textGray ${type ==="status" && "text-sm"}`}>@esl</span>
                                { type !=="status" &&(<span className='text-textGray'>1 day</span>)}
                            </div>
                        </Link>
                        <PostInfo />
                    </div>
                    {/* text * media */}
                    <div className='text-black dark:text-white flex flex-col gap-2'>
                        <p className={`${type === "status" &&"text-lg"}`}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quia ipsum sit velit, vel ab
                            delectus ipsam, corrupti ratione ad voluptatibus corporis! Ea earum harum fuga incidunt laborum
                            odio exercitationem?
                        </p>
                        <div className=' rounded-xl overflow-hidden'>
                            {fileDetails && fileDetails.fileType === "image"
                                ?
                                <Images path={fileDetails.filePath} alt=''
                                    w={fileDetails.width}
                                    h={fileDetails.height}
                                    className={fileDetails.CustomMetadata?.sensitive ? "blur-lg" : ""}
                                />
                                :
                                <Video
                                    path={fileDetails.filePath}
                                    className={fileDetails.CustomMetadata?.sensitive ? "blur-lg" : ""}
                                />
                            }
                        </div>
                        {type === "status" && <span className='text-textGray text-sm'>8:41 pm . dec 5, 2025</span>}
                    </div>
                    <PostInteractions />
                </div>
            </div>
        </div>
    )
};

export default Post;