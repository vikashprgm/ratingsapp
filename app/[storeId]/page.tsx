import { Review } from "@/components/review"
import { createClient} from '@supabase/supabase-js'

interface PageProps {
  params: Promise<{ storeId: string }>
}

export default async function ProductPage({ params }: PageProps) {

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ""
  const { storeId } = await params
  const supabase = createClient(url,key)

  // now we get store's info from url
  
  const {data:item, error}= await supabase
    .from('store')
    .select()
    .eq('id',storeId)
    .single()
  
  if (error || !item) {
    console.log(error)
    console.log(storeId)
    return <div>Item not found or error loading.</div>;
  }

  return <Review item={item}/>
}