import { create } from 'zustand'

interface BusinessState {
  name: string
  setName: (name: string) => void
}

export const useBusinessStore = create<BusinessState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
}))
