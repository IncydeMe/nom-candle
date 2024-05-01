"use client"
import React from 'react';
import type { IVideo } from './IVideo';

export const VideoUi: React.FC<IVideo> = ({children, ...props}) => {
    return(
        <video {...props}>
            {children}
        </video>
    )
}