import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface SizeSelectorProps {
  sizes: string[]
}

export function SizeSelector({ sizes }: SizeSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">SIZE AND FIT</h3>
      <RadioGroup defaultValue={sizes[0]}>
        {sizes.map((size, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={size} id={`size-${index}`} />
            <Label htmlFor={`size-${index}`} className="text-sm">
              {size}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

