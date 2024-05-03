"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import type { IInputProps as InputProps } from "./IInput";

export const InputUi: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <Input
      crossOrigin={""}
      placeholder={""}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...props}
    />
  );
};
