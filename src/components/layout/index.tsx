import { Web3Modal } from '../../context/web3modal'
import { ReactNode, useState, cloneElement, isValidElement } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Header } from './Header'

interface Props {
  children?: ReactNode
}

export default function RootLayout({ children }: Props) {
  const [isAutoscrollEnabled, setIsAutoscrollEnabled] = useState(false)

  const handleAutoscrollToggle = (enabled: boolean) => {
    setIsAutoscrollEnabled(enabled)
  }

  // Clone children and pass autoscroll props if it's the Home component
  const childrenWithProps = isValidElement(children) ? cloneElement(children, { isAutoscrollEnabled } as any) : children

  return (
    <Web3Modal>
      <Box margin="0 auto" minH="100vh">
        <Header isAutoscrollEnabled={isAutoscrollEnabled} onAutoscrollToggle={handleAutoscrollToggle} />
        <Container maxW="container.lg">{childrenWithProps}</Container>
      </Box>
    </Web3Modal>
  )
}
