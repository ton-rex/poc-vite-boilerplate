import { Tag, Text } from '@stone-payments/jade'
import styled from 'styled-components'
import { PRODUCTS_KEYS, type Product } from '~/app/services/products/types'
import { useGetList } from '~/app/services/request'
import type { DashboardContainerProps } from '~/presentation/pages/Dashboard/types'

const NewTag = styled.button`
  border: none;
  font-size: ${(props) => props.theme.text.small['font-size']};
  font-family: ${(props) => props.theme['font-family'].global};
  font-weight: ${(props) => props.theme.text['font-weight'].semibold};
  background: ${(props) => props.theme.color.background.surface};
  color: ${(props) => props.theme.color.content.info};
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px 8px;
`

export const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { data } = useGetList<Array<Product>>(PRODUCTS_KEYS.LIST, '/products')

  return (
    <div>
      <Text variant="display-medium">Dashboard</Text>

      <Tag size="medium" variant="info">
        Multimarca
      </Tag>
      <Tag size="medium" variant="brand">
        Mulplataforma
      </Tag>
      <Tag size="medium" variant="negative">
        Multitema
      </Tag>

      <br />

      {data?.map((item) => <NewTag key={item.id}>ID: {item.id}</NewTag>)}
    </div>
  )
}
