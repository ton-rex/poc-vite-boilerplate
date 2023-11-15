import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ButtonSignIn } from '.'

vi.mock('@stone-payments/jade', () => {
	return {
		Button: ({ children: text }: { children: string }) => {
			return <button>{text}</button>
		},
	}
})

const makeSut = () => {
	return render(<ButtonSignIn />)
}

describe('ButtonSignIn', () => {
	it('should render the button with the text "Sign In"', () => {
		makeSut()
		const signInButton = screen.getByText('Sign In')
		expect(signInButton).not.toBeNull()
	})
})
