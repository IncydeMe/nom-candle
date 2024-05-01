"use client"
import React from "react"
import { Switch } from "@material-tailwind/react"
import type { ISwitch } from "./ISwitch"

export const SwitchUi: React.FC<ISwitch> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <Switch
            crossOrigin={""}
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </Switch>
    )
}