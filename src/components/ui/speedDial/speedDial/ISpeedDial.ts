import React from "react";
import type { SpeedDialProps } from "@material-tailwind/react";
import { SpeedDialActionUi } from "../speedDialAction/speedDialAction";
import { SpeedDialContentUi } from "../speedDialContent/speedDialContent";
import { SpeedDialHandlerUi } from "../speedDialHandler/speedHandler";

export interface ISpeedDial extends SpeedDialProps {
    children?: [React.ReactElement<typeof SpeedDialHandlerUi>, React.ReactElement<typeof SpeedDialContentUi>, React.ReactElement<typeof SpeedDialActionUi>];
    className?: string;
}