"use client"
import React from "react";
import { Radio } from "@material-tailwind/react";
import type { IRadioButton } from "./IRadioButton";

export const RadioButtonUi: React.FC<IRadioButton> = ({ children, ...props }) => {
    return (
        <Radio
            crossOrigin={""}
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Radio>
    )
}