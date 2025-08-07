import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Text, Box, Image, VStack, Flex, Badge } from '@chakra-ui/react'

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

interface HomeProps {
  isAutoscrollEnabled: boolean
}

const Home: React.FC<HomeProps> = ({ isAutoscrollEnabled }) => {
  const [displayedVictims, setDisplayedVictims] = useState<Victim[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [allFilteredVictims, setAllFilteredVictims] = useState<Victim[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [filteredCount, setFilteredCount] = useState(0)

  const observer = useRef<IntersectionObserver | null>(null)
  const autoscrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const lastVictimElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentIndex < allFilteredVictims.length) {
          loadMoreVictims()
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, currentIndex, allFilteredVictims.length]
  )

  // Autoscroll effect
  useEffect(() => {
    if (isAutoscrollEnabled) {
      autoscrollIntervalRef.current = setInterval(() => {
        window.scrollBy({
          top: 1, // Very slow scroll - 1 pixel per interval
          behavior: 'auto',
        })
      }, 50) // Every 50ms, adjust for desired speed
    } else {
      if (autoscrollIntervalRef.current) {
        clearInterval(autoscrollIntervalRef.current)
        autoscrollIntervalRef.current = null
      }
    }

    return () => {
      if (autoscrollIntervalRef.current) {
        clearInterval(autoscrollIntervalRef.current)
      }
    }
  }, [isAutoscrollEnabled])

  useEffect(() => {
    const fetchAllVictims = async () => {
      try {
        const res = await fetch('https://data.techforpalestine.org/api/v2/killed-in-gaza.min.json')
        const data: Victim[] = await res.json()

        // Set total count
        setTotalCount(data.length)

        // Separate children and adults
        const children = data.filter((victim) => victim.age < 18)
        const adults = data.filter((victim) => victim.age >= 18)

        // Combine with children first, then adults
        const sortedData = [...children, ...adults]

        setAllFilteredVictims(sortedData)
        setFilteredCount(children.length)
        loadInitialVictims(sortedData)
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
      setDisplayedVictims((prev) => [...prev, ...allFilteredVictims.slice(currentIndex, nextIndex)])
      setCurrentIndex(nextIndex)
      setIsLoading(false)
    }, 300) // Short delay to prevent rapid consecutive loads
  }

  const formatDateOfBirth = (dob: string) => {
    if (!dob) return null
    try {
      const date = new Date(dob)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return null
    }
  }

  const getAgeDescription = (age: number, sex: 'm' | 'f') => {
    const pronoun = sex === 'f' ? 'She' : 'He'

    if (age === 0) {
      return `${pronoun} was only a few months old.`
    }

    return `${pronoun} was ${age} years old.`
  }

  return (
    <main>
      <VStack spacing={4}>
        {/* Header Message */}
        <Box mb={6} bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md" width="100%">
          <Text fontSize="lg" fontWeight="medium">
            {totalCount.toLocaleString()} brothers and sisters, including {filteredCount.toLocaleString()} children were killed by the Israeli army.
          </Text>
          <Text fontSize="lg" fontWeight="medium" mt={10}>
            We will not forget them.
          </Text>
        </Box>

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
                    <strong>{victim.en_name}</strong> was killed by the Israeli army. {getAgeDescription(victim.age, victim.sex)}{' '}
                    {victim.sex === 'f' ? 'She' : 'He'} was born on {formatDateOfBirth(victim.dob)}.
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

        {/* Show completion message when all victims are loaded */}
        {!isLoading && currentIndex >= allFilteredVictims.length && allFilteredVictims.length > 0 && (
          <Box textAlign="center" p={6} bg="gray.50" _dark={{ bg: 'gray.800' }} borderRadius="md" width="100%">
            <Text fontSize="lg" fontWeight="bold">
              You have seen all {totalCount.toLocaleString()} names.
            </Text>
            <Text fontSize="md" color="gray.600" _dark={{ color: 'gray.400' }} mt={2}>
              Each name represents a life lost, a future stolen.
            </Text>
          </Box>
        )}
      </VStack>
    </main>
  )
}

export default Home
