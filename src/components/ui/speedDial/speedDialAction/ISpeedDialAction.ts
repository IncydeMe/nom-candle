import React from "react";
import type { SpeedDialActionProps } from "@material-tailwind/react/components/SpeedDial/SpeedDialAction";

export interface ISpeedDialAction extends SpeedDialActionProps {
    children?: React.ReactNode;
    className?: string;
}