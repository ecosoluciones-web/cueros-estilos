interface ProductDescriptionProps {
    description: string
    features: string[]
  }
  
  export function ProductDescription({ description, features }: ProductDescriptionProps) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <ul className="text-sm space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  