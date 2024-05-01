"use client"
import React from "react";
import { Select } from "@material-tailwind/react";
import type { ISelect } from "./ISelect";

export const SelectUi: React.FC<ISelect> = ({ children, ...props }) => {
    return (
        <Select
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Select>
    )
}