import React from 'react'
import fs from 'fs'
import path from 'path'
import { Text, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { LinkComponent } from '../components/layout/LinkComponent'
import { Head } from '../components/layout/Head'
import { SITE_NAME, SITE_DESCRIPTION } from '../utils/config'

// Define the shape of a victim object
interface Victim {
  id: string
  name: string
  en_name: string
  dob: string
  age: number
  sex: 'm' | 'f'
  source: string
}

// Define the shape of the props for the Home component
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

const Home: React.FC<HomeProps> = ({ victims }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      <Head title={SITE_NAME} description={SITE_DESCRIPTION} />
      <main>
        <ul className="space-y-4">
          {victims.map((victim) => (
            <li key={victim.id} className="border p-4 rounded-md shadow-sm">
              <p className="font-semibold">{victim.name}</p>
              <p className="text-gray-600">{victim.en_name}</p>
              <p className="text-sm text-gray-500">Date of Birth: {victim.dob}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home
