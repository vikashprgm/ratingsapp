"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GenerateCard({onSubmit, setName, setLink, setPasskey} : {onSubmit:any, setName:any, setLink:any, setPasskey:any}) {
  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create a new store identity</CardTitle>
          <CardDescription>
            Enter name and link of your store
          </CardDescription>
        </CardHeader>
        
       <form onSubmit={onSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="store-name">Name</Label>
                <Input
                  id="store-name"
                  type="text" // changed from email to text
                  placeholder="AZ Sports"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="store-link">Google Maps Link</Label>
                </div>
                <Input 
                  id="store-link" 
                  required 
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="grid gap-2 pb-4">
                <Label htmlFor="passkey">Admin Passkey</Label>
                <Input
                  id="passkey"
                  type="password"
                  required
                  onChange={(e) => setPasskey(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Generate ID
            </Button>
          </CardFooter>
        </form>

      </Card>
    </div>
  )
}