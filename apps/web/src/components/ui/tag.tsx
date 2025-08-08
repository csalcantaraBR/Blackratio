import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-surface text-text-primary",
        freeleech: "bg-success text-primary-foreground",
        vip: "bg-warning text-primary-foreground",
        new: "bg-primary text-primary-foreground",
        "4k": "bg-danger text-white",
        movie: "bg-blue-600 text-white",
        tv: "bg-purple-600 text-white",
        music: "bg-green-600 text-white",
        game: "bg-orange-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        className={cn(tagVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Tag.displayName = "Tag"

export { Tag, tagVariants }
