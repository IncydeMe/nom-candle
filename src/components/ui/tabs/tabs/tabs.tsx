"use client"
import React from "react"
import { Tabs } from "@material-tailwind/react"
import type { ITabs } from "./ITabs"

export const TabsUi: React.FC<ITabs> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <Tabs
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </Tabs>
    )
}