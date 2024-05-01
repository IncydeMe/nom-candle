import { CardHeaderProps } from "@material-tailwind/react";
import React from "react";

export interface CardHeaderUiProps extends CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}