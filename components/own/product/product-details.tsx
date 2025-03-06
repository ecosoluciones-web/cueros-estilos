import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ProductDetailsProps {
  material: string
  specifications: string[]
}

export function ProductDetails({ material, specifications }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">MATERIAL AND CARE</h3>
        <p className="text-sm text-muted-foreground">{material}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">SPECIFICATIONS</h3>
        <div className="text-sm text-muted-foreground space-y-4">
          {specifications.map((spec, index) => (
            <p key={index}>{spec}</p>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping & Returns</AccordionTrigger>
          <AccordionContent>
            Free shipping on orders over $100. Returns accepted within 30 days of delivery.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sizing">
          <AccordionTrigger>Size Guide</AccordionTrigger>
          <AccordionContent>Please refer to our detailed size guide to find your perfect fit.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

