"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import type { ICarouselProps as CarouselProps } from "./ICarousel";

export const CarouselUi: React.FC<CarouselProps> = ({ children, onPointerEnterCapture, onPointerLeaveCapture, ...props }) => {
  return (
    <Carousel
      placeholder={""}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
      {...props}
    >
      {children}
    </Carousel>
  );
};
