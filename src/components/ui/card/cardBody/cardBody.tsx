"use client"

import React from 'react';
import { CardBody } from '@material-tailwind/react';
import type { CardBodyUiProps as CardBodyProps } from './ICardBody';

export const CardBodyUi: React.FC<CardBodyProps> = ({ children, ...props }) => {
    return (
        <CardBody
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </CardBody>
    );
}