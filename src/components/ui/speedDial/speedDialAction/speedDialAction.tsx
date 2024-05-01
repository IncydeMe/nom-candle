"use client"
import React from "react"
import { SpeedDialAction } from "@material-tailwind/react"
import type { ISpeedDialAction } from "./ISpeedDialAction"

export const SpeedDialActionUi: React.FC<ISpeedDialAction> = ({ children, ...props }) => {
    return (
        <SpeedDialAction
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </SpeedDialAction>
    )
}