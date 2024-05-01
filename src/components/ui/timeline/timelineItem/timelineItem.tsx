"use client"
import React from 'react';
import { TimelineItem } from '@material-tailwind/react';
import type { ITimelineItem } from './ITimelineItem';

export const TimelineItemUi: React.FC<ITimelineItem> = ({children, ...props}) => {
    return(
        <TimelineItem {...props}>
            {children}
        </TimelineItem>
    )
}