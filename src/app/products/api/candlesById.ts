import type { NextApiRequest, NextApiResponse } from 'next';
import candles from '@/lib/data/product.json';

type Candle = {
    ProductName: string;
    ProductPrice: number;
    ProductCategory: string;
    ProductDescription: string;
    ProductImage: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Candle | { error: string }>) {
    const { index } = req.query;

    if (!index || isNaN(Number(index))) {
        res.status(400).json({ error: 'Index is required and must be a number' });
        return;
    }

    const idx = parseInt(index as string, 10) - 1;

    if (idx < 0 || idx >= candles.length) {
        res.status(404).json({ error: 'Candle not found' });
        return;
    }

    const candle = candles[idx];

    res.status(200).json(candle);
}