import React from "react";
import { InputProps } from "@material-tailwind/react";

export interface IInputProps extends InputProps {
    children: React.ReactNode;
    className?: string;
}