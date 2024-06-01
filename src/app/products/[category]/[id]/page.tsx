import UserBreadcrumb from '@/components/shared/breadcrumb'
import React from 'react'

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
        <p>ID sản phẩm: {params.id}</p>
        <p>Loại sản phẩm: {params.category}</p>   
    </div>
    )
  }
