import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="mx-auto max-w-md text-center space-y-10">
        
        {/* Branding & Copy */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">
            r8te
          </h1>
          <p className="text-lg text-muted-foreground">
            A simple, minimal way to generate and manage your store identity links.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/create" className="w-full sm:w-auto text-center">
            <Button size="lg" className="w-full sm:w-40 font-semibold rounded-full">
              Create
            </Button>
          </Link>
          
          <Link href="/update" className="w-full sm:w-auto text-center">
            <Button size="lg" variant="outline" className="w-full sm:w-40 font-semibold rounded-full">
              Update
            </Button>
          </Link>
        </div>

      </div>
    </main>
  )
}