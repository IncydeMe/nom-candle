import React from "react";
import type { TimelineItemProps } from "@material-tailwind/react/components/Timeline/TimelineItem";

export interface ITimelineItem extends TimelineItemProps {
    children?: React.ReactNode;
    className?: string;
}