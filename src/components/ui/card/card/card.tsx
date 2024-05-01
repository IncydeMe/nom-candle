"use client"

import React from 'react'
import { Card } from '@material-tailwind/react'
import type { CardUiProps as CardProps } from './ICard'

export const CardUi: React.FC<CardProps> = ({ children, ...props }) => {
    return(
        <Card
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Card>
    )
}