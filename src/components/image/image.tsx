import { default as NextImage, ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
  innerRef?: React.Ref<HTMLImageElement>;
}

export function Image({ src, alt, innerRef, ...props }: ImageProps) {
  return <NextImage src={src} alt={alt} ref={innerRef} {...props} />;
}
