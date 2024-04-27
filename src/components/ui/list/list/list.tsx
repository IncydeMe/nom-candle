"use client"

import React from "react";
import { List } from "@material-tailwind/react";
import type { IListProps as ListProps } from "./IList";

export const ListUi: React.FC<ListProps> = ({ children, ...props }) => {
    return (
        <List
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </List>
    );
}