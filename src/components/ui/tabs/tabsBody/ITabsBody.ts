import React from "react";
import type { TabsBodyProps } from "@material-tailwind/react";

export interface ITabsBody extends TabsBodyProps {
    children: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}