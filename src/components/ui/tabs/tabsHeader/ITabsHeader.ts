import React from "react";
import { TabsHeaderProps } from "@material-tailwind/react";

export interface ITabsHeader extends TabsHeaderProps {
    children: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}