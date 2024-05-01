import React from "react";
import { MenuItemProps } from "@material-tailwind/react";

export interface IMenuItemProps extends MenuItemProps {
    children: React.ReactNode;
    className?: string;
    onCopy?: () => void;
    onCut?: () => void;
    onPaste?: () => void;
}