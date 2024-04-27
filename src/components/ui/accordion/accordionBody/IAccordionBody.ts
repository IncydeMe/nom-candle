import React from "react";
import { AccordionBodyProps } from "@material-tailwind/react";

export interface AccordionBodyUiProps extends AccordionBodyProps {
    children: React.ReactNode;
    className?: string;
}