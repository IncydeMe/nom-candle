"use client"

import React from 'react'
import { CardHeader } from '@material-tailwind/react'
import type { CardHeaderUiProps as CardHeaderProps } from './ICardHeader'

export const CardHeaderUi: React.FC<CardHeaderProps> = ({ children, ...props }) => {
    return(
        <CardHeader
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </CardHeader>
    )
}