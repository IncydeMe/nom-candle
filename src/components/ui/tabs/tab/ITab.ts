import React from "react";
import type { TabProps } from "@material-tailwind/react";

export interface ITab extends TabProps {
    children: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}