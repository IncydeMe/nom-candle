"use client"
import React from "react";
import { ListItemPrefix } from "@material-tailwind/react";
import type { IListItemPrefixProps as ListItemPrefixProps } from "./IListItemPrefix";

export const ListItemPrefixUi: React.FC<ListItemPrefixProps> = ({ children, ...props }) => {
    return (
        <ListItemPrefix
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </ListItemPrefix>
    );
}