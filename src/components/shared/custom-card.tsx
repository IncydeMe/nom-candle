"use client";

import React from 'react';

import Image, { StaticImageData } from 'next/image';

import { Skeleton } from '@/components/ui/skeleton';

import Logo from '../../../public/images/sample_logo.png';
import Link from "next/link";

interface BlogCardProps {
    title: string;
    image: StaticImageData;
}

export const SkeletonBlogCard: React.FC = () => {
    return(
        <div className="relative py-2">
            <div>
                <Skeleton className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                <Skeleton className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
            </div>
            <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                <Skeleton className="h-[12px] w-2/3 uppercase font-semibold text-[#C6613D]" />
                <Skeleton className="pt-4">
                    <span className="flex items-center gap-x-2">
                        <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                        <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                    </span>
                </Skeleton>
            </span>
        </div>
    )
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, image }) => {
    return (
        <div className="relative py-2">
            <div>
                <Image src={image} alt={title} className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
            </div>
            <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                    {title}
                </p>
                <Link href={'../blog'} className="pt-4">
                    <span className="flex items-center gap-x-2">
                        <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                        <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                    </span>
                </Link>
            </span>
        </div>
    );

}

interface ProductCardProps {
    title: string;
    description: string;
    image: StaticImageData;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
    return (
        <div className="relative py-2">
            <div>
                <Image src={image} alt={title} className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
            </div>
            <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                    {title}
                </p>
                <Link href={'../product'} className="pt-4">
                    <span className="flex items-center gap-x-2">
                        <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                        <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                    </span>
                </Link>
            </span>
        </div>
    );

}