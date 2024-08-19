import React from 'react'
import { Text, VStack, Box, Center } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <main>
        <VStack spacing={6} align="stretch">
          <Text fontSize="xl">The home page of this website displays the names of people killed in Gaza since October 7, 2023.</Text>
          <Text fontSize="xl">
            I want to thank all contributors involved in building and maintaining this dataset. You can learn more about it by checking the Tech for
            Palestine <LinkComponent href="https://data.techforpalestine.org">website</LinkComponent>,{' '}
            <LinkComponent href="https://github.com/TechForPalestine/palestine-datasets">GitHub repo</LinkComponent>, and{' '}
            <LinkComponent href="https://data.techforpalestine.org/docs/killed-in-gaza">docs</LinkComponent>.
          </Text>
          <Text fontSize="xl">
            Tech for Palestine updates the list daily as new reports are released. The main sources are the Gaza Ministry of Health and the Government
            Media Office.
          </Text>
          <Text fontSize="xl">Feel free to contact me if you want to add an event to the timeline, report a bug, or suggest an improvement.</Text>
          <br />
          <Center>
            <VStack>
              <Box position="relative" width="200px" height="200px" overflow="hidden" borderRadius="lg">
                <Image priority layout="fill" objectFit="cover" alt="qr-code" src="/palestine-li.png" />
              </Box>
              <LinkComponent href="http://palestine.li">http://palestine.li</LinkComponent>
            </VStack>
          </Center>
          <br />
          <br />
        </VStack>
      </main>
    </>
  )
}
