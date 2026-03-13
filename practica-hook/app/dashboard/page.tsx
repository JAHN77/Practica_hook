"use client"

import { useRouter } from "next/navigation"
import { useUserStore } from "../../store/userStore"

export default function Dashboard() {

  const router = useRouter()

  const user = useUserStore((state) => state.user)

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