import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer.js'


const Main = ({ children, router }) => {
    return (
        <Box as="main" minH='100vh' pb={8} display='flex' flexDirection='column' justifyContent='space-between'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Tiago Paiva API Store</title>
                <meta name="author" content="Tiago Paiva" />
                <meta name="author" content="Website" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main