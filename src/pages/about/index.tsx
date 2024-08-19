import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Palestine</title>
      </Head>
      <main>
        <VStack spacing={6} align="stretch">
          <Text fontSize="xl">The home page of this website displays the name of the persons killed in Gaza since October 7, 2023. </Text>
          <Text fontSize="xl">
            I want to thank all contributors involved in building and maintaining this dataset. You can learn more about it by checking Tech for
            Palestine <LinkComponent href="https://data.techforpalestine.org">website</LinkComponent>,{' '}
            <LinkComponent href="https://github.com/TechForPalestine/palestine-datasets">GitHub repo</LinkComponent>, and{' '}
            <LinkComponent href="https://data.techforpalestine.org/docs/killed-in-gaza">docs</LinkComponent>.
          </Text>
          <Text fontSize="xl">
            Tech for Palestine updates the list daily as new reports are released. The main sources are Gaza&apos;s Ministry of Health and Gaza&apos;s
            Government Media Office.
          </Text>
          <Text fontSize="xl">Feel free to contact me if you want to add an event in the timeline, report a bug, or suggest an improvement.</Text>
        </VStack>
      </main>
    </>
  )
}
