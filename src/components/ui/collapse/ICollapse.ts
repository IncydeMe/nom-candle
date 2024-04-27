import React from "react";
import { CollapseProps } from "@material-tailwind/react";

export interface ICollapseProps extends CollapseProps {
    children: React.ReactNode;
    className?: string;
}