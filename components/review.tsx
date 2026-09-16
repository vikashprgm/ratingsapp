'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RatingIcon } from "./shadcn-studio/rating/rating-06"
import { Success } from "./success"

const EMOJIS = ['☹️', '🙂', '😍']

interface store_data  {
  name : string,
  url : string
}

interface displayprops {
  item : store_data
}

export function Review( { item } : displayprops) {
  const [heart, setHeart] = useState(0)
  const [trigger,setTrigger] = useState(false)
  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardContent className="space-y-5">
        {!trigger ?
        <>
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-bold">Give us your review</h3>
            <h2 className="text-xs text-center">How was your experience at {item.name} today?</h2>
            <RatingIcon heart={heart} setHeart={setHeart} />
            {heart > 0 && (
              <p className="text-muted-foreground text-xs">
                {heart <= 2
                  ? <>"We're sorry to hear that" {EMOJIS[0]} </>
                  : heart <= 3
                    ? <>"Thanks for your feedback" {EMOJIS[1]}</>
                    : <>"Glad you enjoyed it!"{EMOJIS[2]} </>}
              </p>
            )}
          </div> 

          <Button
            type="button"
            disabled={Boolean(heart === 0)}
            size="lg"
            className="w-full"
            onClick={()=>{
              if(heart<=3){
                setTrigger(true)
              }
              else return window.location.href=item.url
            }}
          >
            Submit Review
          </Button>
        </> : <><Success/></>}
      </CardContent>
    </Card>
  )
}