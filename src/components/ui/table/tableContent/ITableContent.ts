import React from "react";

export interface ITableContent {
    tableData: string[][];
    children: React.ReactNode;
    className?: string;
}