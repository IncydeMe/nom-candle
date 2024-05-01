"use client"
import React from "react"
import type { ITableHead } from "./ITableHead"

export const TableHeadUi: React.FC<ITableHead> = ({ tableHead, ...props }) => {
    return (
        <thead {...props}>
            <tr>
                {tableHead.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    )
}