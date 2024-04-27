import React from "react";
import { DrawerProps } from "@material-tailwind/react";

export interface IDrawerProps extends DrawerProps {
    children: React.ReactNode;
    className?: string;
}