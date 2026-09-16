"use server"

import { createClient } from "@supabase/supabase-js"

export async function createStoreAction(name: string, url: string, passkey: string) {

  if (passkey !== process.env.SECRET_PASSKEY) {
    return { error: "Invalid passkey. Access denied." }
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data, error } = await supabase
    .from('store')
    .insert([{ name, url }])
    .select('id')
    .single()

  if (error) {
    return { error: error.message }
  }

  return { success: true, id: data.id }
}