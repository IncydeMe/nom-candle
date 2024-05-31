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

import { ChevronRight } from "lucide-react"

const UserBreadcrumb = () => {
    const pathname = usePathname().split("/");
    
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <ChevronRight />
                </BreadcrumbSeparator>
                {pathname.map((path, index) => {
                    while (path !== "") {
                        return (
                            <>
                                <BreadcrumbItem key={index}>
                                    <BreadcrumbLink href={`/${path}`}>
                                        {path.charAt(0).toUpperCase() + path.slice(1)}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {
                                    index < pathname.length - 1 && (
                                        <BreadcrumbSeparator>
                                            <ChevronRight />
                                        </BreadcrumbSeparator>
                                    )
                                }
                            </>
                        )
                    }
                    return null;
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default UserBreadcrumb;