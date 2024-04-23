/* eslint-disable @typescript-eslint/no-unsafe-argument */
import styled from 'styled-components'

import type { VariantProps } from './Button.props'

interface LabelProps {
  textColor: React.CSSProperties['color']
}

interface ButtonProps {
  variant: VariantProps
}

const getButtonColor = (variant: VariantProps): string => {
  switch (variant) {
    case 'primary':
      return '#007bff'
    case 'secondary':
      return '#6c757d'
    case 'success':
      return '#28a745'
    default:
      return '#007bff'
  }
}

export const Label = styled.span<LabelProps>`
  color: ${(props) => props.textColor !== null ? props.textColor : 'white'}
`

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #fff;
  border-radius: 6px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  background-color: ${(props) => getButtonColor(props.variant)}
`
