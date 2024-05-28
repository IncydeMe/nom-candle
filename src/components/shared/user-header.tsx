"use client"

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import Logo from '../../../public/images/sample_logo.png';

const UserHeader = () => {
    return (
        <>
            <header className='flex w-screen h-fit justify-between px-10 items-center relative before:absolute before:left-[80px] before:bottom-0 before:h-[1px] before:w-[90%] before:border-[0.05rem] before:border-[#C6613D]'>
                {/* Logo */}
                <section>
                    <Image src={Logo} alt='Logo' className='h-[120px] w-[120px] object-contain' />
                </section>
                {/* General Navigation */}
                <nav>
                    <ul className='flex justify-around gap-x-6 text-[#C6613D] '>
                        <li>
                            <Link href='../about' className='transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline'>Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link href='../user/browse' className='transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline'>Sản phẩm</Link>
                        </li>
                        <li>
                            <Link href='../blog' className='transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline'>Blog</Link>
                        </li>
                        <li>
                            <Link href='../contact' className='transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline'>Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
                {/* User Navigation */}
                <nav>
                    <ul className="flex justify-around gap-x-6 text-[#C6613D]">
                        <li>
                            <Link href='../user/cart' className='transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline'>Giỏ hàng</Link>
                        </li>
                        <li>
                            <Link href='../user/profile' className='transition-all ease-in-out duration-300 hover:text-[#a25032] hover:font-bold hover:underline'>
                                Tài khoản
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default UserHeader;