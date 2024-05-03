import React from "react";
import { CarouselProps } from "@material-tailwind/react";

export interface ICarouselProps extends CarouselProps {
    children: React.ReactNode;
    className?: string;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement>;
}