"use client"

import React from "react";
import { BadgeUiProps as BadgeProps } from "./IBadge";
import { Badge } from "@material-tailwind/react";

export const BadgeUi: React.FC<BadgeProps> = ({ children, ...props }) => {
    return (
        <Badge {...props}>
            {children}
        </Badge>
    );
}