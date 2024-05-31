"use client"

import React from 'react';

import Logo from '../../public/images/sample_logo.png';

import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center gap-4 h-screen">
      <Image src={Logo} alt="Logo" className='w-[240px] h-[240px]'/>

      <span className='flex flex-col gap-4'>
        <em className="text-6xl font-bold text-[#C6613D]">Ôi không...</em>
        <em className="text-lg text-[#C6613D]">Có vẻ trang này không tồn tại rồi...</em>
      </span>
    </div>
  );
}
