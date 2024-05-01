"use client"
import React from 'react';
import { TimelineIcon } from '@material-tailwind/react';
import type { ITimelineIcon } from './ITimelineIcon';

export const TimelineIconUi: React.FC<ITimelineIcon> = ({children, ...props}) => {
    return(
        <TimelineIcon {...props}>
            {children}
        </TimelineIcon>
    )
}