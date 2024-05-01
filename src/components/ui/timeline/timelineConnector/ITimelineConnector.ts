import React from "react";
import type { TimelineConnectorProps } from "@material-tailwind/react/components/Timeline/TimelineConnector";

export interface ITimelineConnector extends TimelineConnectorProps {
    children?: React.ReactNode;
    className?: string;
}