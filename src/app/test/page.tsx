"use client";

import React from "react";

import { CheckboxUi } from "@/components/ui/checkbox/checkbox";
import { ChipUi } from "@/components/ui/chip/chip";
import { CollapseUi } from "@/components/ui/collapse/collapse";
import { ButtonUi } from "@/components/ui/button/button";
import { CardUi } from "@/components/ui/card/card/card";
import { CardBodyUi } from "@/components/ui/card/cardBody/cardBody";
import { DialogUi } from "@/components/ui/dialog/dialog";
import { DrawerUi } from "@/components/ui/drawer/drawer";
import { IconButtonUi } from "@/components/ui/iconButton/iconButton";
import { InputUi } from "@/components/ui/input/input";

const page: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="mt-[50px]">
      <InputUi label="Test" />
    </div>
  );
};

export default page;
