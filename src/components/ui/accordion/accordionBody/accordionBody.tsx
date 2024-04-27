"use client";

import React from "react";
import { AccordionBody } from "@material-tailwind/react";
import type { AccordionBodyUiProps as AccordionBodyProps } from "../accordionBody/IAccordionBody";

const AccordionBodyUi: React.FC<AccordionBodyProps> = ({ children, ...props }) => {
    return (
        <AccordionBody 
            placeholder={""} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined} 
            {...props}
        >
            {children}
        </AccordionBody>
    );
}

export default AccordionBodyUi;