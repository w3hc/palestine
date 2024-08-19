import React from 'react'
import { Text, VStack, Input, Textarea, Button, FormControl, FormLabel, useColorModeValue, useToast } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'

export default function About() {
  const inputBg = useColorModeValue('white', 'gray.700')
  const inputColor = useColorModeValue('gray.800', 'white')
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: 'Message sent',
      description: 'Your message was properly sent. Thank you for your input!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <>
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
                <FormLabel htmlFor="name" fontSize="md">
                  Name
                </FormLabel>
                <Input type="text" name="name" id="name" bg={inputBg} color={inputColor} fontSize="md" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email" fontSize="lg">
                  Email
                </FormLabel>
                <Input type="email" name="email" id="email" bg={inputBg} color={inputColor} fontSize="md" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="message" fontSize="md">
                  Message
                </FormLabel>
                <Textarea name="message" id="message" bg={inputBg} color={inputColor} fontSize="md" />
              </FormControl>

              <Button type="submit" colorScheme="blue" fontSize="md">
                Send
              </Button>
            </VStack>
          </form>
        </VStack>
      </main>
    </>
  )
}
