import { ButtonGroupProps } from "@material-tailwind/react";
import React from "react";

export interface ButtonGroupUiProps extends ButtonGroupProps {
    children: React.ReactNode;
    className?: string;
}