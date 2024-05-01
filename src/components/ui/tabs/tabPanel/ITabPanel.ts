import React from "react";
import type { TabPanelProps } from "@material-tailwind/react";

export interface ITabPanel extends TabPanelProps {
    children: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}