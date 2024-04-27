"use client";

import { Alert } from "@material-tailwind/react";
import type { AlertUiProps as AlertProps } from "../alert/IAlert";
import React from "react";

export const AlertUi: React.FC<AlertProps> = ({ children, ...props }) => {
    return (
        <Alert {...props}>
            {children}
        </Alert>
    );
}