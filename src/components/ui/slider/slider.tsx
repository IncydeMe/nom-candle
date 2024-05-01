"use client"
import React from "react"
import { Slider } from "@material-tailwind/react"
import type { ISlider } from "./ISlider"

export const SliderUi: React.FC<ISlider> = ({ children, ...props }) => {
    return (
        <Slider
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Slider>
    )
}