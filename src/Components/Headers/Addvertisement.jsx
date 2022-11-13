import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function Addvertisement({image}) {
  return (
    <Box>
        <Image src={image} alt='adv. image' />
    </Box>
  )
}
