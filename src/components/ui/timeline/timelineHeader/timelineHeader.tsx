"use client"
import React from 'react';
import { TimelineHeader } from '@material-tailwind/react';
import type { ITimelineHeader } from './ITimelineHeader';

export const TimelineHeaderUi: React.FC<ITimelineHeader> = ({children, ...props}) => {
    return(
        <TimelineHeader {...props}>
            {children}
        </TimelineHeader>
    )
}