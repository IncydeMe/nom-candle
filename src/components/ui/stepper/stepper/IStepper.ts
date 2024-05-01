import React from "react";
import { StepUi } from "../step/step";
import type { StepperProps } from "@material-tailwind/react";

export interface IStepper extends StepperProps {
    children: React.ReactElement<typeof StepUi>[] | React.ReactElement<typeof StepUi>;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
}