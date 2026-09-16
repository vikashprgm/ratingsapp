"use client"

import { GenerateCard } from "@/components/generateCard"
import { useState } from "react"
import { createStoreAction } from "../action" // Import your server action
import { LinkPreview } from "@/components/linkPreview"

export default function CreateStore() {
    const [name, setName] = useState<string>("")
    const [url, setUrl] = useState<string>("")
    const [passkey, setPasskey] = useState<string>("")
    const [id, setId] = useState<string>("sdkvmsdkvsdkvw3ofmqom")
    const [success, setSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setErrorMsg("")

      // Call the secure server action
      const response = await createStoreAction(name, url, passkey)

      if (response.error) {
        setErrorMsg(response.error)
      } else if (response.success) {
        setId(response.id)
        setSuccess(true)
      }
    }

    return(
      <div>
        { !success ?
          <>
            <GenerateCard 
              onSubmit={handleSubmit} 
              setName={setName} 
              setLink={setUrl} 
              setPasskey={setPasskey} 
            />
            {errorMsg && <p style={{ color: 'red', marginTop: '10px' }}>{errorMsg}</p>}
          </>
          :
          <>
            <LinkPreview link={id}/>
          </>
        }
      </div>
    )
}