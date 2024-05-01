"use client"
import React from "react"
import { Step } from "@material-tailwind/react"
import type { IStep } from "./IStep"

export const StepUi: React.FC<IStep> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <Step
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </Step>
    )
}