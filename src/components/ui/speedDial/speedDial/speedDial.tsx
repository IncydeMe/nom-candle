"use client"
import React from "react"
import { SpeedDial } from "@material-tailwind/react"
import type { ISpeedDial } from "./ISpeedDial"

export const SpeedDialUi: React.FC<ISpeedDial> = ({ children, ...props }) => {
    return (
        <SpeedDial
            {...props}
        >
            {children}
        </SpeedDial>
    )
}