import React from 'react'
import type { Metadata } from "next";
import Sidebar from '@/components/shared/sidebar';

export const metadata: Metadata = {
    title: "Nơm Candle - Staff Section",
    description: "Nơm Candle - Staff Section",
  };

export default function ManagementLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang='en'>
        <body className='flex w-screen overflow-x-hidden'>
            <Sidebar/>
            <main className='p-2'>
                {children}
            </main>
        </body>
    </html>
  )
}

