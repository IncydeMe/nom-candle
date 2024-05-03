import { CardProps } from "@material-tailwind/react";
import { CardHeaderUi } from "../cardHeader/cardHeader";
import { CardBodyUi } from "../cardBody/cardBody";
import { CardFooterUi } from "../cardFooter/cardFooter";
import React from "react";

export interface CardUiProps extends CardProps {
    children: [React.ReactElement<typeof CardHeaderUi>, React.ReactElement<typeof CardBodyUi>, React.ReactElement<typeof CardFooterUi>] | React.ReactNode;
    className?: string;
}
    