import React from 'react'

export default function Page({ params }: { params: { id: number, category: string } }) {
    return (
      <div className='flex flex-col'>
        <span>Product Id: {params.id}</span>
        <span>Product Category: {params.category}</span>
      </div>
    )
  }
