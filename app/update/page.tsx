"use client"

import { GenerateCard } from "@/components/generateCard"
import { useState } from "react"
import { createStoreAction, updateStoreAction } from "../action" // Import your server action
import { UpdateCard } from "@/components/updateCard"

export default function UpdateStore() {
    const [name, setName] = useState<string>("")
    const [url, setUrl] = useState<string>("")
    const [passkey, setPasskey] = useState<string>("")
    const [id, setId] = useState<string>("")
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setErrorMsg("")

      const response = await updateStoreAction(id, name, url, passkey)

      if (response.error) {
        setErrorMsg(response.error)
      } else if (response.success) {
        setSuccess(true)
      }
    }

    return(
      <div>
        { !success ?
          <>
            <UpdateCard setId={setId} setLink={setUrl} setName={setName} setPasskey={setPasskey} onSubmit={handleSubmit}/>
            {errorMsg && <p style={{ color: 'red', marginTop: '10px' }}>{errorMsg}</p>}
          </>
          :
          <>
            Updated Successfully
          </>
        }
      </div>
    )
}