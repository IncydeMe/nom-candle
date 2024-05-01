"use client"
import React from "react"
import { TabsBody } from "@material-tailwind/react"
import type { ITabsBody } from "./ITabsBody"

export const TabsBodyUi: React.FC<ITabsBody> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <TabsBody
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </TabsBody>
    )
}