import React from "react";
import type { RadioProps } from "@material-tailwind/react";

export interface IRadioButton extends RadioProps {
    children: React.ReactNode;
    className?: string;
}