import React from "react";
import { ListProps } from "@material-tailwind/react";

export interface IListProps extends ListProps {
    children: React.ReactNode;
    className?: string;
}