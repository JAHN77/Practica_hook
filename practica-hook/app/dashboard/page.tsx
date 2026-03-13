"use client"

import { useRouter } from "next/navigation"
import { useUser } from "../../context/userContext"

export default function Dashboard() {

  const router = useRouter()

  const { user } = useUser()

  return (

    <div>

      <h1>Dashboard</h1>

      <h2>Usuario: {user?.name}</h2>

      <button onClick={() => router.back()}>
        Volver
      </button>

    </div>

  )
}