import React from "react";
import { CardBodyProps } from "@material-tailwind/react";

export interface CardBodyUiProps extends CardBodyProps {
    children: React.ReactNode;
    className?: string;
}