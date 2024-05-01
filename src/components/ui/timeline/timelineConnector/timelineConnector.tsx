"use client"
import React from 'react';
import { TimelineConnector } from '@material-tailwind/react';
import type { ITimelineConnector } from './ITimelineConnector';

export const TimelineConnectorUi: React.FC<ITimelineConnector> = ({children, ...props}) => {
    return(
        <TimelineConnector {...props}>
            {children}
        </TimelineConnector>
    )
}