import React from "react";
import { MenuProps } from "@material-tailwind/react";
import { MenuItemUi } from "../menuItem/menuItem";
import { MenuHandlerUi } from "../menuHandler/menuHandler";
import { MenuListUi } from "../menuList/menuList";

export interface IMenuProps extends MenuProps {
    children: [React.ReactElement<typeof MenuItemUi>, React.ReactElement<typeof MenuHandlerUi>, React.ReactElement<typeof MenuListUi>];
    className?: string;
}