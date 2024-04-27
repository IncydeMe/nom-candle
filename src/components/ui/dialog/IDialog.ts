import React from "react";
import { DialogProps } from "@material-tailwind/react";

export interface IDialogProps extends DialogProps {
    children: React.ReactNode;
    className?: string;
}