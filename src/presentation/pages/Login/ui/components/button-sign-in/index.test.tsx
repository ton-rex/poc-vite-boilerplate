import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { render, screen, type RenderResult } from '~/tests'
import { ButtonSignIn } from '.'

vi.mock('@stone-payments/jade', () => {
  return {
    Button: ({ children: text }: { children: string }) => {
      return <button>{text}</button>
    },
  }
})

const makeSut = ({ ...parameters }) => {
  return render(<ButtonSignIn {...parameters} />)
}

describe('ButtonSignIn', () => {
  let component: RenderResult

  beforeAll(() => {
    component = makeSut({})
  })

  afterAll(() => {
    component.unmount()
  })

  it('should render the button with the text "Sign In"', () => {
    const signInButton = screen.getByText('Sign In')
    expect(signInButton).not.toBeNull()
  })
})
