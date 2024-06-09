import { HandCoins } from 'lucide-react';
import React from 'react';

function Staff() {
    return (
        <section>
            <span className='flex flex-col gap-4 py-4'>
                <h1 className='uppercase text-[36px] font-bold'>Chào mừng nhân viên</h1>
                <p>Đã đến lúc chấm công làm việc rồi nè~~</p>
            </span>

            <section className='grid grid-cols-4 justify-items-stretch gap-4'>
                <div className='w-full flex justify-between items-center p-6 shadow-md rounded-[4px]'>
                    <span className='w-fit flex flex-col gap-4'>
                        <p className='font-semibold text-[18px]'>Doanh thu đạt được:</p>
                        <p>100.000 đ</p> 
                    </span>
                    <HandCoins size={48}/>
                </div>
                <div className='w-full flex justify-between items-center p-6 shadow-md rounded-[4px]'>
                    <span className='w-fit flex flex-col gap-4'>
                        <p className='font-semibold text-[18px]'>Số lượt khách hàng truy cập:</p>
                        <p>100.000 đ</p> 
                    </span>
                    <HandCoins size={48}/>
                </div>
                <div className='w-full flex justify-between items-center p-6 shadow-md rounded-[4px]'>
                    <span className='w-fit flex flex-col gap-4'>
                        <p className='font-semibold text-[18px]'>Số đơn hàng đã đặt:</p>
                        <p>100.000 đ</p> 
                    </span>
                    <HandCoins size={48}/>
                </div>
            </section>
        </section>
     );
}

export default Staff;