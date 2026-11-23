export function useRealtimeVoice() {
  return {
    isListening: false,
    transcript: '',
    startListening: () => {},
    stopListening: () => {},
  }
}
