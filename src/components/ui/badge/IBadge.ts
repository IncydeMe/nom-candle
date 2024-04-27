import { BadgeProps } from "@material-tailwind/react";
import React from "react";

export interface BadgeUiProps extends BadgeProps {
    children: React.ReactNode;
    className?: string;
}
