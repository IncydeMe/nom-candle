"use client"

import React from 'react'
import { Navbar } from '@material-tailwind/react'

import type { NavbarUiProps as NavbarProps } from '../navbar/INavbar'

const NavbarUi: React.FC<NavbarProps> = ({ children, ...props }) => {
    return(
        <Navbar
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Navbar>
    )
}

export default NavbarUi;