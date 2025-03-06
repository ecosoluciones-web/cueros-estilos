import { ProductGallery } from "./product-gallery"
import { ProductHeader } from "./product-header"
import { ProductDescription } from "./product-description"
import { BuyButton } from "./buy-button"
import { SizeSelector } from "./size-selector"
// import { ProductDetails } from "./product-details"
import { ProductFul } from "@/interfaces/product"

export interface Product {
  internalName: string
  name: string
  price: number
  description: string
  features: string[]
  images: string[]
  sizes: string[]
  material: string
  specifications: string[]
}

interface ProductPageProps {
  product: ProductFul["fields"]
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <div className="space-y-6 grid md:grid-cols-2 gap-8">
      <ProductGallery images={product.imagen.map(f=> f.fields.file.url)} name={product.nombre} />
      <div className="space-y-8">
        <ProductHeader name={product.nombre} price={product.precio} />
        <ProductDescription description={product.descripcion} features={product.caracteristicas} />
        <BuyButton />
        <SizeSelector sizes={product.tallas} />
        {/* <ProductDetails material={product.material} specifications={product.specifications} /> */}
      </div>
    </div>
  )
}

