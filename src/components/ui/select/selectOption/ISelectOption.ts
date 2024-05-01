import React from "react";
import type { SelectOptionProps } from "@material-tailwind/react";

export interface ISelectOption extends SelectOptionProps {
    children: React.ReactNode;
    className?: string;
}