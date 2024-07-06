import React from 'react'

import UserBreadcrumb from '@/components/shared/breadcrumb'

import Blog_1 from '../../../../../public/images/Blog_Image_1.png';
import Image from 'next/image';

const BlogDetailPage = () => {
  return (
    <main className='flex flex-col text-[#C6613D] gap-4 my-4'>
        <UserBreadcrumb />
        <h4 className='text-3xl  font-bold'>Nến thơm là gì, cách nhận biết nến thơm an toàn.</h4>
        <span className='flex justify-start items-center gap-4 text-[12px] text-[#9C4B2E]'>
            <p>12/12/2024</p>
            <p>Trần Như Yến</p>
        </span>
        <Image src={Blog_1} alt="Blog Image" className="w-[100%] h-[560px] object-cover rounded-[12px]" />

        <span className='text-[16px] pt-2 pb-4 flex flex-col gap-4'>
            <p>
                Nơm, bán các sản phẩm nến thơm, hướng đến các nguyên liệu xanh từ tự nhiên như gỗ, thảo mộc, trái cây,... không chỉ an toàn mà còn giúp thư giãn tinh thần hiệu quả nhất. 
                Tất cả sản phẩm Nơm đều hướng đến tối đa nhựa trong khâu bao bì đóng gói. 
            </p>
            <p>
                Nơm, bán các sản phẩm nến thơm, hướng đến các nguyên liệu xanh từ tự nhiên như gỗ, thảo mộc, trái cây,... không chỉ an toàn mà còn giúp thư giãn tinh thần hiệu quả nhất. 
                Tất cả sản phẩm Nơm đều hướng đến tối đa nhựa trong khâu bao bì đóng gói. 
            </p>
        </span>
        <Image src={Blog_1} alt="Blog Image" className="w-[100%] h-[560px] object-cover rounded-[12px]" />
    </main>
  )
}

export default BlogDetailPage
