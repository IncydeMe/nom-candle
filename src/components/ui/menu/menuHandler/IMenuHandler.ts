import React from "react";
import { MenuHandlerProps } from "@material-tailwind/react";

export interface IMenuHandlerProps extends MenuHandlerProps {
    children: React.ReactNode;
    className?: string;
}