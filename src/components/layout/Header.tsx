import React from 'react'
import { Flex, useColorModeValue, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton, Link, Box } from '@chakra-ui/react'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { FaGithub } from 'react-icons/fa'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'

interface Props {
  className?: string
}

export function Header({ className = '' }: Props) {
  const bgColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <Flex as="header" className={className} bg={bgColor} px={4} py={5} mb={8} alignItems="center">
      <LinkComponent href="/" color="white" _hover={{ color: 'white' }}>
        <Box position="relative" width="60px" height="25px" overflow="hidden" borderRadius="sm">
          <Image priority layout="fill" objectFit="cover" alt="palestine-flag" src="/palestine-flag.png" />
        </Box>
      </LinkComponent>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="ghost" size="sm" />
          <MenuList>
            <LinkComponent href="/" color="white" _hover={{ color: '#E4312b' }}>
              <MenuItem fontSize="md">Home</MenuItem>
            </LinkComponent>
            <LinkComponent href="/about" color="white" _hover={{ color: '#000000' }}>
              <MenuItem fontSize="md">About</MenuItem>
            </LinkComponent>
            <LinkComponent href="/timeline" color="white" _hover={{ color: '#149954' }}>
              <MenuItem fontSize="md">Timeline</MenuItem>
            </LinkComponent>
          </MenuList>
        </Menu>
        <IconButton
          as={Link}
          href="https://github.com/w3hc/palestine"
          aria-label="GitHub"
          icon={<FaGithub />}
          variant="ghost"
          size="sm"
          color="white"
          _hover={{ color: 'white', bg: 'transparent' }}
          isExternal
        />
        <Box mb={1} ml={2}>
          <ThemeSwitcher />
        </Box>
      </Flex>
    </Flex>
  )
}
