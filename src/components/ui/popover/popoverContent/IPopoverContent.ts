import React from "react";
import { PopoverContentProps } from "@material-tailwind/react";

export interface IPopoverContent extends PopoverContentProps {
    children: React.ReactNode;
    className?: string;
}