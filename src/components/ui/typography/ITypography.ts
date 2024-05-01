import React from "react";
import type { TypographyProps } from "@material-tailwind/react";

export interface ITypography extends TypographyProps {
    children: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLParagraphElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLParagraphElement>;
}