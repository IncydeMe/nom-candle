import React from "react";
import { SpeedDialHandlerProps } from "@material-tailwind/react/components/SpeedDial/SpeedDialHandler";

export interface ISpeedDialHandler extends SpeedDialHandlerProps {
    children?: React.ReactNode;
    className?: string;
}