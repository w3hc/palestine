import React from 'react'
import { Box, VStack, Text, Flex, useColorModeValue, Link, Heading } from '@chakra-ui/react'

const timelineEvents = [
  {
    date: 'July 24, 2024',
    event: 'Netanyahu speaks to the US Congress.',
    link: 'https://www.youtube.com/watch?v=rKkcstwPd9k',
  },
  {
    date: 'July 23, 2024',
    event: 'Hamas and Fatah sign unity deal in Beijing aimed at Gaza governance.',
    link: 'https://www.aljazeera.com/news/2024/7/23/palestinian-rivals-hamas-and-fatah-sign-unity-deal-brokered-by-china',
  },

  {
    date: 'July 9, 2024',
    event: 'The ICJ issues an advisory opinion confirming that the West Bank and East Jerusalem are occupied territories.',
    link: 'https://www.icj-cij.org/case/131',
  },
  {
    date: 'April 24, 2024',
    event: "Biden signs a $26 billion USD 'aid' package for Israel.",
    link: 'https://www.washingtonpost.com/world/2024/04/24/israel-hamas-war-news-gaza-palestine/',
  },
  {
    date: 'March 1, 2024',
    event: 'ICC Prosecutor Karim Khan submits an application for arrest warrants against Netanyahu.',
    link: 'https://www.youtube.com/watch?v=tdJNAgI7e0I',
  },
  {
    date: 'January 26, 2024',
    event: "The ICJ orders provisional measures in response to South Africa's genocide case against Israel.",
    link: 'https://www.icj-cij.org/case/192',
  },
  {
    date: 'February 7, 2024',
    event: 'The Israeli army continues its attacks, particularly around Rafah.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'January 2, 2024',
    event: 'The Israeli army intensifies its attacks in southern Gaza.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'December 1, 2023',
    event: 'The Israeli army continues its attacks in central and southern Gaza, notably in Khan Younis.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'November 24, 2023',
    event: 'The Israeli army intensifies its attacks in southern Gaza after a temporary truce.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'November 15, 2023',
    event: 'The Israeli army attacks Al-Shifa hospital.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'November 1, 2023',
    event: 'The Israeli army expands its ground offensive, particularly around Gaza City.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'October 27, 2023',
    event: 'The Israeli army begins its ground incursion in northern Gaza.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'October 13, 2023',
    event: 'The Israeli army orders the evacuation of northern Gaza, intensifying its bombardments.',
    link: 'https://en.wikipedia.org/wiki/Israeli_invasion_of_the_Gaza_Strip',
  },
  {
    date: 'October 7, 2023',
    event:
      "The 'Al-Aqsa Flood' attack results in approximately 1,200 deaths in Israel and the taking of around 240 hostages. The Israeli army starts airstrikes in response to the attack.",
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

        <Box width="100%" textAlign="center" mt={200} mb={8}>
          <Heading as="h2" size="2xl" color={textColor} fontWeight="bold">
            History did not start on October 7th
          </Heading>
        </Box>
      </VStack>
    </Box>
  )
}

export default TimelineComponent
