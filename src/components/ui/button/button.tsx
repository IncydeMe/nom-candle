"use client"

import React from "react";
import { ButtonUiProps as ButtonProps } from "./IButton";
import { Button } from "@material-tailwind/react";

export const ButtonUi: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined} 
            {...props}
        >
            {children}
        </Button>
    );
}
