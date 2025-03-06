import { NextResponse } from 'next/server';
import { getProduct } from '@/contenful/config';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const prodID = searchParams.get('prodID');
    if (!prodID) {
        return NextResponse.json({ message: 'prodID is required' }, { status: 400 });
    }
    const product = await getProduct(prodID);
    if (!product) {
        return NextResponse.json({ message: 'product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
}