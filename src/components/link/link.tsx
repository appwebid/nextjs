import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

interface LinkProps
  extends NextLinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  innerRef?: React.Ref<HTMLAnchorElement>;
}

export function Link({ children, href, innerRef, ...props }: LinkProps) {
  return (
    <NextLink href={href} ref={innerRef} {...props}>
      {children}
    </NextLink>
  );
}
