"use client";

import ProductPage from "@/components/own/product/product-page"
import { useParams } from "next/navigation"
import { ProductFul } from "@/interfaces/product";
import { useEffect, useState } from "react";

export default function Product() {
    const { prodID } = useParams<{ prodID: string }>()
    const [productInfo, setProductInfo] = useState<ProductFul | null>(null)

    useEffect(() => {
        fetch(`/api/products?prodID=${prodID}`)
            .then(res => res.json())
            .then((entry: ProductFul) => {
                setProductInfo(entry)
            })
    }, [prodID])

    return (
            productInfo ? 
            ProductPage({product: productInfo["fields"]}) 
            : <div>Loading...</div>
    )
}