"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

import { usePathname } from "next/navigation";

import { Slash } from "lucide-react"

const UserBreadcrumb = () => {
    const pathname = usePathname().split("/");
    
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                {pathname.map((path, index) => {
                    if (path === "") return null;
                    return (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={`/${path}`}>
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default UserBreadcrumb;