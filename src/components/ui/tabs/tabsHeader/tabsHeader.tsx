"use client"
import React from "react"
import { TabsHeader } from "@material-tailwind/react"
import type { ITabsHeader } from "./ITabsHeader"

export const TabsHeaderUi: React.FC<ITabsHeader> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <TabsHeader
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </TabsHeader>
    )
}