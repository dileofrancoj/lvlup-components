import { fireEvent, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { createRender } from '../../../../tests/helper'
import { Image } from './Image'
import type { Props } from './Image.types'

/*
export function createRender<TProps>(Component: React.ComponentType<Partial<TProps>>) {
  return (props: Partial<TProps> = {}) => ({
    // user: userEvent.setup(),
    ...render(<Component {...props} />),
    // wrapper: '' //
  })
}
*/
describe('Image', () => {
  let defaultProps: Props
  const render = createRender(Image)
  beforeEach(() => {
    defaultProps = {
      src: 'some-image-src',
      onImageClick: vi.fn(),
      alt: 'some-alt-description',
      ariaLabel: 'pipa-abandono-el-grupo'
    }
  })

  it('Should render the Image component', () => {
    render(defaultProps)
    const element = screen.getByAltText('some-alt-description')
    expect(element).toBeDefined() // averiguar porque no está extendiendo matchers (setup.ts)
    expect(element.getAttribute('src')).toBe('some-image-src')
    expect(element.getAttribute('loading')).toBeFalsy()
  })
  it('should throw an event on click', () => {
    defaultProps.lazyLoad = true
    render(defaultProps)
    const element = screen.getByAltText('some-alt-description')
    expect(element.getAttribute('loading')).toBe('lazy')
    fireEvent.click(element)
    expect(defaultProps.onImageClick).toHaveBeenCalledOnce()
  })
})
