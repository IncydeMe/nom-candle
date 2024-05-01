"use client"
import React from "react";
import { Drawer } from "@material-tailwind/react";
import type { IDrawerProps as DrawerProps } from "./IDrawer";

export const DrawerUi: React.FC<DrawerProps> = ({ children, ...props }) => {
    return (
        <Drawer
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Drawer>
    );
}