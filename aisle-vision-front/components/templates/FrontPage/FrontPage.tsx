import FrontPageCard from '@/components/organisms/FrontPageCard'
import { Box } from '@chakra-ui/react'
import React from 'react'

function FrontPage() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      <FrontPageCard/>
    </Box>
  )
}

export default FrontPage