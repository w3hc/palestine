import { Text } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'

export default function About() {
  return (
    <>
      <main>
        <Text>
          The home page of this website displays the name of <strong>28,185 people killed in Gaza</strong> since October 7, 2023.{' '}
        </Text>
        <br />
        <Text>
          I want to thank all contributors involved in building this dataset. You can learn more about it by checking Tech for Palestine{' '}
          <LinkComponent href="https://data.techforpalestine.org">website</LinkComponent>,{' '}
          <LinkComponent href="https://github.com/TechForPalestine/palestine-datasets">GitHub repo</LinkComponent>, and{' '}
          <LinkComponent href="https://data.techforpalestine.org/docs/killed-in-gaza">docs</LinkComponent>.
        </Text>
        <br />
        <Text>
          Tech for Palestine updates the list daily as new reports are released. On this website, updates are made on a weekly basis. The main sources
          are Gaza&apos;s Ministry of Health and Gaza&apos;s Government Media Office.
        </Text>
      </main>
    </>
  )
}
