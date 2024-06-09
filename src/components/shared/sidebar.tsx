import { CircleUser, Layers3, LayoutDashboard, LogOut, Newspaper, Package, ShoppingCart } from 'lucide-react'
import React from 'react'

import Logo from '../../../public/images/sample_logo.png';
import Image from 'next/image';

const Sidebar = () => {
    const navList = [
        {
            name: 'Thống kê',
            icon: <LayoutDashboard size={24}/>,
            href: '/staff'
        },
        {
            name: 'Đơn hàng',
            icon: <ShoppingCart size={24}/>,
            href: '/staff/orders'
        },
        {
            name: 'Sản phẩm',
            icon: <Package size={24}/>,
            href: '/staff/product'
        },
        {
            name: 'Danh mục',
            icon: <Layers3 size={24}/>,
            href: '/staff/categories'
        },
        {
            name: 'Tài khoản',
            icon: <CircleUser size={24}/>,
            href: '/staff/users'
        },
        {
            name: 'Blogs',
            icon: <Newspaper size={24}/>,
            href: '/staff/blog'
        }
    ]

    return (
        <section>
            <section className='flex flex-col w-[240px] min-h-screen px-4 shadow-md'>
                <Image src={Logo} alt="Logo" className='w-[160px] h-[160px] mx-auto'/>
                <nav className='flex flex-col gap-4 p-4'>
                    {navList.map((nav, index) => (
                        <a key={index} href={nav.href} className='flex justify-start items-center gap-4 px-2 py-3 rounded-[4px] hover:bg-gray-200'>
                            <span className='material-icons'>{nav.icon}</span>
                            <p>{nav.name}</p>
                        </a>
                    ))}
                    <hr />
                    <a href="/" className='flex items-center gap-4 px-2 py-3 rounded-[4px] hover:bg-gray-200'>
                        <span className='material-icons'>
                            <LogOut size={24}/>
                        </span>
                        <p>Đăng xuất</p>
                    </a>
                </nav>
            </section>
        </section>
    )
}

export default Sidebar
