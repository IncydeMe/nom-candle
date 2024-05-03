"use client"
import React from "react";
import { ListItem } from "@material-tailwind/react";
import type { IListItemProps } from "./IListItem";

export const ListItemUi: React.FC<IListItemProps> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <ListItem
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </ListItem>
    );
}