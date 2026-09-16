import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "./ui/field"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

export function LinkPreview({link} : {link:string}) {

  const [copied,setCopied] = useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>Link Generated</CardTitle>
        <CardDescription>
          Save your ID to use it later
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel>Your Unique ID:</FieldLabel>
          <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
            <span className="text-muted-foreground">{link}</span>
          </div>
        </Field>
        <Field>
          <FieldLabel>Full Link</FieldLabel>
          <Textarea className="muted" disabled>{`https://r8te.vercel.app/${link}`}</Textarea>
        </Field>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" size="sm" className="w-full" onClick={ 
          async () => {
            try {
              await navigator.clipboard.writeText(`https://r8te.vercel.app/${link}`);
              setCopied(true)
            } catch (err) {}
          }}>
          Copy Link
        </Button>
        {copied ? <>Copied to Clipboard!</> : <></>}
      </CardFooter>
    </Card>
  )
}
