import React from 'react'
import {Heading,Input,HStack,Button,Flex} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
        <Flex align="center" direction="column">
        <Heading as='h1' size='4xl' noOfLines={1} h="150px" m="200px 0px 40px 0px">
        Find The Right  <br/>
Four-Day Week Job  </Heading>
<Input placeholder='Find Job Title or Keyword' w="2xl" m="20px 0px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" />
<HStack gap="19">
<Button display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} color={'white'} 
           href={'#'}  bg={"rgb(126,89,210)"} w="175px">
              Remote
            </Button>
<Button display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} color={'white'} 
           href={'#'}  bg={"rgb(126,89,210)"}  w="175px">
              Tech
            </Button>
<Button display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} color={'white'} 
           href={'#'}  bg={"rgb(126,89,210)"}  w="175px">
              Marketing
            </Button>
</HStack>

</Flex>
    </div>
  )
}

export default Home