import * as React from 'react'

import type { Props } from './Button.props'
import * as Styled from './Button.styled'

export const Button: React.FC<Props> = ({ variant = 'primary', textColor, label, onClick, ...props }) => {
  return (
    <Styled.Button onClick={onClick} variant={variant} {...props} data-testid='button'>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.Button>
  )
}
