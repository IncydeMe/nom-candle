import React from "react";
import { ListProps } from "@material-tailwind/react";
import { ListItemUi } from "../listItem/listItem";
import { ListItemPrefixUi } from "../listItemPrefix/listItemPrefix";

export interface IListProps extends ListProps {
    children: [React.ReactElement<typeof ListItemUi> | React.ReactElement<typeof ListItemPrefixUi>];
    className?: string;
}