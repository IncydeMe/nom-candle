import React from "react";
import { ListProps } from "@material-tailwind/react";
import { ListItemUi } from "../listItem/listItem";
import { ListItemPrefixUi } from "../listItemPrefix/listItemPrefix";
import { ListItemSuffixUi } from "../listItemSuffix/listItemSuffix";

export interface IListProps extends ListProps {
    children: Array<React.ReactElement<typeof ListItemUi> | React.ReactElement<typeof ListItemPrefixUi> | React.ReactElement<typeof ListItemSuffixUi>>;
    className?: string;
}