import jade from '@stone-payments/jade-design-tokens/js/ton'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'

type Props = {
  children?: React.ReactNode
}

export const StyledThemeProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={jade.theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
