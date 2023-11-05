import { ThemeProvider } from 'styled-components'
import jade from '@stone-payments/jade-design-tokens/js/ton'

type Props = {
	children?: React.ReactNode
}

export const StyledThemeProvider: React.FC<Props> = ({ children }) => (
	<ThemeProvider theme={jade.theme}>{children}</ThemeProvider>
)
