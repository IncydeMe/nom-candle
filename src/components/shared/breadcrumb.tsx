"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

import { ChevronRight } from "lucide-react";

const UserBreadcrumb = () => {
  const pathname = usePathname().split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="hover:underline hover:font-semibold"
          >
            Trang chủ
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        {pathname.map((path, index) => {
          while (path !== "") {
            return (
              <div key={index}>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink
                    href={`/${path}`}
                    className="hover:underline hover:font-semibold"
                  >
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < pathname.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight />
                  </BreadcrumbSeparator>
                )}
              </div>
            );
          }
          return null;
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default UserBreadcrumb;
