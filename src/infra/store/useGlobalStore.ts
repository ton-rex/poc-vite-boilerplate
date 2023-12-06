import { create } from 'zustand'
import { logger } from './logger'

interface GlobalState {
  isAuthenticated: boolean
}

export interface GlobalStore extends GlobalState {
  setIsAuthenticated: (args: GlobalState['isAuthenticated']) => void
}

const isAuthenticatedKey = 'isAuthenticatedKey'

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  isAuthenticated: !!window.localStorage.getItem(isAuthenticatedKey),
}

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => {
          window.localStorage.setItem(
            isAuthenticatedKey,
            JSON.stringify(isAuthenticated),
          )

          return { isAuthenticated }
        })
      },
    }),
    'globalStore',
  ),
)

export default useGlobalStore
