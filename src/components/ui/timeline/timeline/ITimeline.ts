import React from "react";
import { TimelineBodyUi } from "../timelineBody/timelineBody";
import { TimelineConnectorUi } from "../timelineConnector/timelineConnector";
import { TimelineHeaderUi } from "../timelineHeader/timelineHeader";
import { TimelineItemUi } from "../timelineItem/timelineItem";
import { TimelineIconUi } from "../timelineIcon/timelineIcon";
import type { TimelineProps } from "@material-tailwind/react";

export interface ITimeline extends TimelineProps {
    children?: [React.ReactElement<typeof TimelineHeaderUi> | React.ReactElement<typeof TimelineBodyUi> | React.ReactElement<typeof TimelineConnectorUi> | React.ReactElement<typeof TimelineItemUi> | React.ReactElement<typeof TimelineIconUi>];
    className?: string;
}