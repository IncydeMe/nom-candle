import React from 'react'
import UserBreadcrumb from '@/components/shared/breadcrumb'

import Image from 'next/image';

import ProductImage from '../../../../../public/images/Product_Image.png';
import { ProductCard } from '@/components/shared/custom-card';

export default function Page({ params }: { params: { id: number, category: string } }) {
    
  
    return (
      <div className='flex flex-col'>
        <section className='flex justify-between items-end relative mt-12 '>
            <hr className='w-full border-t-[3px] border-[#C6613D]' />
            <div className='absolute left-0 py-2 text-[#C6613D]'><UserBreadcrumb /></div>
            <h4 className='text-[24px] font-semibold uppercase text-[#C6613D] absolute right-0'>
              {
                params.category.match('nen-thom') ? 'Nến thơm' :
                params.category.match('sap-thom') ? 'Sáp thơm' :
                params.category.match('room-sprays') ? 'Room Sprays' :
                params.category.match('khuech-tan-tinh-dau') ? 'Khuếch tán tinh dầu' :
                ''
              }
            </h4>
        </section>
        <section className='grid grid-cols-3 gap-4 mt-4'>
          <div className='col-span-2'>
            <Image src={ProductImage} alt='Product Image' className='w-full h-[360px] object-cover rounded-[8px]' />
          </div>
          <div className=''>
            <div className='flex flex-col gap-4'>
              <h4 className='text-[24px] font-semibold text-[#C6613D]'>Lê Nghĩa Nến</h4>
              <em className='text-[#C6613D]'>
                Sản phẩm thuộc bộ sưu tập nến thơm của Nơm. <br />
                Nến được làm từ 100% nguyên liệu tự nhiên, không chứa hóa chất độc hại. <br />
                Mùi hương: Lê Nghĩa. <br />
              </em>
              <p className='text-[16px] font-semibold text-[#C6613D]'>
                Giá: 200.000 VNĐ
              </p>
              <div className='flex justify-between'>
                <button className='w-[200px] h-[40px] bg-[#C6613D] hover:bg-[#8d442a] text-white transition-colors ease-in-out duration-500 rounded-[8px]'>Buy Now</button>
                <button className='w-[200px] h-[40px] bg-none hover:bg-[#C6613D] border-[1px] border-[#C6613D] text-[#C6613D] hover:text-white transition-all ease-in-out duration-300 rounded-[8px]'>Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
        <section className='my-4'>
          <h3 className='text-center text-[#C6613D] font-semibold uppercase text-[36px]'>Các sản phẩm khác</h3>
          <div className='grid grid-cols-4 justify-items-center my-4'>
            <ProductCard type='best-seller' title='Sample Product' image={ProductImage} />
            <ProductCard type='best-seller' title='Sample Product' image={ProductImage} />
            <ProductCard type='best-seller' title='Sample Product' image={ProductImage} />
            <ProductCard type='best-seller' title='Sample Product' image={ProductImage} />
          </div>
        </section>
    </div>
    )
}
