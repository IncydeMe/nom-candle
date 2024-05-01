"use client"

import React from 'react';
import { Collapse } from '@material-tailwind/react';
import type { ICollapseProps as CollapseProps } from './ICollapse';

export const CollapseUi: React.FC<CollapseProps> = ({ children, ...props }) => {
    return (
        <Collapse
            {...props}
        >
            {children}
        </Collapse>
    );
}