import React from "react";
import { MenuListProps } from "@material-tailwind/react";

export interface IMenuListProps extends MenuListProps {
    children: React.ReactNode;
    className?: string;
}