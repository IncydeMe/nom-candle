import React from "react";
import { CardFooterProps } from "@material-tailwind/react";

export interface CardFooterUiProps extends CardFooterProps {
    children: React.ReactNode;
    className?: string;
}