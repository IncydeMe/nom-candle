"use client"
import React from "react";
import { Carousel } from "@material-tailwind/react";
import type { ICarouselProps as CarouselProps } from "../carousel/ICarousel";

const CarouselUi: React.FC<CarouselProps> = ({ children, ...props }) => {
    return (
        <Carousel
            placeholder={""}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...props}
        >
            {children}
        </Carousel>
    );
}