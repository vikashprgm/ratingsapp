'use client'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RatingIcon } from "./shadcn-studio/rating/rating-06"
import { Success } from "./success"
import { getReview } from "@/app/getReview"
import { Copy, Check } from "lucide-react" 

const EMOJIS = ['☹️', '🙂', '😍']

interface store_data  {
  name : string,
  url : string,
  cat : string
}

interface displayprops {
  item : store_data
}

export function Review( { item } : displayprops) {
  const [heart, setHeart] = useState(0)
  const [trigger, setTrigger] = useState(false)
  const [showSuc, setShowSuc] = useState(false)
  
  const [displayedReview, setDisplayedReview] = useState("")
  const [fullReview, setFullReview] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (trigger && heart > 3 && item.cat) {
      const reviewText = getReview(item.cat) as string || ""
      setFullReview(reviewText)
      setDisplayedReview("")
      setIsTyping(true)
      setIsCopied(false)

      let currentIndex = 0
      
      const interval = setInterval(() => {
        setDisplayedReview(reviewText.slice(0, currentIndex + 1))
        currentIndex++

        if (currentIndex >= reviewText.length) {
          clearInterval(interval)
          setIsTyping(false)
        }
      }, 30) 

      return () => clearInterval(interval)
    } else {
      setDisplayedReview("")
      setFullReview("")
      setIsTyping(false)
    }
  }, [trigger, heart, item.cat])

  const handleCopy = () => {
    if (fullReview) {
      navigator.clipboard.writeText(fullReview)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-xs">
      {!showSuc ? 
      <CardContent className="space-y-5">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-bold">Give us your review</h3>
            <h2 className="text-xs text-center">How was your experience at {item.name} today?</h2>
            <RatingIcon heart={heart} setHeart={setHeart} setTrigger={setTrigger}/>
            {heart > 0 && (
              <p className="text-muted-foreground text-xs">
                {heart <= 2
                  ? <>"We're sorry to hear that" {EMOJIS[0]} </>
                  : heart <= 3
                    ? <>"Thanks for your feedback" {EMOJIS[1]}</>
                    : <>"Glad you enjoyed it!" {EMOJIS[2]} </>}
              </p>
            )}
          </div>

          {trigger && (
            <div className="space-y-4">
               {heart > 3 && item.cat && (
                  <>
                    <div className="relative bg-muted p-3 pr-10 rounded-md text-sm text-muted-foreground min-h-[80px]">
                      <p>
                        {displayedReview}
                        {isTyping && <span className="animate-pulse font-bold text-primary">|</span>}
                      </p>
                    </div>
                    
                    <Button
                      type="button"
                      variant="secondary"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={isTyping}
                      size="lg"
                      onClick={handleCopy}
                    >
                      Copy
                      {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </>
               )}
              
              <Button
                type="button"
                disabled={heart === 0 || isTyping}
                size="lg"
                className="w-full"
                onClick={()=>{
                  if(heart <= 3){
                    setShowSuc(true)           
                  }
                  else {
                    window.location.href = item.url
                  }
                }}
              >
                {heart <= 3 ? "Submit Review" : "Post on Google"}
              </Button> 
            </div>
          )}
      </CardContent>
      :
      <Success/>
      }
    </Card>
  )
}