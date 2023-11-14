import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
function Footer() {

    return (
    <Box bg="bingemon_black.500" p={[2, 4, 6, 8, 10]} >
        <Flex pb="30px"  justifyContent="center" alignItems="center" gap={{base:"8", md:"16", lg:"20"}} placeItems="center" flexDirection={{base:"column", md:"row", lg:"row"}}>


            <VStack color={"white"}>
                <Flex justifyContent='center' placeItems={{base:"center", md:"normal", lg:"normal"}} maxW="60%">
                    <img src='http://localhost:3000/images/bingemon_logo_transparent_red_sm.png'/>
                </Flex>
                <Text fontSize={{ base: "12px", md: "12px", lg: "14px" }}>
                    Bingemon © All rights reserved.
                </Text>
            </VStack>


            <Flex color={"white"} >
                <Flex flexDirection='column' gap='10px' placeItems={{base:"center", md:"normal", lg:"normal"}}>
                <Text fontSize={{ base: "14px", md: "14px", lg: "16px" }} fontWeight='semibold'>
                    Discover movies
                </Text>
                <Link fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
                    Browse movies
                </Link>
                <Link fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
                    Start swiping movies
                </Link>
                </Flex>
            </Flex>

            <Flex color={"white"}>
                <Box color={"white"}>
                    <Flex flexDirection='column' gap='10px' placeItems={{base:"center", md:"normal", lg:"normal"}}>
                        <Text fontSize={{ base: "14px", md: "14px", lg: "16px" }} fontWeight='semibold'>
                            Discover series
                        </Text>
                        <Link fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
                            Browse series
                        </Link>
                        <Link fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
                            Start swiping series
                        </Link>
                    </Flex>
                </Box>
            </Flex>

            <Flex color={"white"}>
                <Flex flexDirection='column' gap='10px' placeItems={{base:"center", md:"normal", lg:"normal"}}>
                    <Text fontSize={{ base: "14px", md: "14px", lg: "16px" }} fontWeight='semibold'>
                        Policies & terms
                    </Text>
                    <Link fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
                        Privacy policy
                    </Link>
                    <Link fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
                        Terms of use
                    </Link>
                </Flex>
            </Flex>
        </Flex>
        <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            mt="30px"
        >
            <Image  maxW="125px"  src='http://localhost:3000/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'/>
            <Text mt="10px" fontSize={{ base: "12px", md: "12px", lg: "12px" }}>This product uses the TMDB API but is not endorsed or certified by TMDB.</Text>
        </Flex>
    </Box>
    )
}

export default Footer;