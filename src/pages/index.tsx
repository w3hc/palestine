import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'

interface Victim {
  id: string
  name: string
  en_name: string
  dob: string
  age: number
  sex: 'm' | 'f'
  source: string
}

interface HomeProps {
  victims: Victim[]
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'killed-in-gaza.json')
  const fileContents = await fs.promises.readFile(filePath, 'utf8')
  const data: Victim[] = JSON.parse(fileContents)

  return {
    props: {
      victims: data,
    },
  }
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

const Home: React.FC<HomeProps> = ({ victims }) => {
  return (
    <main>
      <Box as="ul" listStyleType="none" className="space-y-4">
        {victims.map((victim) => (
          <li key={victim.id} className="border p-4 rounded-md shadow-sm">
            <Text fontSize="3xl">{victim.name}</Text>
            <br />
            <p className="text-gray-600">
              <strong>{victim.en_name}</strong> was killed by the Israeli army.
            </p>
            <p className="text-sm text-gray-500">
              {getGenderPronoun(victim.sex)} was born on {formatDate(victim.dob)}.
            </p>
            <br />
            <br />
            <br />
          </li>
        ))}
      </Box>
    </main>
  )
}

export default Home
