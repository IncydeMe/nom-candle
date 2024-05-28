"use client"

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import Logo from '../../../public/images/sample_logo.png';

const UserFooter = () => {
    return (
        <>
            <footer className='flex w-screen h-fit justify-between px-10 py-8 items-center relative before:absolute before:left-[80px] before:top-0 before:h-[1px] before:w-[90%] before:border-[0.05rem] before:border-[#C6613D]'>
                <Image src={Logo} alt='Logo' className='h-[120px] w-[120px] object-contain' />
                <p className='w-[700px] text-[14px] text-[#C6613D]'>
                    <strong>Nơm</strong> là thương hiệu nến thơm từ Việt Nam,
                    hướng đến  các nguyên liệu xanh từ tự hiên như gỗ, thảo mộc, trái cây,...
                    không chỉ an toàn mà còn giúp thư giãn tinh thần hiệu quả nhất.
                    Tất cả sản phẩm của <strong>Nơm</strong> đều  hạn chế tối đa nhựa trong bao bì sản phẩm
                </p>
                <div className='text-[#C6613D]'>
                    <h3 className='font-semibold text-[16px]'>Thông tin liên hệ:</h3>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-[14px] mt-2'>
                            <strong className='underline'>Mail:</strong> <a href="mailto:nom@gmail.com?">nom@gmail.com</a>
                        </li>
                        <li className='text-[14px]'>
                            <strong className='underline'>Số điện thoại:</strong> 0123456789
                        </li>
                        <li>
                            <strong className='text-[14px] underline'>Follow us</strong>
                            <ul className='flex gap-x-2'>
                                <li className='text-[16px]'>
                                    <a href="https://www.facebook.com/profile.php?id=61559836954510" target="_blank" rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default UserFooter
