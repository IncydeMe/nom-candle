import React from "react";
import { ListItemProps } from "@material-tailwind/react";

export interface IListItemProps extends ListItemProps {
    children: React.ReactNode | any;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}