import React from "react";
import { AccordionHeaderProps } from "@material-tailwind/react";

export interface AccordionHeaderUiProps extends AccordionHeaderProps {
    children: React.ReactNode;
    className?: string;
}