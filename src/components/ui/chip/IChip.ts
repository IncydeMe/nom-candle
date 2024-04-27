import React from "react";
import { ChipProps } from "@material-tailwind/react";

export interface IChipProps extends ChipProps {
    children: React.ReactNode;
    className?: string;
}