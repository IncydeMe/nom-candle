"use client"
import React from 'react';
import { TimelineBody } from '@material-tailwind/react';
import type { ITimelineBody } from './ITimelineBody';

export const TimelineBodyUi: React.FC<ITimelineBody> = ({children, ...props}) => {
    return(
        <TimelineBody {...props}>
            {children}
        </TimelineBody>
    )
}