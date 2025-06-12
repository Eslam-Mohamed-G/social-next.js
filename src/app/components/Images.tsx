"use client"

import React from 'react';
const urLEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

import { Image } from '@imagekit/next';


type ImageType = {
    path: string;
    w?: number;
    h?: number;
    alt: string;
    className?: string;
    tr?: boolean;
}

const Images = ({ path, w, h, alt, className, tr }: ImageType) => {
    return (
        <div>
            <Image
                urlEndpoint={urLEndpoint}
                src={path}
                width={w}
                height={h}
                transformation={tr? [{ width: w, height: h }]: []}
                alt={alt}
                className={className}
            />
        </div>
    );
}

export default Images;

