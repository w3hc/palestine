import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Text, Box, Image, VStack, Flex } from '@chakra-ui/react'

interface Victim {
  id: string
  name: string
  en_name: string
  dob: string
  age: number
  sex: 'm' | 'f'
  source: string
}

const ITEMS_PER_BATCH = 500

const Home: React.FC = () => {
  const [displayedVictims, setDisplayedVictims] = useState<Victim[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [allVictims, setAllVictims] = useState<Victim[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastVictimElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentIndex < allVictims.length) {
          loadMoreVictims()
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, currentIndex, allVictims.length]
  )

  useEffect(() => {
    const fetchAllVictims = async () => {
      try {
        const res = await fetch('https://data.techforpalestine.org/api/v2/killed-in-gaza.min.json')
        const data: Victim[] = await res.json()
        setAllVictims(data)
        loadInitialVictims(data)
      } catch (error) {
        console.error('Failed to fetch victims:', error)
        setIsLoading(false)
      }
    }

    fetchAllVictims()
  }, [])

  const loadInitialVictims = (victims: Victim[]) => {
    setDisplayedVictims(victims.slice(0, ITEMS_PER_BATCH))
    setCurrentIndex(ITEMS_PER_BATCH)
    setIsLoading(false)
  }

  const loadMoreVictims = () => {
    setIsLoading(true)
    const nextIndex = currentIndex + ITEMS_PER_BATCH

    setTimeout(() => {
      setDisplayedVictims((prev) => [...prev, ...allVictims.slice(currentIndex, nextIndex)])
      setCurrentIndex(nextIndex)
      setIsLoading(false)
    }, 300) // Short delay to prevent rapid consecutive loads
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getGenderPronoun = (sex: 'm' | 'f') => {
    return sex === 'm' ? 'He' : 'She'
  }

  return (
    <main>
      <VStack spacing={4}>
        <Box as="ul" listStyleType="none" width="100%">
          {displayedVictims.map((victim, index) => (
            <li key={victim.id} ref={index === displayedVictims.length - 1 ? lastVictimElementRef : null}>
              <Flex
                className="border p-4 rounded-md shadow-sm mb-4"
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="stretch">
                <Box flex="1" pr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
                  <Text className="text-gray-600">
                    <strong>{victim.en_name}</strong> was killed by the Israeli army.
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {getGenderPronoun(victim.sex)} was born on {formatDate(victim.dob)}.
                  </Text>
                </Box>
                <Box flex="1" textAlign="right" display="flex" justifyContent="flex-end" alignItems="center">
                  <Text fontSize="3xl">{victim.name}</Text>
                </Box>
              </Flex>
              <br />
            </li>
          ))}
        </Box>
        {isLoading && (
          <Box>
            <Image src="/loader.svg" alt="Loading" />
          </Box>
        )}
      </VStack>
    </main>
  )
}

export default Home
