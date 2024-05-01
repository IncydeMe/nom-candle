import React from "react";
import type { StepProps } from "@material-tailwind/react/components/Stepper/Step";

export interface IStep extends StepProps {
    children?: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
}