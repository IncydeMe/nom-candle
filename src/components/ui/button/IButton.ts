import { ButtonProps } from "@material-tailwind/react";
import React from "react";

export interface ButtonUiProps extends ButtonProps {
    children: React.ReactNode;
    className?: string;
}