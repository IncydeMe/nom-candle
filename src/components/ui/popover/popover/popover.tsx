"use client"
import React from "react";
import { Popover } from "@material-tailwind/react";
import type { IPopover } from "./IPopover";

export const PopoverUi: React.FC<IPopover> = ({ children, ...props }) => {
    return (
        <Popover
            {...props}
        >
            {children}
        </Popover>
    )
}