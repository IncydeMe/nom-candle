"use client"

import React from "react"
import type { ISkeleton } from "./ISkeleton"

export const SkeletonUi: React.FC<ISkeleton> = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}