"use client"
import React from "react"
import { Option } from "@material-tailwind/react"
import type { ISelectOption } from "./ISelectOption"

export const SelectOptionUi: React.FC<ISelectOption> = ({ children, ...props }) => {
    return (
        <Option
            {...props}
        >
            {children}
        </Option>
    )
}