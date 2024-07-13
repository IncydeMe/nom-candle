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
import { getProductById } from "@/utils/product";
import { useState } from "react";

const UserBreadcrumb = () => {
  const pathname = usePathname().split("/");
  const productId = pathname.slice(-1);
  const [productName, setProductName] = useState<string>("");
  const [breadcrumbProductId, setBreadcrumbProductId] = useState<string>("");
  const fetchProduct = async () => {
    try {
      const product = await getProductById(productId[0]);
      setBreadcrumbProductId(product.productId);
      setProductName(product.productName);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  fetchProduct();

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
          const decodedBreadCrumbText = decodeURIComponent(path);
          const productDetailName =
            breadcrumbProductId !== decodedBreadCrumbText
              ? decodedBreadCrumbText.charAt(0).toUpperCase() +
                decodedBreadCrumbText.slice(1)
              : productName;
          while (path !== "") {
            return (
              <div className="flex items-center" key={index}>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink
                    href={`/${path}`}
                    className="hover:underline hover:font-semibold"
                  >
                    {productDetailName}
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
