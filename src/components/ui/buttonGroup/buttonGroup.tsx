"use client"

import React from "react";
import { ButtonGroupUiProps as ButtonGroupProps } from "./IButtonGroup";
import { ButtonGroup } from "@material-tailwind/react";

export const ButtonGroupUi: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
    return (
        <ButtonGroup 
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </ButtonGroup>
    );
}