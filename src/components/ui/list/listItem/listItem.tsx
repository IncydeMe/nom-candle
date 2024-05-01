"use client"
import React from "react";
import { ListItem } from "@material-tailwind/react";
import type { IListItemProps as ListItemProps } from "./IListItem";

export const ListItemUi: React.FC<ListItemProps> = ({ children, ...props }) => {
    return (
        <ListItem
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </ListItem>
    );
}