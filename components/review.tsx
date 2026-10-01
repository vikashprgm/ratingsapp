'use client'
import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Success } from "./success"
import { getReview, getTags } from "@/app/getReview"
import { Heart, Smile, PenLine, Copy, Zap, ArrowRight, Check } from "lucide-react"

interface store_data {
  name: string
  url: string
  cat: string
}

interface displayprops {
  item: store_data
}

const RATING_MESSAGES: Record<number, string> = {
  1: "We're sorry to hear that ☹️",
  2: "We're sorry to hear that ☹️",
  3: "Thanks for your feedback 🙂",
  4: "Glad you enjoyed it! 😊",
  5: "Pure culinary bliss! 5/5 😍",
}

export function Review({ item }: displayprops) {
  const [heart, setHeart] = useState(0)
  const [showSuc, setShowSuc] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const [displayedReview, setDisplayedReview] = useState("")
  const [fullReview, setFullReview] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const highlights = useMemo(() => getTags(item.cat), [item.cat])
  const isPositive = heart > 3 && !!item.cat

  // Reset chosen chips if the category changes
  useEffect(() => {
    setSelected([])
  }, [item.cat])

  // Generate + type out the review when the rating becomes positive
  useEffect(() => {
    if (!isPositive) {
      setDisplayedReview("")
      setFullReview("")
      setIsTyping(false)
      return
    }

    const reviewText = (getReview(item.cat) as string) || ""
    setFullReview(reviewText)
    setDisplayedReview("")
    setIsTyping(true)

    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayedReview(reviewText.slice(0, i))
      if (i >= reviewText.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isPositive, heart, item.cat])

  // Final text = generated review + a sentence built from the selected chips
  const finalText = useMemo(() => {
    if (!fullReview) return ""
    if (selected.length === 0) return fullReview
    return `${fullReview} Loved: ${selected.join(", ")}.`
  }, [fullReview, selected])

  useEffect(() => {
    setIsCopied(false)
  }, [finalText])

  const handleCopy = async () => {
    if (!finalText) return
    try {
      await navigator.clipboard.writeText(finalText)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      /* clipboard blocked */
    }
  }

  const toggleChip = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )

  const handlePost = () => {
    if (!isPositive) {
      setShowSuc(true)
      return
    }
    window.location.href = item.url
  }

  return (
    <Card className="mx-auto w-full max-w-sm overflow-hidden rounded-[28px] border border-[#f3dcd6]/60 bg-white shadow-[0_20px_50px_-15px_rgba(120,50,30,0.3)]">
      {!showSuc ? (
        <CardContent className="space-y-4 p-6">
          {/* Header */}
          <div className="space-y-1.5 text-center">
            <h3 className="text-[26px] font-extrabold leading-tight tracking-tight text-[#2b1d1a]">
              Give us your review
            </h3>
            <p className="text-sm text-[#7a6a66]">
              How was your experience at{" "}
              <span className="font-semibold text-[#2b1d1a]">{item.name}</span> today?
            </p>
          </div>

          {/* Hearts */}
          <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#fff6f3] py-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                aria-label={`${n} out of 5`}
                onClick={() => setHeart(n)}
                className="rounded-full transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b3261e] focus-visible:ring-offset-2"
              >
                <Heart
                  className={`h-9 w-9 transition-colors duration-200 ${
                    n <= heart
                      ? "fill-[#b3261e] text-[#b3261e]"
                      : "fill-[#f3dcd6] text-[#f3dcd6]"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Rating message pill */}
          {heart > 0 && (
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fde9e4] px-4 py-2 text-xs font-bold text-[#2b1d1a]">
                <Smile className="h-4 w-4 text-[#b3261e]" />
                <span>{RATING_MESSAGES[heart]}</span>
              </div>
            </div>
          )}

          {/* Positive flow: chips + generated review */}
          {isPositive && (
            <>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#2b1d1a]">
                    What was unforgettable?
                  </span>
                  <span className="text-xs text-[#7a6a66]">Tap to include</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h) => {
                    const on = selected.includes(h.label)
                    return (
                      <button
                        key={h.label}
                        type="button"
                        onClick={() => toggleChip(h.label)}
                        aria-pressed={on}
                        className={`rounded-full px-3.5 py-2 text-xs font-bold transition-all active:scale-95 ${
                          on
                            ? "bg-[#b3261e] text-white shadow-sm"
                            : "bg-[#fde9e4] text-[#3b2c28] hover:bg-[#fadcd4]"
                        }`}
                      >
                        <span className="mr-1.5">{h.emoji}</span>
                        {h.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Review box + copy button (tight group) */}
              <div className="space-y-2">
                <div className="flex min-h-[96px] items-start gap-3 rounded-2xl bg-[#fde9e4] p-4">
                  <PenLine className="mt-1 h-4 w-4 shrink-0 text-[#b3261e]" />
                  <p className="text-[15px] leading-relaxed text-[#2b1d1a]">
                    {isTyping ? displayedReview : finalText}
                    {isTyping && <span className="animate-pulse font-bold text-[#b3261e]">|</span>}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={isTyping}
                  className={`flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-bold transition-colors disabled:opacity-50 ${
                    isCopied
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-[#fde9e4] text-[#b3261e] hover:bg-[#fadcd4]"
                  }`}
                >
                  {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {isCopied ? "Copied!" : "Copy review"}
                </button>
              </div>
            </>
          )}

          {/* Primary action */}
          {heart > 0 && (
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handlePost}
                disabled={isTyping}
                className="flex w-full items-center gap-3 rounded-2xl bg-[#3a2b27] px-4 py-3.5 text-left text-white shadow-md transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-60"
              >
                {isPositive ? (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <GoogleMaps />
                    </span>
                    <span className="flex-1">
                      <span className="block text-base font-extrabold leading-tight">Post on Google Maps</span>
                      <span className="block text-[11px] text-white/70">Opens verified rating screen</span>
                    </span>
                    <ArrowRight className="h-5 w-5 text-[#f4b8a8]" />
                  </>
                ) : (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-5 w-5" />
                    </span>
                    <span className="flex-1 text-base font-extrabold">Submit Review</span>
                    <ArrowRight className="h-5 w-5 text-[#f4b8a8]" />
                  </>
                )}
              </button>

              {isPositive && (
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#7a6a66]">
                  <Zap className="h-3.5 w-3.5 text-amber-500" />
                  Takes less than 30 seconds • Copy, then paste on Google Maps
                </p>
              )}
            </div>
          )}
        </CardContent>
      ) : (
        <Success />
      )}
    </Card>
  )
}

function GoogleMaps() {
  return (
    <svg viewBox="0 0 92.3 132.3" className="h-5 w-auto" aria-hidden="true">
      <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
      <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.900 0 46.100c0 8.700 1.700 15.700 4.600 22l28-33.300-21.800-18.300z" />
      <path fill="#4285f4" d="M46.200 28.500c9.800 0 17.700 7.900 17.700 17.700 0 4.300-1.600 8.300-4.200 11.400 0 0 13.900-16.600 27.500-32.700-5.600-10.800-15.300-19-27-22.700L32.600 34.800c3.300-3.800 8.100-6.300 13.600-6.300" />
      <path fill="#fbbc04" d="M46.200 63.800c-9.800 0-17.700-7.900-17.700-17.700 0-4.300 1.500-8.300 4.100-11.300l-28 33.300c4.800 10.600 12.800 19.200 21 29.900l34.100-40.500c-3.300 3.900-8.100 6.300-13.500 6.300" />
      <path fill="#34a853" d="M59.100 109.200c15.400-24.100 33.300-35 33.300-63 0-7.700-1.900-14.900-5.200-21.300L25.600 98c2.600 3.400 5.300 7.300 7.900 11.300 9.400 14.500 6.800 23.100 12.800 23.100s3.400-8.700 12.800-23.200" />
    </svg>
  )
}