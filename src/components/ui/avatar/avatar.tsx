"use client"

import React from "react";
import { AvatarUiProps as AvatarProps } from "./IAvatar";
import { Avatar } from "@material-tailwind/react";

export const AvatarUi: React.FC<AvatarProps> = ({ children, ...props }) => {
    return (
        <Avatar 
            placeholder={""} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined} 
            {...props}
        >
            {children}
        </Avatar>
    );
}