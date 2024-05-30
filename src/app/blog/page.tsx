"use client";
import React from 'react';

import Image from 'next/image';

import BlogCover from '../../../public/images/Blog_CoverImage.png';

import Blog_1 from '../../../public/images/Blog_Image_1.png';
import Blog_2 from '../../../public/images/Blog_Image_2.png';
import Blog_3 from '../../../public/images/Blog_Image_3.png';
import Blog_4 from '../../../public/images/Blog_Image_4.png';
import Blog_5 from '../../../public/images/Blog_Image_5.png';
import Blog_6 from '../../../public/images/Blog_Image_6.png';

import Logo from '../../../public/images/sample_logo.png';

import UserBreadcrumb from '@/components/shared/breadcrumb';
import Link from 'next/link';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

function Blog() {
    return (
        <main className=''>
            <Image src={BlogCover} alt="Blog Cover Image" className="w-[100%] h-[360px] object-cover rounded-[12px]" />

            <section className='flex justify-between items-end relative mt-12'>
                <hr className='w-full border-t-[3px] border-[#C6613D]' />
                <div className='absolute left-0 py-2 text-[#C6613D]'><UserBreadcrumb /></div>
                <h4 className='text-[24px] font-semibold uppercase text-[#C6613D] absolute right-0'>Nơm Blogs</h4>
            </section>
            <section className='grid grid-cols-3 my-4 justify-items-center'>
                <div className="relative py-2">
                    <div>
                        <Image src={Blog_1} alt="Blog_1" className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                        <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
                    </div>
                    <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                            Nến thơm là gì, cách nhận biết nến thơm an toàn.
                        </p>
                        <Link href={'#'} className="pt-4">
                            <span className="flex items-center gap-x-2">
                                <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                                <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                            </span>
                        </Link>
                    </span>
                </div>  
                <div className="relative py-2">
                    <div>
                        <Image src={Blog_2} alt="Blog_2" className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                        <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
                    </div>
                    <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                            Bí quyết cho một giấc ngủ sâu và ngon.
                        </p>
                        <Link href={'#'} className="pt-4">
                            <span className="flex items-center gap-x-2">
                                <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                                <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                            </span>
                        </Link>
                    </span>
                </div>
                <div className="relative py-2">
                    <div>
                        <Image src={Blog_3} alt="Blog_3" className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                        <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
                    </div>
                    <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                            Tác dụng của nến thơm, các lưu ý khi sử dụng.
                        </p>
                        <Link href={'#'} className="pt-4">
                            <span className="flex items-center gap-x-2">
                                <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                                <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                            </span>
                        </Link>
                    </span>
                </div>
                <div className="relative py-2">
                    <div>
                        <Image src={Blog_4} alt="Blog_4" className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                        <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
                    </div>
                    <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                            Những thời điểm thích hợp để thắp nến thơm
                        </p>
                        <Link href={'#'} className="pt-4">
                            <span className="flex items-center gap-x-2">
                                <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                                <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                            </span>
                        </Link>
                    </span>
                </div>
                <div className="relative py-2">
                    <div>
                        <Image src={Blog_5} alt="Blog_5" className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                        <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
                    </div>
                    <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                            Những ảnh hưởng của mùi hương lên não bộ
                        </p>
                        <Link href={'#'} className="pt-4">
                            <span className="flex items-center gap-x-2">
                                <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                                <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                            </span>
                        </Link>
                    </span>
                </div>
                <div className="relative py-2">
                    <div>
                        <Image src={Blog_6} alt="Blog_6" className="w-[360px] h-[420px] object-cover rounded-[4px]" />
                        <Image src={Logo} alt="Logo" className="w-[60px] h-[60px] object-cover rounded-[8px] absolute top-0.5 left-0.5" />
                    </div>
                    <span className="w-[360px] pt-2 text-[12px] flex justify-between items-end">
                        <p className="text-[12px] w-2/3 uppercase font-semibold text-[#C6613D]">
                            Những việc làm cho ngày cuối tuần ý nghĩa hơn
                        </p>
                        <Link href={'#'} className="pt-4">
                            <span className="flex items-center gap-x-2">
                                <em className="text-[#C6613D] transition-all ease-in-out duration-500 hover:font-semibold hover:underline">Đọc thêm</em>
                                <i className="border-[#C6613D] border-r-[1px] border-b-[1px] inline-block p-1 -rotate-45"></i>
                            </span>
                        </Link>
                    </span>
                </div>
                {/* Pagination */}
                
            </section>
        </main>
    );
}

export default Blog;