"use client"
import React from "react";
import { PopoverHandler } from "@material-tailwind/react";
import type { IPopoverHandler } from "./IPopoverHandler";

export const PopoverHandlerUi: React.FC<IPopoverHandler> = ({ children, ...props }) => {
    return (
        <PopoverHandler
            {...props}
        >
            {children}
        </PopoverHandler>
    )
}