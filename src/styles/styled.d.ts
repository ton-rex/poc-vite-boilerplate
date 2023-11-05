import 'styled-components'
import type jade from '@stone-payments/jade-design-tokens/js/ton'

export type ITheme = typeof jade.theme

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
