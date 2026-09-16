'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingIconProps {
  heart: number
  setHeart: (val: number) => void
  max?: number
}

export function RatingIcon({ heart, setHeart, max = 5 }: RatingIconProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Rating">
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1
        const isFilled = (hovered ?? heart) >= starValue

        return (
          <button
            key={starValue}
            type="button"
            role="radio"
            aria-checked={heart === starValue}
            aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
            onClick={() => setHeart(heart === starValue ? 0 : starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
            className="rounded-sm p-1 transition-transform active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Heart
              size={28}
              className={cn(
                'pointer-events-none transition-colors duration-150',
                isFilled
                  ? 'fill-red-500 text-red-500 stroke-1'
                  : 'fill-red-500/20 text-red-500/30 stroke-red-500/20 stroke-1'
              )}
            />
          </button>
        )
      })}
    </div>
  )
}