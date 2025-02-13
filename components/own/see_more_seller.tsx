import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  nombre: string
  imagen: string
}

export default function MoreBestSeller(info: ProductCardProps) {
  return (
    <Card key={info.id} className="group relative overflow-hidden rounded-lg h-full">
      <div className="relative h-full w-full">
        <Image
          src={info.imagen || "/placeholder.svg"}
          alt={info.nombre}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 left-2 z-10 flex items-center text-white">
          <p className="mr-2">{info.nombre}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>
    </Card>
  )
}
