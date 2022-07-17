import React from 'react'
import {Stack,Heading,Box,Image} from "@chakra-ui/react"

const Jobs = () => {
  return (
    <Box bg="rgb(237,242,247)">
    <Stack m="30px auto" alignItems="flex-start" width="3xl" >
          <Heading as='h2' size='2xl' noOfLines={1}>
         Rcent Jobs
  </Heading>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
        <Image boxSize='auto'src='https://i.ibb.co/mSd6st6/image-3-1.png' alt='Dan Abramov'/>
    </Stack>
    </Box>
  )
}

export default Jobs