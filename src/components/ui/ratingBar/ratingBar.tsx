"use client"
import React from "react";
import { Rating } from "@material-tailwind/react";
import type { IRatingBar } from "./IRatingBar";

export const RatingBarUi: React.FC<IRatingBar> = ({ children, ...props }) => {
    return (
        <Rating
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Rating>
    )
}