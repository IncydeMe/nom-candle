import React from "react";
import { ListItemPrefixProps } from "@material-tailwind/react";

export interface IListItemPrefixProps extends ListItemPrefixProps {
    children: React.ReactNode;
    className?: string;
}