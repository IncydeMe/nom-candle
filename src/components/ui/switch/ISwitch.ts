import React from "react";
import type { SwitchProps } from "@material-tailwind/react";

export interface ISwitch extends SwitchProps {
    children?: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
}