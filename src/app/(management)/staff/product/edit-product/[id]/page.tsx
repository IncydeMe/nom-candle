"use client"

import React from 'react';
import { useSingleProduct, updateProduct } from '@/hooks/useProduct';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function EditProduct({params}: {params: {id: string}}) {
    const { product, loading, error } = useSingleProduct(params.id);

    const productId = params.id;
    const [productName, setProductName] = React.useState<string>('');
    const [price, setPrice] = React.useState<number>(0);
    const [description, setDescription] = React.useState<string>('');
    const [size, setSize] = React.useState<string>('');
    const [categoryName, setCategoryName] = React.useState<string>('');
    const [productImgUrl, setProductImgUrl] = React.useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        switch (name) {
            case 'productName':
                setProductName(value);
                break;
            case 'price':
                setPrice(Number(value));
                break;
            case 'description':
                setDescription(value);
                break;
            case 'size':
                setSize(value);
                break;
            case 'categoryName':
                setCategoryName(value);
                break;
            case 'productImgUrl':
                setProductImgUrl(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedProduct = {
            productId,
            productName,
            price,
            description,
            size,
            categoryName,
            productImgUrl
        }
        updateProduct(params.id, updatedProduct);
    }
    

    return ( 
        <section className='w-[1900px]'>
            <h1>Edit Product {params.id}</h1>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {product && (
                <form className='flex flex-col gap-6'>
                    <div className='flex justify-start items-center gap-10'>
                        <Label>
                            Product Name:
                        </Label>
                        <Input type="text" defaultValue={product.productName} className='w-[360px]'/>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <Label>
                            Price:
                        </Label>
                        <Input 
                            type="number" defaultValue={product.price} className='w-[360px]'/>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <Label>
                            Description:
                        </Label>
                        <Input type="text" defaultValue={product.description} className='w-[360px]'/>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <Label>
                            Size:
                        </Label>
                        <Input type="text" defaultValue={product.size} className='w-[360px]'/>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <Label>
                            Category Name:
                        </Label>
                        <Input type="text" defaultValue={product.categoryName} className='w-[360px]'/>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <Label>
                            Product Image URL:
                        </Label>
                        <Input type="file" defaultValue={product.productImgUrl} className='w-[360px]'/>
                    </div>

                    <Button type="submit" className='w-fit bg-yellow-600 hover:bg-yellow-700 text-white'>Submit</Button>
                </form>
            )}
        </section>
     );
}

export default EditProduct;