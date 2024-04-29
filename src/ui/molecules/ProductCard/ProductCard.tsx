import * as React from 'react'

import { Button } from '../../atoms/Button'
import { Image } from '../../atoms/Image'
import { Stepper } from '../Stepper'
import * as Styled from './ProductCard.styled'
import type { Props } from './ProductCard.types'

export const ProductCard: React.FC<Props> = (props: Props) => {
  const { boxShadow, product, cta, onButtonClick } = props

  function handleButtonClick (): void {
    // .......
    onButtonClick(props.product)
  }

  return (
    <Styled.Card boxShadow={boxShadow}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '6px 0 6px 0',
          width: '100%'
        }}
      >
        <Stepper max={10} onStepperChange={props.onQuantityChange} />
        <Image
          src={product.image.src}
          alt={product.image.alt}
          lazyLoad={true}
          ariaLabel='imagen-producto'
          onImageClick={() => {}}
          />
      </div>
      <Styled.Body>
        <Styled.Title>{product.name}</Styled.Title>
        <Styled.Text>{product.description}</Styled.Text>
        <Button label={cta} onClick={handleButtonClick} />
      </Styled.Body>
    </Styled.Card>
  )
}
