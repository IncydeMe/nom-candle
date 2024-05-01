"use client"
import React from "react"
import type { ITableContent } from "./ITableContent"

export const TableContentUi: React.FC<ITableContent> = ({ tableData, ...props }) => {
    return (
        <tbody>
            {tableData.map((row, index) => (
                <tr key={index} {...props}>
                    {row.map((cell, index) => (
                        <td key={index}>{cell}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}