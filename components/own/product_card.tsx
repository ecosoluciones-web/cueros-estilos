import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
    id: string;
    nombre: string;
    precio: number;
    imagen: string;
    descuento?: number;
}

function ProductCard(product: ProductCardProps) {
    return (
        <Card key={product.id} className="group relative overflow-hidden rounded-lg shadow-none border-none">
            <CardContent className="p-0">
                <div className="aspect-square relative">
                    <Image
                        src={product.imagen || "/placeholder.svg"}
                        alt={product.nombre}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                    {
                        product.descuento && (
                            <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs">-{product.descuento}%</span>
                        )
                    }
                </div>
            </CardContent>
            <CardFooter className="p-4">
                <div className="space-y-1">
                    <h3 className="font-medium leading-none">{product.nombre}</h3>
                    <p className="text-sm text-muted-foreground">{product.precio}</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProductCard