import React from "react";
import { ListItemSuffixProps } from "@material-tailwind/react";

export interface IListItemSuffixProps extends ListItemSuffixProps {
    children: React.ReactNode | any;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}