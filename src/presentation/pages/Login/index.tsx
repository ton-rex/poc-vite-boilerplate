import type React from 'react'
import useGlobalStore from '~/infra/store/useGlobalStore'
import { States, type PageProps } from '~/presentation/pages/Login/types'
import { LoginContainer } from '~/presentation/pages/Login/ui'

export const Component: React.FC<PageProps> = () => {
  const state = States.default

  const { setIsAuthenticated } = useGlobalStore((state) => state)

  const handleDoLogin = () => {
    setIsAuthenticated(true)
  }

  return <LoginContainer state={state} doLogin={handleDoLogin} />
}

Component.displayName = 'Login'
