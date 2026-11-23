import { create } from 'zustand'

interface VoiceState {
  isListening: boolean
  setIsListening: (listening: boolean) => void
}

export const useVoiceStore = create<VoiceState>((set) => ({
  isListening: false,
  setIsListening: (listening) => set({ isListening: listening }),
}))
