import { AccordionProps, AccordionHeaderProps, AccordionBodyProps } from "@material-tailwind/react";

export interface AccordionUiProps extends AccordionProps {
    children: [React.ReactElement<AccordionHeaderProps>, React.ReactElement<AccordionBodyProps>];
    
}

export interface AccordionHeaderUiProps extends AccordionHeaderProps {
    children: React.ReactNode;
}

export interface AccordionBodyUiProps extends AccordionBodyProps {
    children: React.ReactNode;
}