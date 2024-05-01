import React from "react";
import type { RatingProps } from "@material-tailwind/react";

export interface IRatingBar extends RatingProps {
    children?: React.ReactNode;
    className?: string;
}