import React from "react";
import type { SpeedDialContentProps } from "@material-tailwind/react/components/SpeedDial/SpeedDialContent";

export interface ISpeedDialContent extends SpeedDialContentProps {
    children?: React.ReactNode;
    className?: string;
}