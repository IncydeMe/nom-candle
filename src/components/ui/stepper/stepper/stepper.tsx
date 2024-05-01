"use client"
import React from "react"
import { Stepper } from "@material-tailwind/react"
import type { IStepper } from "./IStepper"

export const StepperUi: React.FC<IStepper> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <Stepper
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </Stepper>
    )
}