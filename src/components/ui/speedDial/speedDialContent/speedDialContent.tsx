"use client"
import React from "react"
import { SpeedDialContent } from "@material-tailwind/react"
import type { ISpeedDialContent } from "./ISpeedDialContent"

export const SpeedDialContentUi: React.FC<ISpeedDialContent> = ({ children, ...props }) => {
    return (
        <SpeedDialContent
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </SpeedDialContent>
    )
}