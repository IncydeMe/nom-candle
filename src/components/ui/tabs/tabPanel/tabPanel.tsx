"use client"
import React from "react"
import { TabPanel } from "@material-tailwind/react"
import type { ITabPanel } from "./ITabPanel"

export const TabPanelUi: React.FC<ITabPanel> = ({ children, ...props }) => {
    return (
        <TabPanel
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </TabPanel>
    )
}