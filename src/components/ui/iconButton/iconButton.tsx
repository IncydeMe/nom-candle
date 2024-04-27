"use client"
import React from "react";
import { IconButton } from "@material-tailwind/react";
import type { IIconButtonProps as IconButtonProps } from "./IIconButton";

export const IconButtonUi: React.FC<IconButtonProps> = ({ children, ...props }) => {
    return (
        <IconButton
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </IconButton>
    );
}