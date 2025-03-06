"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] w-full bg-muted rounded-md overflow-hidden">
        <Image
          src={`https:${mainImage}` || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Product label overlay */}
        <div className="absolute bottom-4 left-0 bg-black/70 text-white px-4 py-2">PRODUCTO DE MUES</div>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            className="relative h-24 w-24 rounded-md overflow-hidden border-2 border-transparent hover:border-primary focus:border-primary transition"
            onClick={() => setMainImage(image)}
          >
            <Image
              src={`https:${image}` || "/placeholder.svg"}
              alt={`${name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

