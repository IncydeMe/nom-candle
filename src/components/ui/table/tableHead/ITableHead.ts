import React from "react";

export interface ITableHead {
    tableHead: string[];
    children: React.ReactNode;
    className?: string;
}