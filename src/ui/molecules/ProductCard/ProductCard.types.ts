import type { Props as ImageProps } from '../../atoms/Image/Image.types'

export interface ProductProps {
  name: string
  description: string
  price: number
  category: string
  image: Pick<ImageProps, 'alt' | 'src' | 'lazyLoad'>
}

export interface StyledCardProps {
  boxShadow?: boolean
}

export interface Props extends StyledCardProps {
  product: ProductProps
  cta: string
  onButtonClick: (product: ProductProps) => ProductProps
  onQuantityChange: (quantity: number) => void
}
