"use client"
import React from "react";

export const Form: React.FC = ( children ,{...props}) => {
    return(
        <form {...props} >
            {children}
        </form>
    )
}