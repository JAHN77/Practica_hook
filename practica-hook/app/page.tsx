"use client"

import { useRouter } from "next/navigation"
import { useUserStore } from "../store/userStore"

export default function Home() {

  const login = useUserStore((state) => state.login)

  const router = useRouter()

  const handleLogin = () => {

    login()

    router.push("/dashboard")

  }

  return (

    <div>

      <h1>Página principal</h1>

      <button onClick={handleLogin}>
        Iniciar sesión
      </button>

    </div>

  )
}