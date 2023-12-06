import { describe, vi } from 'vitest'
import { testSnapshots } from '~/infra/utils/tests'
import * as states from './componentStates'

vi.mock('@stone-payments/jade', () => {
  return {
    Button: ({ children: text }: { children: string }) => {
      return <button>{text}</button>
    },
    Text: ({ children: text }: { children: string }) => {
      return <p>{text}</p>
    },
    Tag: ({ children: text }: { children: string }) => {
      return <p>{text}</p>
    },
  }
})

describe('DashboardContainer', (): void => {
  testSnapshots(states)
})
