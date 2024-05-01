"use client"

import React from "react";
import { Checkbox } from "@material-tailwind/react";
import type { ICheckboxProps as CheckboxProps } from "./ICheckbox";

export const CheckboxUi: React.FC<CheckboxProps> = ({ children, ...props }) => {
    return (
        <Checkbox
            crossOrigin={""}
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Checkbox>
    );
}