"use client";

import React from "react";
import { AccordionHeader } from "@material-tailwind/react";
import type { AccordionHeaderUiProps as AccordionHeaderProps } from "./IAccordionHeader";

const AccordionHeaderUi: React.FC<AccordionHeaderProps> = ({ children, ...props }) => {
    return (
        <AccordionHeader 
            placeholder={""} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined} 
            {...props}
        >
            {children}
        </AccordionHeader>
    );
}

export default AccordionHeaderUi;