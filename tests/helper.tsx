import { render } from '@testing-library/react'
import * as React from 'react'

export function createRender<TProps>(Component: React.ComponentType<TProps>) {
  return (props: Partial<TProps> = {}) => ({
    // user: userEvent.setup(),
    // @ts-expect-error omit required props
    ...render(<Component {...props} />),
    // wrapper:
  })
}
