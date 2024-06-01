import React from 'react'

import { Input } from './ui/input';

import { Search } from 'lucide-react';

import Link from 'next/link';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button';

const SearchInput = () => {
    return (
        <>
            {/* Input */}

            <Drawer >
                <DrawerTrigger>
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm tại đây..."
                            className="pl-10 rounded-[8px]"
                        />
                        <Search
                            className="absolute top-0 left-0 w-6 h-6 m-2"
                        />
                    </div>
                </DrawerTrigger>
                <DrawerContent className='bg-white'>
                    <DrawerHeader>
                        <DrawerTitle>
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm tại đây..."
                                    className="pl-10 rounded-[8px]"
                                />
                                <Search
                                    className="absolute top-0 left-0 w-6 h-6 m-2"
                                />
                            </div>
                        </DrawerTitle>
                        <DrawerDescription className='text-black flex flex-col gap-2'>
                            <h3 className='text-[12px] my-4'>Đề xuất các danh mục</h3>
                            <section className='grid grid-cols-4'>
                                <section className='flex flex-col gap-2'>
                                    <Link href={'/products/nen-thom'} className='text-[16px] uppercase hover:underline hover:underline-offset-2 py-4'>Nến thơm</Link>

                                    <ul className='flex flex-col gap-2'>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                </section>
                                <section className='flex flex-col gap-2'>
                                    <Link href={'/products/sap-thom'} className='text-[16px] uppercase hover:underline hover:underline-offset-2 py-4'>Sáp thơm</Link>

                                    <ul className='flex flex-col gap-2'>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                </section>
                                <section className='flex flex-col gap-2'>
                                    <Link href={'/products/room-sprays'} className='text-[16px] uppercase hover:underline hover:underline-offset-2 py-4'>Room Sprays</Link>

                                    <ul className='flex flex-col gap-2'>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                </section>
                                <section className='flex flex-col gap-2'>
                                    <Link href={'/products/khuech-tan-tinh-dau'} className='text-[16px] uppercase hover:underline hover:underline-offset-2 py-4'>Khuếch tán tinh dầu</Link>

                                    <ul className='flex flex-col gap-2'>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                    </ul>
                                </section>
                            </section>

                        </DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SearchInput
