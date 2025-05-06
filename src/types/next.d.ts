/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module 'next/image' {
  import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
  
  export interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    loader?: any
    quality?: number
    priority?: boolean
    loading?: 'lazy' | 'eager'
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    unoptimized?: boolean
    onLoadingComplete?: () => void
  }

  export default function Image(props: ImageProps): JSX.Element
} 