import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

interface Props {
  href: string
  children: ReactNode
  isExternal?: boolean
  className?: string
  onClick?: () => void
}

export function LinkComponent(props: Props) {
  const className = props.className ?? ''
  const isExternal = props.href.match(/^([a-z0-9]*:|.{0})\/\/.*$/) || props.isExternal
  const color = '#45a2f8'

  const linkProps = {
    className,
    color: color,
    _hover: { color: '#8c1c84' },
    onClick: props.onClick,
  }

  if (isExternal) {
    return (
      <Link {...linkProps} href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </Link>
    )
  }

  return (
    <Link as={NextLink} {...linkProps} href={props.href}>
      {props.children}
    </Link>
  )
}
