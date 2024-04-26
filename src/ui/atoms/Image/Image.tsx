import * as React from 'react'

import * as Styled from './Image.styled'
import type { Props } from './Image.types'

export const Image: React.FC<Props> = (props: Props) => {
  const { src, alt, thumbnail, lazyLoad, maxWidth, onImageClick, ...rest } = props
  console.log('thumbnail', thumbnail)
  return (
    <Styled.Container onClick={onImageClick}>
      <Styled.Image
        src={src}
        alt={alt}
        thumbnail={thumbnail}
        maxWidth={maxWidth}
        loading={lazyLoad !== undefined ? 'lazy' : undefined}
        {...rest}
      />
    </Styled.Container>
  )
}
