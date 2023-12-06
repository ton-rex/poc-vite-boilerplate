import { create } from 'zustand'
import { logger } from './logger'

interface GlobalState {
  isAuthenticated: boolean
}

export interface GlobalStore extends GlobalState {
  setIsAuthenticated: (args: GlobalState['isAuthenticated']) => void
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  isAuthenticated: false,
}

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }))
      },
    }),
    'globalStore',
  ),
)

export default useGlobalStore
