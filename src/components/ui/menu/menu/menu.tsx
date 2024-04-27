"use client"
import React from "react";
import { Menu } from "@material-tailwind/react";
import type { IMenuProps as MenuProps } from "./IMenu";

export const MenuUi: React.FC<MenuProps> = ({ children, ...props }) => {
    return (
        <Menu
            {...props}
        >
            {children}
        </Menu>
    );
}