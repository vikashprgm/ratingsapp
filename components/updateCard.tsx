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
import { Switch } from "./ui/switch"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const categories = [
  "Restaurants",
  "Cafes",
  "Bakery",
  "Sweet Shops",
  "Street Food",
  "Cloth Stores",
  "Grocery",
  "Electronics",
  "Handicrafts",
  "Bookstores",
  "Salons & Spas",
  "Gyms",
  "Other"
]

export function UpdateCard({onSubmit, setName, setLink, setPasskey, setId, isAI, setIsAI, setCategory} : {onSubmit:any, setName:any, setLink:any, setPasskey:any, setId:any, isAI:any, setIsAI:any, setCategory: any}) {
  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Update Store Details</CardTitle>
          <CardDescription>
            Enter new name and link
          </CardDescription>
        </CardHeader>
        
       <form onSubmit={onSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="store-name">Store ID</Label>
                <Input
                  id="store-name"
                  type="text" // changed from email to text
                  placeholder="b174r39da-c2cd-43dd-8262-4a93ae582e67"
                  required
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="store-name">New name</Label>
                <Input
                  id="store-name"
                  type="text" // changed from email to text
                  placeholder="Prince Sports Wear"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="store-link">New Google Maps link</Label>
                </div>
                <Input 
                  id="store-link" 
                  required 
                  placeholder="maps.google.com/place/MJ_Funtasia+dskm"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="passkey">Admin Passkey</Label>
                <Input
                  id="passkey"
                  type="password"
                  required
                  onChange={(e) => setPasskey(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="isAI">Enable AI Reviews</Label>
                <Switch id="isAI" onCheckedChange={()=>setIsAI(!isAI)}/>
              </div>
              {
                isAI? 
                <div className="pb-6">
                   <Combobox items={categories} onValueChange={setCategory}>
                    <ComboboxInput placeholder="Select a category" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div> 
                : 
                <div className="pb-6 text-slate-500">AI reviews are turned off</div>
              }
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Update
            </Button>
          </CardFooter>
        </form>

      </Card>
    </div>
  )
}