"use client"
import React from "react"
import type { ITable } from "./ITable"

export const TableUi: React.FC<ITable> = ({ children, ...props }) => {
    return (
        <table {...props}>
            {children}
        </table>
    )
}