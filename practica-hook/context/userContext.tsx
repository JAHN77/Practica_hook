"use client"

import { createContext, useContext, useState, ReactNode } from "react"


// definimos la estructura del usuario
type User = {
  name: string
}

// definimo el contexto
type UserContextType = {
  user: User | null
  login: () => void
}

// creacion de un contexto
const UserContext = createContext<UserContextType | undefined>(undefined)

// se crea un provider que es el que comparte el contexto con toda la apliacion
export function UserProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState<User | null>(null)

  const login = () => {
    setUser({ name: "Juan" })
  }

  
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {

  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser debe usarse dentro de UserProvider")
  }

  return context
}