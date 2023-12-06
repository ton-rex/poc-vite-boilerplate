/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import { expect, test } from 'vitest'
import { render } from '~/tests'

const pascalCaseToSentence = (pascalString: string) =>
  pascalString.replace(/[A-Z]/g, (match, index) => {
    const loweredLetter = match.toLowerCase()
    if (index !== 0) {
      return ` ${loweredLetter}`
    }
    return `${loweredLetter}`
  })

// @ts-ignore
export const testSnapshots = (states) => {
  Object.keys(states).forEach((componentName) => {
    const stateName = pascalCaseToSentence(componentName)
    if (!stateName.includes('interactive')) {
      test(`renders '${stateName}' state correctly`, () => {
        const Element = states[componentName]

        expect(render(<Element />)).toMatchSnapshot()
      })
    }
  })
}
