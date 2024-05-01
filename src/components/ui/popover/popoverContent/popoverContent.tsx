"use client"
import React from "react";
import { PopoverContent } from "@material-tailwind/react";
import type { IPopoverContent } from "./IPopoverContent";

export const PopoverContentUi: React.FC<IPopoverContent> = ({ children, ...props }) => {
    return (
        <PopoverContent
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </PopoverContent>
    )
}