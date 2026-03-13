// define que es cliente 
"use client"

// importa el contexto y el enrutador
import { useUser } from "../context/userContext"
import {useRouter} from "next/navigation"
 
export default function Home() {

  const { login } = useUser()
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