"use client"
import React from "react"
import { SpeedDialHandler } from "@material-tailwind/react"
import type { ISpeedDialHandler } from "./ISpeedDialHandler"

export const SpeedDialHandlerUi: React.FC<ISpeedDialHandler> = ({ children, ...props }) => {
    return (
        <SpeedDialHandler
            {...props}
        >
            {children}
        </SpeedDialHandler>
    )
}