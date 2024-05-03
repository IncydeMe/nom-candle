"use client"
import React from "react"
import type { IGalleryProps } from "./IGallery"

export const GalleryUi: React.FC<IGalleryProps> = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}