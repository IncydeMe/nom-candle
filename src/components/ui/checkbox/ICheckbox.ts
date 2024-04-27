import React from "react";
import { CheckboxProps } from "@material-tailwind/react";

export interface ICheckboxProps extends CheckboxProps {
    children: React.ReactNode;
    className?: string;
}