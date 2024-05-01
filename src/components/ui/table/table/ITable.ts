import React from "react";
import { TableHeadUi } from "../tableHead/tableHead";
import { TableContentUi } from "../tableContent/tableContent";

export interface ITable {
    children: [React.ReactElement<typeof TableHeadUi>, React.ReactElement<typeof TableContentUi>];
    className?: string;
}