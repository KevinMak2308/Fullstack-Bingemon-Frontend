import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
function Footer() {

    return (
    <Box bg="bingemon_black.500" p={[2, 4, 6, 8, 10]}>
        <Box pb="30px">
        <VStack>
        <HStack>

            <VStack color={"white"}>
                <Flex justifyContent='center'>
                    <img width='60%' src={process.env.PUBLIC_URL + 'images/bingemon_logo_transparent_red_sm.png'}/>
                </Flex>
                <Text fontSize={{ base: "6px", md: "10px", lg: "14px" }}>
                    Bingemon © All rights reserved.
                </Text>
            </VStack>


            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Flex flexDirection='column'>
                <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }} fontWeight='semibold'>
                    Discover movies
                </Text>
                <Link fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
                    Browse movies
                </Link>
                <Link fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
                    Start swiping movies
                </Link>
                </Flex>
            </Box>

            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box color={"white"}>
                    <Flex flexDirection='column'>
                        <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }} fontWeight='semibold'>
                            Discover series
                        </Text>
                        <Link fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
                            Browse series
                        </Link>
                        <Link fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
                            Start swiping series
                        </Link>
                    </Flex>
                </Box>
            </Box>

            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Flex flexDirection='column'>
                    <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }} fontWeight='semibold'>
                        Information
                    </Text>
                    <Link fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
                        Privacy policy
                    </Link>
                    <Link fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
                        Terms of use
                    </Link>
                </Flex>
            </Box>


        </HStack>
        </VStack>
        </Box>
        <VStack
            mt="25px"
            mb="-20px">
            <Image my={[-1, -2, -4, -8, -12]} boxSize="125px" src={process.env.PUBLIC_URL + 'images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'}/>
            <Text fontSize={{ base: "4px", md: "8px", lg: "12px" }}>This product uses the TMDB API but is not endorsed or certified by TMDB.</Text>
        </VStack>
    </Box>
    )
}

export default Footer;