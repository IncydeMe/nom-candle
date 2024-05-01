import React from "react";
import type { ProgressProps } from "@material-tailwind/react";

export interface IProgressBar extends ProgressProps {
    children: React.ReactNode;
    className?: string;
}