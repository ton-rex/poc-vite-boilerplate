import { RouterProvider } from 'react-router-dom'
import { router } from '../routes'
import { StyledThemeProvider } from './theme'

export interface ProvidersProps {}

function Providers(): React.ReactElement {
	return (
		<div className="jade ton">
			<StyledThemeProvider>
				<RouterProvider router={router} />
			</StyledThemeProvider>
		</div>
	)
}

export default Providers
