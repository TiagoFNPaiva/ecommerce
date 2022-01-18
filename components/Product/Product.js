import NextLink from 'next/link'
import { Box, Button, Image, Divider, Heading } from '@chakra-ui/react';
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import classes from './Product.module.css'

//Compenent that renders individual product


const Product = (props) => {
    return (
        <section className={classes.detail}>
            <Heading mt={20}>{props.title}</Heading>
            <Box display={{ md: 'flex' }} justifyContent='space-between'>
                <Box pt={20} pr={10}>
                    <Box bg='white' boxSize='300px'>
                        <Image src={props.image} alt={props.title} m='auto' borderRadius='10px' objectFit='scale-down' />
                    </Box>
                </Box>

                <Box pt={20} maxW={{ md: '40vw' }} >
                    <Box pb={5} textAlign='center'>
                        {props.description}
                    </Box>
                    <Divider />
                    <Box py={5} display='flex' justifyContent='space-between' textAlign='right'>
                        <Box>Rating</Box>
                        <Box display='flex' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < Math.round(props.rating.rate) ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box px={4}>{props.rating.rate}</Box>
                            <Box opacity='0.7'>({props.rating.count} votes)</Box>
                        </Box>

                    </Box>
                    <Divider />
                    <Box py={5} display='flex' justifyContent='space-between' textAlign='right'>
                        <Box>Price</Box>
                        <Box>{props.price.toFixed(2)}€</Box>
                    </Box>
                    <Divider />
                </Box>
            </Box>
            <Box pt={20}>
                <NextLink href="/shop">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        Browse All
                    </Button>
                </NextLink>
            </Box>

        </section>

    )
}

export default Product