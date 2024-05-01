import React from "react";
import type { TextareaProps } from "@material-tailwind/react";

export interface ITextarea extends TextareaProps {
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
    ref: React.RefObject<HTMLTextAreaElement>;
}