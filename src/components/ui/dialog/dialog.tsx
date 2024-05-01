"use client"

import React from "react";
import { Dialog } from "@material-tailwind/react";
import type { IDialogProps as DialogProps } from "./IDialog";

export const DialogUi: React.FC<DialogProps> = ({ children, ...props }) => {
    return (
        <Dialog
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Dialog>
    );
}