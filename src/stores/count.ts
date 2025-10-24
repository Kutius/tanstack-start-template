import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface CountState {
  count: number
}

interface CountActions {
  increment: () => void
  decrement: () => void
  reset: () => void
  incrementByAmount: (amount: number) => void
}

export type CountStore = CountState & CountActions

export const useCountStore = create<CountStore>()(
  immer(set => ({
    count: 0,

    increment: () =>
      set((state) => {
        state.count++
      }),
    decrement: () =>
      set((state) => {
        state.count--
      }),
    reset: () =>
      set((state) => {
        state.count = 0
      }),
    incrementByAmount: (amount: number) =>
      set((state) => {
        state.count += amount
      }),
  }),
  ),
)

export const useCount = () => useCountStore(state => state.count)
