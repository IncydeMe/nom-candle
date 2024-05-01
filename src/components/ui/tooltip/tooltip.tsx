"use client"
import React from 'react';
import { Tooltip } from '@material-tailwind/react';
import type { ITooltip } from './ITooltip';

export const TooltipUi: React.FC<ITooltip> = ({children, ...props}) => {
    return(
        <Tooltip {...props}>
            {children}
        </Tooltip>
    )
}