import React from 'react';

import About_HeadImage_1 from '../../../public/images/About_Head_1.png';
import About_HeadImage_2 from '../../../public/images/About_Head_2.png';
import About_HeadImage_3 from '../../../public/images/About_Head_3.png';
import About_HeadImage_4 from '../../../public/images/About_Head_4.png';

import About_ContentImage_1_1 from '../../../public/images/About_Content_1_1.png';
import About_ContentImage_1_2 from '../../../public/images/About_Content_1_2.png';
import About_ContentImage_2_1 from '../../../public/images/About_Content_2_1.png';
import About_ContentImage_2_2 from '../../../public/images/About_Content_2_2.png';
import About_ContentImage_2_3 from '../../../public/images/About_Content_2_3.png';
import About_ContentImage_2_4 from '../../../public/images/About_Content_2_4.png';
import About_ContentImage_3_1 from '../../../public/images/About_Content_3_1.png';
import About_ContentImage_3_2 from '../../../public/images/About_Content_3_2.png';
import About_ContentImage_3_3 from '../../../public/images/About_Content_3_3.png';

import Image from 'next/image';
import UserBreadcrumb from '@/components/shared/breadcrumb';

function About() {
    return (
        <main>
            <section className='grid grid-cols-3 gap-x-10'>
                <div>
                    <Image src={About_HeadImage_4} alt="About Head Image 4" className="w-[560px] h-full object-cover rounded-[10px]" />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Image src={About_HeadImage_1} alt="About Head Image 1" className="w-[420px] h-full object-cover rounded-[10px]" />
                    <Image src={About_HeadImage_3} alt="About Head Image 3" className="w-[420px] h-full object-cover rounded-[10px]" />
                </div>
                <div>
                    <Image src={About_HeadImage_2} alt="About Head Image 2" className="w-[560px] h-full object-cover rounded-[10px]" />
                </div>
            </section>
            <section className='flex flex-col'>
                <section className='flex justify-between items-end relative mt-12'>
                    <hr className='w-full border-t-[3px] border-[#C6613D]' />
                    <div className='absolute left-0 py-2 text-[#C6613D]'><UserBreadcrumb /></div>
                    <h4 className='text-[24px] font-semibold uppercase text-[#C6613D] absolute right-0'>Về chúng tôi</h4>
                </section>
                <section className='my-8'>
                    <div className='flex justify-around items-center'>
                        <em className='w-[640px] leading-8 text-[#C6613D]'>
                            <strong>Nơm</strong> bán các sản phẩm nến thơm,
                            hướng đến các nguyên liệu xanh từ tự nhiên như gỗ, thảo mộc, trái cây,...
                            Không chỉ an toàn mà còn giúp thư giãn tinh thần hiệu quả nhất. <br />
                            Tất cả sản phẩm Nơm đều hướng đến tối đa nhựa trong khâu bao bì đóng gói.
                        </em>
                        <Image src={About_ContentImage_1_1} alt="About Content Image" className="w-[360px] h-[420px] object-cover rounded-[10px]" />
                    </div>
                    <div className='flex justify-around items-center pt-2'>
                        <Image src={About_ContentImage_1_2} alt="About Content Image" className="w-[360px] h-[420px] object-cover rounded-[10px]" />
                        <em className='w-[560px] leading-8 text-right text-[#C6613D]'>
                            Những sản phẩm nến thơm mà chúng tôi có được không chỉ là một sản phẩm hay là một câu chuyện gì đó quá cầu kì. <br />
                            <strong>Nơm</strong>, chỉ đơn giản là những mẫu chuyện hằng ngày hay những chuyện được kể lại ở một vùng đất nào đó. <br />
                            Tất cả chúng tôi góp nhặt lại cho bạn, những kẻ thích mộng mơ.
                        </em>
                    </div>
                </section>
            </section>
            <section className='my-4 flex flex-col justify-center'>
                <hr className='border-t-[3px] w-full border-[#C6613D]' />
                <div className='flex justify-center gap-x-4 my-4'>
                    <Image src={About_ContentImage_2_1} alt="About Content Image" className="w-full h-[560px] object-cover rounded-[10px]" />
                    <Image src={About_ContentImage_2_2} alt="About Content Image" className="w-full h-[560px] object-cover rounded-[10px]" />
                    <Image src={About_ContentImage_2_3} alt="About Content Image" className="w-full h-[560px] object-cover rounded-[10px]" />
                    <Image src={About_ContentImage_2_4} alt="About Content Image" className="w-full h-[560px] object-cover rounded-[10px]" />
                </div>
                <hr className='border-t-[3px] w-full border-[#C6613D]' />
            </section>
            <section className='my-4'>
                <div className='flex justify-around gap-x-1'>
                    <Image src={About_ContentImage_3_1} alt="About Content Image" className="w-[360px] h-[480px] object-cover rounded-[10px]" />
                    <div className='flex flex-col'>
                        <div className='flex justify-between gap-x-4'>
                            <Image src={About_ContentImage_3_2} alt="About Content Image" className="w-full h-[240px] object-cover rounded-[10px]" />
                            <Image src={About_ContentImage_3_3} alt="About Content Image" className="w-full h-[240px] object-cover rounded-[10px]" />
                        </div>
                        <span className='flex flex-col justify-center'>
                            <h4 className='font-semibold text-xl text-[#C6613D] text-center py-4'>Tại Nơm, chúng tôi luôn theo đuổi</h4>
                            <ul className='grid grid-cols-2 justify-items-center list-disc text-center text-[#C6613D] font-light'>
                                <li>
                                    Nguyên liệu xanh
                                </li>
                                <li>
                                    Đổi mới và sáng tạo
                                </li>
                                <li>
                                    Lắng nghe khách hàng
                                </li>
                                <li>
                                    Trách nhiệm xã hội
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;