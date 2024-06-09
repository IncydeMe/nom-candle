"use client";
import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
import { useProduct, deleteProduct } from '@/hooks/useProduct';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Product() {
    const { products, loading, error } = useProduct();

    const handleDelete = (id: string) => {
        deleteProduct(id);
    }

    //Pagination
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [productsPerPage] = React.useState<number>(5);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => (
        <Button key={number} onClick={() => paginate(number)} variant={'default'} className='bg-blue-400 rounded-[8px] hover:bg-blue-600 hover:text-white'>
            {number}
        </Button>
    ));

    return ( 
        <section className='p-4'>
            <h1 className='text-2xl font-semibold my-4'>Danh sách sản phẩm</h1>
            <Table className='w-screen overflow-hidden'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Mã</TableHead>
                        <TableHead>Tên</TableHead>
                        <TableHead>Giá</TableHead>
                        <TableHead>Hình ảnh</TableHead>
                        <TableHead colSpan={3}>Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='text-[16px]'>
                    {products.map((product) => (
                        <TableRow key={product.productId}>
                            <TableCell className='w-[240px]'>{product.productId.toLocaleUpperCase().slice(3,8)}</TableCell>
                            <TableCell className='w-[240px]'>{product.productName}</TableCell>
                            <TableCell className='w-fit'>{product.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND' })}</TableCell>
                            <TableCell className='w-[240px]'>
                                <img src={product.productImgUrl} alt="Product Image" className="w-[160px] object-cover"/>
                            </TableCell>
                            <TableCell className='w-fit flex gap-4'>
                                <Link href={'/staff/product/'+product.productId}>
                                    <Button variant={'default'} className='bg-blue-400 rounded-[8px] hover:bg-blue-600 hover:text-white'>
                                        Xem
                                    </Button>
                                </Link>
                                <Link href={'/staff/product/edit-product/'+product.productId}>
                                    <Button variant={'default'} className='bg-green-400 rounded-[8px] hover:bg-green-600 hover:text-white'>
                                        Sửa
                                    </Button>
                                </Link>
                                <Button onClick={() => handleDelete(product.productId)} variant={'default'} className='bg-red-400 rounded-[8px] hover:bg-red-600 hover:text-white'>
                                    Xóa
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
     );
}

export default Product;