import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "UTILIDAD FIT CON FORRO",
      price: "$150",
      image: "/placeholder.svg?height=400&width=300",
      tag: "PRODUCTO DE MUJER",
    },
    {
      id: 2,
      name: "ESTILO URBANO JACKET",
      price: "$225",
      image: "/placeholder.svg?height=400&width=300",
      tag: "PRODUCTO DE MUJER",
    },
    {
      id: 3,
      name: "ACTIVEWEAR SPORT",
      price: "$45",
      image: "/placeholder.svg?height=400&width=300",
      tag: "PRODUCTO DE MUJER",
    },
    {
      id: 4,
      name: "SUMMER DRESS FIT TREND EDIT",
      price: "$145",
      image: "/placeholder.svg?height=400&width=300",
      tag: "PRODUCTO DE MUJER",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">OUTDOOR STYLE</span>
          </Link>
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g7zUismbI7dQ08pKdWUyWmvHA6xn9B.png"
          alt="Explorer jumping in snowy mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 flex h-full flex-col justify-center text-white">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">PARA EXPLORADORES TODO TERRENO</h1>
          <Button className="mt-8 w-fit bg-emerald-500 hover:bg-emerald-600">Comprar Ahora</Button>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid grid-cols-5 gap-8 items-center justify-items-center">
          <Image src="/placeholder.svg?height=50&width=100" alt="RayBan" width={100} height={50} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Brand" width={100} height={50} />
          <Image src="/placeholder.svg?height=50&width=100" alt="CAT" width={100} height={50} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Brand" width={100} height={50} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Brand" width={100} height={50} />
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8">MÁS VENDIDOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden rounded-lg">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs">{product.tag}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <div className="space-y-1">
                  <h3 className="font-medium leading-none">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.price}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative h-[400px] w-full mt-12">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Person in desert terrain"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prueba nuestro calzado ideal</h2>
          <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-black">
            Ver más
          </Button>
        </div>
      </section>
    </div>
  )
}

