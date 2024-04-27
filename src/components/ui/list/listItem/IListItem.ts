import React from "react";
import { ListItemProps } from "@material-tailwind/react";

export interface IListItemProps extends ListItemProps {
    children: React.ReactNode;
    className?: string;
}