import React from 'react'
import { Box, VStack, Text, Flex, useColorModeValue, Link, Heading } from '@chakra-ui/react'

// TODO: Add more events (select attacks, UN resolutions, etc.)
const timelineEvents = [
  {
    date: 'July 24, 2024',
    event: 'Netanyahu is invited to speak to the US Congress.',
    link: 'https://www.youtube.com/watch?v=rKkcstwPd9k',
  },
  {
    date: 'July 9, 2024',
    event: 'ICJ issues advisory opinion confirming West Bank and East Jerusalem as occupied territories.',
    link: 'https://www.icj-cij.org/case/131',
  },
  {
    date: 'April 24, 2004',
    event: "Bidens signs a $26 billion USD 'aid' for Israel.",
    link: 'https://www.washingtonpost.com/world/2024/04/24/israel-hamas-war-news-gaza-palestine/',
  },
  {
    date: 'March 1, 2024',
    event: 'ICC Prosecutor Karim Khan submits an application for arrest warrants against Netanyahu.',
    link: 'https://www.youtube.com/watch?v=tdJNAgI7e0I',
  },
  {
    date: 'January 26, 2024',
    event: "ICJ orders provisional measures in response to South Africa's genocide case against Israel.",
    link: 'https://www.icj-cij.org/case/192',
  },
  {
    date: 'October 7, 2023',
    event: 'Operation Al-Aqsa Flood results in approximately 1,200 deaths in Israel and around 240 hostages taken.',
    link: 'https://www.youtube.com/watch?v=_0atzea-mPY',
  },
]

const TimelineComponent = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const lineColor = '#149954'
  const textColor = useColorModeValue('gray.800', 'gray.200')

  return (
    <Box position="relative" paddingBottom="100vh">
      <VStack spacing={0} position="relative" alignItems="center">
        <Box position="absolute" left="50%" top="0" bottom="-1000vh" width="2px" bg={lineColor} zIndex={-1} />

        {timelineEvents.map((event, index) => (
          <Flex key={index} width="100%" justify={index % 2 === 0 ? 'flex-end' : 'flex-start'} mb={8}>
            <Link href={event.link} isExternal width="45%" _hover={{ textDecoration: 'none' }}>
              <Box
                bg={bgColor}
                p={4}
                borderRadius="md"
                boxShadow="md"
                position="relative"
                transition="all 0.2s"
                _hover={{
                  transform: 'scale(1.02)',
                  boxShadow: 'lg',
                }}>
                <Text fontWeight="bold">{event.date}</Text>
                <br />
                <Text>{event.event}</Text>
                <Box
                  position="absolute"
                  top="50%"
                  left={index % 2 === 0 ? '-8px' : 'auto'}
                  right={index % 2 === 0 ? 'auto' : '-8px'}
                  width="16px"
                  height="16px"
                  borderRadius="50%"
                  bg={lineColor}
                  transform="translateY(-50%)"
                />
              </Box>
            </Link>
          </Flex>
        ))}

        <br />

        <Box width="100%" textAlign="center" mt={16} mb={8}>
          <Heading as="h2" size="2xl" color={textColor} fontWeight="bold">
            History did not start on October 7th
          </Heading>
        </Box>
      </VStack>
    </Box>
  )
}

export default TimelineComponent
