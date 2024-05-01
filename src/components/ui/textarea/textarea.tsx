"use client"
import React, { RefObject, useRef } from "react";
import { Textarea } from "@material-tailwind/react";
import type { ITextarea } from "./ITextarea";

export const TextareaUi: React.FC<ITextarea> = ({ onPointerEnterCapture, onPointerLeaveCapture, ref: _,...props }) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Textarea
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            ref={ref}
            {...props}
        />
    );
};