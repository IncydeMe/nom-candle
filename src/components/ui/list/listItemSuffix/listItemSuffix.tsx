"use client"
import React from "react";
import { ListItemSuffix } from "@material-tailwind/react";
import type { IListItemSuffixProps } from "./IListItemSuffix";

export const ListItemSuffixUi: React.FC<IListItemSuffixProps> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
    return (
        <ListItemSuffix
            placeholder={""}
            onPointerEnterCapture={onPointerEnterCapture}
            onPointerLeaveCapture={onPointerLeaveCapture}
            {...props}
        >
            {children}
        </ListItemSuffix>
    );
}