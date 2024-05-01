import React from "react";
import { PopoverProps } from "@material-tailwind/react";
import { PopoverContentUi } from "../popoverContent/popoverContent";
import { PopoverHandlerUi } from "../popoverHandler/popoverHandler";

export interface IPopover extends PopoverProps {
    children: [React.ReactElement<typeof PopoverHandlerUi>, React.ReactElement<typeof PopoverContentUi>];
    className?: string;
}
