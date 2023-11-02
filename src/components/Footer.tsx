import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
function Footer() {

    return (
    <Box bg="bingemon_black.500" p={[2, 4, 6, 8, 10]}>
        <Box pb="30px">
        <VStack>
        <HStack>

            <VStack color={"white"}>
                <Box>
                    <img src={process.env.PUBLIC_URL + 'images/bingemon_logo_transparent_red_sm.png'}/>
                </Box>
                <Text fontSize={{ base: "6px", md: "10px", lg: "14px" }}>
                    Bingemon © All rights reserved.
                </Text>
            </VStack>

            <Spacer/>
            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                </Box>
            </Box>
            <Spacer/>
            <Spacer/>
            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                </Box>
            </Box>
            <Spacer/>
            <Spacer/>
            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }}>
                    Hi there, this is a test
                </Text>
                </Box>
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