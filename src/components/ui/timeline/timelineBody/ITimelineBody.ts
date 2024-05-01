import React from "react";
import { TimelineBodyProps } from "@material-tailwind/react/components/Timeline/TimelineBody";

export interface ITimelineBody extends TimelineBodyProps {
    children?: React.ReactNode;
    className?: string;
}