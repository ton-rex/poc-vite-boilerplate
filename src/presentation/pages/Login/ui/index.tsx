import { Text } from '@stone-payments/jade'
import type { LoginContainerProps } from '~/presentation/pages/Login/types'
import { ButtonSignIn } from '~/presentation/pages/Login/ui/components'

export const LoginContainer: React.FC<LoginContainerProps> = () => {
  return (
    <>
      <div>
        <Text variant="display-medium">Login</Text>
      </div>

      <ButtonSignIn />
    </>
  )
}
