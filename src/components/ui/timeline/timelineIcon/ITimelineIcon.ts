import React from "react";
import { TimelineIconProps } from "@material-tailwind/react/components/Timeline/TimelineIcon";

export interface ITimelineIcon extends TimelineIconProps {
    children?: React.ReactNode;
    className?: string;
}