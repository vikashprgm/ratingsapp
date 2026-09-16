import { Review } from "@/components/review"

interface PageProps {
  params: Promise<{ storeId: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { storeId } = await params
  console.log(storeId)
  return <Review storeId={storeId} />
}