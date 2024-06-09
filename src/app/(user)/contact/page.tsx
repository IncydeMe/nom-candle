import { Link2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import RootLayout from '../../layout'

const ContactPage = () => {
    return (
        <RootLayout>
            <section className='flex justify-start gap-10'>
                <div className='text-[#C6613D]'>
                    <h1 className='text-[36px] font-bold uppercase py-2'>Liên hệ</h1>
                    <h4 className='text-[24px] font-bold'>Chúng tôi luôn sẵn lòng hỗ trợ bạn</h4>
    
                    <section className='flex justify-between items-center gap-4'>
                        <section className='w-[560px]'>
                            <form>
                                <div className='py-2'>
                                    <Label htmlFor='name' className='pb-2'>Họ và tên</Label>
                                    <Input type='text' id='name' name='name' placeholder='Vui lòng nhập họ và tên của bạn' className='rounded-[4px]' />
                                </div>
                                <div className='py-2'>
                                    <Label htmlFor='email' className='pb-2'>Email</Label>
                                    <Input type='email' id='email' name='email' placeholder='Vui lòng nhập email của bạn' className='rounded-[4px]' />
                                </div>
                                <div className='py-2'>
                                    <Label htmlFor='message' className='pb-2'>Nội dung</Label>
                                    <Textarea id='message' name='message' placeholder='Vui lòng nhập nội dung cần trao đổi' className='rounded-[4px]'></Textarea>
                                </div>
                                <Button type='button' className='bg-[#C6613D] w-full text-white uppercase font-bold text-[16px] rounded-[4px] hover:bg-[#a24f31]'>Gửi</Button>
                            </form>
                        </section>
                    </section>
                </div>
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
                            <ul className='flex gap-x-2 my-2'>
                                <li className='text-[16px]'>
                                    <Link href="https://www.facebook.com/profile.php?id=61559836954510" target="_blank" rel="noopener noreferrer">
                                        <div className='flex items-center gap-2'>
                                            <Link2 size={20} />
                                            Facebook
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </RootLayout>
    )
}

export default ContactPage
