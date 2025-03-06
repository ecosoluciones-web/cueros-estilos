import { formatCurrency } from "@/lib/utils"

interface ProductHeaderProps {
  name: string
  price: number
}

export function ProductHeader({ name, price }: ProductHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
      <p className="text-xl font-medium text-muted-foreground">{formatCurrency(price)}</p>
    </div>
  )
}

