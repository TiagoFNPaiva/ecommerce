import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" >
            &copy; {new Date().getFullYear()} Tiago Paiva - API Store. All Rights Reserved.
        </Box>
    )
}


export default Footer