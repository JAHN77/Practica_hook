import { create } from "zustand"

type User = {
  name: string
}

type UserStore = {

  user: User | null

  login: () => void

  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({

  user: null,

  login: () => set({ user: { name: "Juan" } }),

  logout: () => set({ user: null })

}))