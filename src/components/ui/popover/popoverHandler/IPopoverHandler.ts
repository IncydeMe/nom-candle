import React from "react";
import type { PopoverHandlerProps } from "@material-tailwind/react";

export interface IPopoverHandler extends PopoverHandlerProps {
    children: React.ReactNode;
    className?: string;
}