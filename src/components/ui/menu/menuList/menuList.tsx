"use client"
import React from "react";
import { MenuList } from "@material-tailwind/react";
import type { IMenuListProps as MenuListProps } from "./IMenuList";

export const MenuListUi: React.FC<MenuListProps> = ({ children, ...props }) => {
    return (
        <MenuList
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </MenuList>
    );
}