"use client"
import React from 'react';
import { Video as IKVideo, buildSrc } from '@imagekit/next';
const urLEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType = {
    path: string;
    className?: string;
}
const Video = ({ path, className }: VideoType) => {
    return (
        <IKVideo
            urlEndpoint={urLEndpoint}
            src={path}
            className={className}
            transformation={[{width:"1920", height:"1080", quality:90}]}
            controls
        />
    );
}

export default Video;
