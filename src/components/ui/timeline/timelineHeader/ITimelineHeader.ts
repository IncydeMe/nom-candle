import React from "react";
import type { TimelineHeaderProps } from "@material-tailwind/react/components/Timeline/TimelineHeader";

export interface ITimelineHeader extends TimelineHeaderProps {
    children?: React.ReactNode;
    className?: string;
}