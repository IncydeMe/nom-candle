"use client"

import React from "react";
import { CardFooter } from "@material-tailwind/react";
import type { CardFooterUiProps as CardFooterProps } from "./ICardFooter";

export const CardFooterUi: React.FC<CardFooterProps> = ({ children, ...props }) => {
    return (
        <CardFooter
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </CardFooter>
    );
}