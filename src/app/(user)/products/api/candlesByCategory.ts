import type { NextApiRequest, NextApiResponse } from 'next';
import candles from '@/lib/data/product.json';

type Candle = {
    ProductName: string;
    ProductPrice: number;
    ProductCategory: string;
    ProductDescription: string;
    ProductImage: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Candle[] | { error: string }>) {
    const { category } = req.query;

    if (!category) {
        res.status(400).json({ error: 'Category is required' });
        return;
    }

    const filteredCandles = candles.filter(candle => candle.ProductCategory === category);

    res.status(200).json(filteredCandles);
}