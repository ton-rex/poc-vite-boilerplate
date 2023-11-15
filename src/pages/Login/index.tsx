import { Text } from '@stone-payments/jade'
import { ButtonSignIn } from '~/pages/Login/components'

export function Component(): JSX.Element {
  return (
    <>
      <div>
        <Text variant="display-medium">Login</Text>
      </div>
      <div>
        <ButtonSignIn />
      </div>
    </>
  )
}

Component.displayName = 'Login'
