import styled from 'styled-components'

import { type StyledCardProps } from './ProductCard.types'
// clamp
export const Card = styled.article<StyledCardProps>`
  box-shadow: ${(props) => props.boxShadow === true ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'}
  max-width: 18rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Body = styled.div`
  padding: 0.5rem;
  text-align: center;
`

export const Title = styled.h3`
  margin-bottom: 0.2rem;
`

export const Text = styled.p`
  margin: 1rem 0;
`
