"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import ProductBackground from '../../../../public/images/ProductBackground.png';
import UserBreadcrumb from '@/components/shared/breadcrumb';
import SearchInput from '@/components/search';
import { ProductCard } from '@/components/shared/custom-card';

import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const ProductPage = () => {
  const [value, setValue] = useState([0, 9000000]);

  return (
    <main className='flex flex-col justify-center gap-4 text-[#C6613D]'>
      <UserBreadcrumb />
      <SearchInput />
      {/* Products List */}

      {/* Goal plan: Inspired by Louis Vuitton */}
      {/* 1 column for best sellers, and another 3 column is for other products */}
      <section className='grid grid-cols-3 py-2'>
        <section className='col-span-1'>
          {/* Filter section */}
          <div className='w-fit'>
            <div className='flex justify-between items-center gap-10 mb-4'>
              <h2 className='text-2xl w-full uppercase font-semibold'>Bộ lọc</h2>
            </div>
            <div>
              <div className='flex justify-start items-center gap-10 mb-4'>
                <h3 className='text-[16px] w-full uppercase underline underline-offset-4 font-semibold'>Danh mục</h3>
              </div>
              <ul className='grid grid-cols-2 gap-2'>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Nến thơm</p>
                  </div>
                </li>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Sáp thơm</p>
                  </div>
                </li>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Room Sprays</p>
                  </div>
                </li>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Khuếch tán tinh dầu</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='my-2'>
              <h3 className='text-lg font-semibold my-2 underline underline-offset-2 uppercase'>Giá tiền</h3>
              <Slider 
                value={value} 
                max={9000000} 
                step={1000} 
                className='w-[400px] bg-[#F2764A] rounded-[12px] my-4'
                onValueChange={setValue}
              />
            
              <div className='flex justify-between items-center my-2'>
                  <div className='flex gap-2 items-center'>
                    <p>Từ</p>
                    <span className='border-[1px] border-gray-300 rounded-[4px] px-2 py-1'>
                      {value[0].toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                        })
                      }
                    </span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <p>Đến</p>
                    <span className='border-[1px] border-gray-300 rounded-[4px] px-2 py-1'>
                      {value[1].toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                        })
                      }
                    </span>
                  </div>
              </div>
            </div>
            <div>
              <h3 className='text-lg font-semibold my-2 underline underline-offset-2'>Kích cỡ</h3>
              <ul className='flex flex-col gap-4'>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Nhỏ</p>
                  </div>
                </li>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Vừa</p>
                  </div>
                </li>
                <li>
                  <div className='flex justify-start items-center gap-4'>
                    <Checkbox className='w-[12px] h-[12px]'/>
                    <p>Lớn</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className='col-span-2 grid grid-cols-4 gap-4 w-fit'>
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
          <ProductCard 
            title='Louis Vuitton'
            image={ProductBackground}
            type='other-products'
          />
        </section>
      </section>
    </main>
  )
}

export default ProductPage
