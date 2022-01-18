import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 25px;
    display:inline-flex;
    align-items:center;
    height:30px;
    line-height:20px;
    padding:10px;

    &:hover img {
        opacity:0.8
    }
`

const Logo = () => {


    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src='/images/logo.png' width={100} height={25} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='Ubuntu'
                        fontWeight="normal"
                        ml={3}>
                        Store with API
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo