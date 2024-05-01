"use client";

import { Accordion } from "@material-tailwind/react";
import type { AccordionUiProps as AccordionProps } from "../accordion/IAccordion";
import React from "react";

const AccordionUi: React.FC<AccordionProps> = ({ children, ...props }) => {
    return (
        <Accordion 
            placeholder={""} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined} 
            {...props}
        >
            {children}
        </Accordion>
    );
}

export default AccordionUi;
