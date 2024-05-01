"use client"
import React from 'react';
import { Timeline } from '@material-tailwind/react';
import type { ITimeline } from './ITimeline';

export const TimelineUi: React.FC<ITimeline> = ({children, ...props}) => {
    return(
        <Timeline {...props}>
            {children}
        </Timeline>
    )
}