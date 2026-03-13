// define que es cliente 
"use client"

// importa el contexto
import { useUser } from "../context/userContext"

export default function Home() {

  const { user, login } = useUser()

  return (

    <div>

      <h1>Página principal</h1>

      {user ? (
        <h2>Bienvenido {user.name}</h2>
      ) : (
        <button onClick={login}>
          Iniciar sesión
        </button>
      )}

    </div>

  )
}