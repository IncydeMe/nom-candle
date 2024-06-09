import type { NextApiRequest, NextApiResponse } from "next";
import candles from "@/lib/data/product.json";

type Candle = {
    ProductName: string;
    ProductPrice: number;
    ProductDescription: string;
    ProductCategory: string;
    ProductImage: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Candle[]>) {
    res.status(200).json(candles);
}