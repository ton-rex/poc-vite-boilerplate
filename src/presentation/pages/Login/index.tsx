import { Button, Text } from '@stone-payments/jade'
import { ButtonSignIn } from '~/presentation/pages/Login/components'
import { useProductList } from '~/services/products'

export function Component(): JSX.Element {
  const { data, error, isLoading, refetch } = useProductList()

  return (
    <>
      <div>
        <Text variant="display-medium">Login</Text>
      </div>

      <div>
        <ButtonSignIn />

        <Button
          onClick={() => {
            refetch()
          }}
        >
          refetch
        </Button>
      </div>

      <div>
        <Text variant="text-small">isLoading: {JSON.stringify(isLoading)}</Text>

        <Text variant="text-small">error: {JSON.stringify(error)}</Text>

        {data?.map((item) => (
          <Text variant="text-small" key={item.id}>
            id: {item.id}
          </Text>
        ))}
      </div>
    </>
  )
}

Component.displayName = 'Login'
