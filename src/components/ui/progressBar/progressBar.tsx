"use client"
import React from "react";
import { Progress } from "@material-tailwind/react";
import type { IProgressBar } from "./IProgressBar";

export const ProgressBarUi: React.FC<IProgressBar> = ({ children, ...props }) => {
    return (
        <Progress
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Progress>
    )
}