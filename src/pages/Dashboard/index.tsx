import { Tag, Text } from '@stone-payments/jade'

export function Component(): JSX.Element {
  return (
    <div>
      <Text variant='display-medium'>Dashboard</Text>

      <Tag size="medium" variant="info">Multimarca</Tag>
      <Tag size="medium" variant="brand">Mulplataforma</Tag>
      <Tag size="medium" variant="negative">Multitema</Tag>
    </div>
  )
}

Component.displayName = "Dashboard"