"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import ProductBackground from '../../../public/images/ProductBackground.png';
import UserBreadcrumb from '@/components/shared/breadcrumb';
import SearchInput from '@/components/search';
import { ProductCard } from '@/components/shared/custom-card';

import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';

const ProductPage = () => {
  const [value, setValue] = useState([0, 9000000]);

  return (
    <main className='flex flex-col justify-center gap-4 text-[#C6613D]'>
      <UserBreadcrumb />
      <SearchInput />
      
    </main>
  )
}

export default ProductPage
