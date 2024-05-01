import React from "react";
import type { SelectProps } from "@material-tailwind/react";
import { SelectOptionUi } from "../selectOption/selectOption";

export interface ISelect extends SelectProps {
    children: React.ReactElement<typeof SelectOptionUi> | React.ReactElement<typeof SelectOptionUi>[];
    className?: string;
}