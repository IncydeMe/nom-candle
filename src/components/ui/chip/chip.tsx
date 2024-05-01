"use client"
import React from "react";
import { Chip } from "@material-tailwind/react";
import type { IChipProps as ChipProps } from "./IChip";

export const ChipUi: React.FC<ChipProps> = ({ ...props }) => {
    return (
        <Chip {...props}/>
    );
}