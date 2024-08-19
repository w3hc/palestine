import React from 'react'
import { Text, VStack, Input, Textarea, Button, FormControl, FormLabel, useColorModeValue, useToast } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import Head from 'next/head'

export default function About() {
  const inputBg = useColorModeValue('white', 'gray.700')
  const inputColor = useColorModeValue('gray.800', 'white')
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        toast({
          title: 'Message sent',
          description: 'Your message was properly sent. Thank you for your input!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        form.reset()
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: 'There was an error sending your message. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        console.error('Error:', error)
      })
  }

  return (
    <>
      <Head>
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
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
          <Text fontSize="xl">Feel free to contact me if you want to add an event in the timeline, report a bug, or suggest an improvement:</Text>
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel htmlFor="name" fontSize="lg">
                  Name
                </FormLabel>
                <Input type="text" name="name" id="name" bg={inputBg} color={inputColor} fontSize="lg" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email" fontSize="lg">
                  Email
                </FormLabel>
                <Input type="email" name="email" id="email" bg={inputBg} color={inputColor} fontSize="lg" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="message" fontSize="lg">
                  Message
                </FormLabel>
                <Textarea name="message" id="message" bg={inputBg} color={inputColor} fontSize="lg" />
              </FormControl>

              <Button type="submit" colorScheme="blue" fontSize="lg">
                Send
              </Button>
            </VStack>
          </form>
        </VStack>
      </main>
    </>
  )
}
