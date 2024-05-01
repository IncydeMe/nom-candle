"use client"
import React from 'react';
import { Typography } from '@material-tailwind/react';
import type { ITypography } from './ITypography';

export const TypographyUi: React.FC<ITypography> = ({children, onPointerEnterCapture, onPointerLeaveCapture, ...props}) => {
    return(
        <Typography
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </Typography>
    )
}