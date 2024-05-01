import React from "react";
import { IconButtonProps } from "@material-tailwind/react";

export interface IIconButtonProps extends IconButtonProps {
    children: React.ReactNode;
    className?: string;
}