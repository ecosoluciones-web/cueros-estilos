import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, SearchIcon } from "lucide-react"

import fondoheader from "@/assets/fondoheader.webp"
import renzoCosta from "@/assets/marcas/renzo-costa.png"
import cat from "@/assets/marcas/cat.png"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/own/product_card"
import MoreBestSeller from "@/components/own/see_more_seller"

export default function Home() {
  const products = [
    {
      id: "1",
      nombre: "UTILIDAD FIT CON FORRO",
      precio: 150,
      imagen: "https://static.newss.beer/assets/img/templates/products/trekking/chaleco_trekking.webp",
      descuento: 20,
    },
    {
      id: "2",
      nombre: "Ver más vendidos",
      precio: 225,
      imagen: "https://static.newss.beer/assets/img/templates/products/trekking/chaleco_trekking.webp",
    },
    {
      id: "3",
      nombre: "ACTIVEWEAR SPORT",
      precio: 45,
      imagen: "/placeholder.svg?height=400&width=300",
      descuento: 15,
    },
    {
      id: "4",
      nombre: "SUMMER DRESS FIT TREND EDIT",
      precio: 145,
      imagen: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-none backdrop-blur supports-[backdrop-filter]:bg-white">
        <div className="container flex h-16 items-center justify-between">
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium">
              Hombre
            </Link>
            <Link href="#" className="text-sm font-medium">
              Mujer
            </Link>
            <Link href="#" className="text-sm font-medium">
              Accesorios
            </Link>
          </nav>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Cueros y Estilos</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <section className="relative h-[600px] w-full">
        <Image
          src={fondoheader}
          alt="Explorer jumping in snowy mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="container relative z-10 flex h-full flex-col justify-center text-white">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-verde">PARA EXPLORADORES TODO TERRENO</h1>
          <Button className="mt-8 w-fit bg-verde hover:bg-emerald-500">Comprar Ahora</Button>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-5 gap-8 items-center justify-items-center">
          <Image src={renzoCosta} alt="renzoCosta" width={50} height={25} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Brand" width={50} height={25} />
          <Image src={cat} alt="CAT" width={50} height={25} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Brand" width={50} height={25} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Brand" width={50} height={25} />
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8">MÁS VENDIDOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {<ProductCard key={products[0].id} {...products[0]} />}
          {MoreBestSeller(products[1])}
          {products.slice(2).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="relative h-[570px] aspect-video w-full">
        <video
          src="/calzado.mp4"
          className="absolute inset-0 w-full h-full object-cover aspect-video"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col justify-center text-white px-12">
          <div className="absolute bottom-10 p-0 m-0">
            <h2 className="text-4xl font-bold mb-4 w-5/6">Prueba nuestro calzado ideal</h2>
            <Button variant={"ghost"} className="w-fit text-white hover:text-verde hover:bg-transparent">
              Visitar tienda
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8">CALZADO</h2>

      </section>
    </div>
  )
}

