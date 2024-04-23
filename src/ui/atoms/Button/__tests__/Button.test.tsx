import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Button } from '..'
import type { Props } from '../Button.props'

describe('Button', () => {
  let defaultProps: Props

  beforeEach(() => {
    defaultProps = {
      label: 'Hello world',
      onClick: vi.fn()
    }
  })
  it('Should render the base button', () => {
    /*
     0. Que exista un elemento boton
     1. Que se visualice el label
     2. El color sea el primary por default
     // const arr = screen.getAllByText('Hello wrld') // Detecta múltiples elementos
    */
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' }) // name !== name input
    expect(btn).toBeDefined()
    expect(btn.getAttribute('variant')).toBe('primary')
  })
  it('Should render the base button with secondary variant', () => {
    defaultProps.variant = 'secondary'
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    expect(btn).toBeDefined()
    // @ts-expect-error definition types
    expect(btn).toHaveStyle('background-color: #6c757d')
    expect(btn.getAttribute('variant')).toBe('secondary')
  })
  it('should call the onClick callback', () => {
    render(<Button {...defaultProps} />)
    const btn = screen.getByRole('button', { name: 'Hello world' })
    fireEvent.click(btn)
    expect(defaultProps.onClick).toHaveBeenCalledOnce()
  })
})
