"use client"
import React from "react"
import { Tab } from "@material-tailwind/react"
import type { ITab } from "./ITab"

export const TabUi: React.FC<ITab> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <Tab
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </Tab>
    )
}