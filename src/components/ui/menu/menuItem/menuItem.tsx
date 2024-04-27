"use client"
import React from "react";
import { MenuItem } from "@material-tailwind/react";
import type { IMenuItemProps as MenuItemProps } from "./IMenuItem";

export const MenuItemUi: React.FC<MenuItemProps> = ({ children, ...props }) => {
    return (
        <MenuItem
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </MenuItem>
    );
}