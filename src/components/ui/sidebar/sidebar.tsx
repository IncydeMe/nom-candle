"use client"
import React from "react"
import type { ISidebar } from "./ISidebar"

export const SidebarUi: React.FC<ISidebar> = ({ children, ...props }) => {
    return (
        <section {...props}>
            {children}
        </section>
    )
}