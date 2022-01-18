import { Container, Box, Image, SimpleGrid, Text, LinkBox, LinkOverlay, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

//Simple Homepage

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <SimpleGrid columns={2} spacing={10} my={{ base: 5 }} justifyItems='center'>
          <LinkBox cursor="pointer">
            <Box boxShadow='dark-lg' rounded='md' bg='white' boxSize='200px'>
              <Image src='/images/male.png'
                alt='male'
                boxSize='90%'
                objectFit='contain'
                m='auto'
                pt='10px'
              />
              <LinkOverlay href='/shop'>
                <Text mt={5} align='center'>Men's clothing</Text>
              </LinkOverlay>
            </Box>
          </LinkBox>
          <LinkBox cursor="pointer">
            <Box boxShadow='dark-lg' rounded='md' bg='white' boxSize='200px'>
              <Image src='/images/female.png'
                alt='female'
                boxSize='90%'
                objectFit='contain'
                m='auto'
                pt='10px'
              />
              <LinkOverlay href='/shop'>
                <Text mt={5} align='center'>Women's clothing</Text>
              </LinkOverlay>
            </Box>
          </LinkBox>
        </SimpleGrid>
        <Box display='flex' justifyContent='center' my={20}>
          <NextLink href="/shop" >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Browse All
            </Button>
          </NextLink>
        </Box>
        <SimpleGrid columns={2} spacing={10} my={{ base: 5 }} justifyItems='center'>
          <LinkBox cursor="pointer">
            <Box boxShadow='dark-lg' rounded='md' bg='white' boxSize='200px'>
              <Image src='/images/jewelery.png'
                alt='jewelery'
                boxSize='90%'
                objectFit='contain'
                m='auto'
                pt='10px'
              />
              <LinkOverlay href='/shop'>
                <Text mt={5} align='center'>Jewelery</Text>
              </LinkOverlay>
            </Box>
          </LinkBox>
          <LinkBox cursor="pointer">
            <Box boxShadow='dark-lg' rounded='md' bg='white' boxSize='200px'>
              <Image src='/images/electronics.png'
                alt='electronics'
                boxSize='90%'
                objectFit='contain'
                m='auto'
                pt='10px'
              />
              <LinkOverlay href='/shop'>
                <Text mt={5} align='center'>Electronics</Text>
              </LinkOverlay>
            </Box>
          </LinkBox>
        </SimpleGrid>


      </Container>
    </Layout >
  )
}

export default Page
