import React from 'react'
import Images from './Images'
import PostInfo from './PostInfo'
import PostInteractions from './PostInteractions'
import { imageKit } from './utils';
import Video from './Video';

interface fileDetailsResponse {
    width: number;
    height: number;
    filePath: string;
    url: string;
    fileType: string;
    CustomMetadata?: { sensitive: boolean };
}

const Post = async () => {

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
        <div className='p-2 md:p-4 border-b-1 border-textGrayLight dark:border-borderGray'>
            {/* post content */}
            <div className='flex gap-2 md:gap-4'>
                {/* avatar */}
                <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                    <Images path='general/em.png' alt='avatar' w={40} h={40} />
                </div>

                {/* content */}
                <div className='flex-1 flex flex-col gap-2'>
                    {/* top */}
                    <div className='flex items-center justify-between gap-2 text-textGray'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <h1 className='text-2xl font-bold'>eslam</h1>
                            <span className='text-textGray'>@esl</span>
                            <span className='text-textGray'>1 day</span>
                        </div>
                        <PostInfo />
                    </div>
                    {/* text * media */}
                    <div className='text-black dark:text-white flex flex-col gap-2'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quia ipsum sit velit, vel ab
                            delectus ipsam, corrupti ratione ad voluptatibus corporis! Ea earum harum fuga incidunt laborum
                            odio exercitationem?</p>
                        {/*
                    <Images path="general/Screenshot (292).png" w={600} h={600} alt="screen" className="w-full" /> */}

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
                    <PostInteractions />
                </div>
            </div>
        </div>
    )
};

export default Post;