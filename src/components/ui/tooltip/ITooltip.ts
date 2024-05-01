import React from "react";
import type { TooltipProps } from "@material-tailwind/react";

export interface ITooltip extends TooltipProps {
    children: React.ReactNode;
    className?: string;
}