type Loading = 'lazy' | 'eager' | undefined

export interface StyledImageProps {
  maxWidth?: string
  thumbnail?: boolean // border-radius flag
}

export interface Props extends StyledImageProps {
  src: string
  alt: string
  ariaLabel: string
  lazyLoad?: boolean
  loading?: Loading
  onImageClick: () => void
}
