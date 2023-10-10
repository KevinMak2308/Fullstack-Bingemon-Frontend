import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
function Footer() {

    return (
    <Box bg="bingemon_black.500" p={[2, 4, 6, 8, 10]}>
        <VStack>
        <HStack>

            <Box color={"white"}>
                <Text fontSize={{ base: "22px", md: "26px", lg: "30px" }} mb={[1, 2, 3, 4, 5]}>
                    Hi there, this is a test
                </Text>
                <Box>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                    <Text fontSize={{ base: "10px", md: "14px", lg: "18px" }} mt={[2, 4, 6, 8, 10]}>
                        Bingemon © 2023, All rights reserved.
                    </Text>
                </Box>
            </Box>

            <Spacer/>
            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                </Box>
            </Box>
            <Spacer/>
            <Spacer/>
            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                </Box>
            </Box>
            <Spacer/>
            <Spacer/>
            <Box color={"white"} ml={[4, 8, 12, 16, 20]}>
                <Box>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                <Text fontSize={{ base: "16px", md: "20px", lg: "24px" }}>
                    Hi there, this is a test
                </Text>
                </Box>
            </Box>

        </HStack>
        </VStack>
    </Box>
    )
}

export default Footer;