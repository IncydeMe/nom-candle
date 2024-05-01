"use client"

import React from "react";
import { MenuHandler } from "@material-tailwind/react";
import type { IMenuHandlerProps as MenuHandlerProps } from "./IMenuHandler";

export const MenuHandlerUi: React.FC<MenuHandlerProps> = ({ children, ...props }) => {
    return (
        <MenuHandler
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </MenuHandler>
    );
}