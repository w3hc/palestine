import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

interface Props extends LinkProps {
  href: string
  children: ReactNode
  isExternal?: boolean
  className?: string
  onClick?: () => void
}

export function LinkComponent({
  href,
  children,
  isExternal,
  className = '',
  color = '#45a2f8',
  _hover = { color: '#8c1c84' },
  onClick,
  ...rest
}: Props) {
  const isExternalLink = href.match(/^([a-z0-9]*:|.{0})\/\/.*$/) || isExternal

  const linkProps = {
    className,
    color,
    _hover,
    onClick,
    ...rest,
  }

  if (isExternalLink) {
    return (
      <Link {...linkProps} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    )
  }

  return (
    <Link as={NextLink} {...linkProps} href={href}>
      {children}
    </Link>
  )
}
