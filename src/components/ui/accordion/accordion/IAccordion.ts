import { AccordionProps } from "@material-tailwind/react";
import AccordionHeaderUi from "../accordionHeader/accordionHeader";
import  AccordionBodyUi from "../accordionBody/accordionBody";

export interface AccordionUiProps extends AccordionProps {
    children: [React.ReactElement<typeof AccordionHeaderUi>, React.ReactElement<typeof AccordionBodyUi>];
    className?: string;
}
