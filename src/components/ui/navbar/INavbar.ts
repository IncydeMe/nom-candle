import React from "react";
import type { NavbarProps } from "@material-tailwind/react";

export interface NavbarUiProps extends NavbarProps {
    children: React.ReactNode;
    className?: string;
}