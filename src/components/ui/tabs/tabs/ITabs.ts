import React from "react";
import { TabUi } from "../tab/tab";
import { TabPanelUi } from "../tabPanel/tabPanel";
import { TabsBodyUi } from "../tabsBody/tabsBody";
import { TabsHeaderUi } from "../tabsHeader/tabsHeader";
import type { TabsProps } from "@material-tailwind/react";

export interface ITabs extends TabsProps {
    children: [React.ReactElement<typeof TabsHeaderUi>, React.ReactElement<typeof TabsBodyUi>, React.ReactElement<typeof TabUi>, React.ReactElement<typeof TabPanelUi>];
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}