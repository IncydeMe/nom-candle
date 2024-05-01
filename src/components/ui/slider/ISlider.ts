import React from "react";
import type { SliderProps } from "@material-tailwind/react";

export interface ISlider extends SliderProps {
    children?: React.ReactNode;
    className?: string;
}