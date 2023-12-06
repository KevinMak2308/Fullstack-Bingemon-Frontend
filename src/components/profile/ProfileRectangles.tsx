import React from 'react';
import '../../App.css';
import {
    Box,
    Heading,
    Image,
    Center,
    Flex,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Text,
    HStack
} from '@chakra-ui/react'


export default function ProfileCards() {
    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')} >
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w='80vw' display="grid" gridGap={{ base: "12", md: "14", lg: "16" }}>
                        <Box>
                            <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }} mb={{ base: "4", md: "6", lg: "8" }}>
                                Liked genres
                            </Heading>
                            <Flex justifyContent='space-between' alignItems="center" gap="6" flexDirection={{base:'column', lg:'row'}}>
                                <SimpleGrid columns={[4, null, 4]} gap={{base: "3", md: "", lg: "6"}} maxW={{ lg:'50vw' }} fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center" > Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center" > Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center" > Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center" > Name Lorem Ipsum</Text>
                                    </GridItem>
                                </SimpleGrid>
                                <Flex alignItems="center" gap="2" cursor="pointer" fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }} >
                                    <Center gap='4'>
                                        <HStack
                                            cursor="pointer"
                                            position="relative"
                                            marginBottom="4px"
                                            _before={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: 0,
                                                height: '1.5px',
                                                backgroundColor: '#A61212',
                                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                                            }}
                                            _hover={{
                                                _before: {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            <Text fontWeight='500' marginBottom="2px">Edit liked genres</Text>
                                        </HStack>
                                        <Box
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            _hover={{
                                                filter: "brightness(2)",
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/></svg>
                                        </Box>
                                    </Center>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box>
                            <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }} mb={{ base: "4", md: "6", lg: "8" }}>
                                Liked actors
                            </Heading>
                            <Flex justifyContent='space-between' alignItems="center" gap="6" flexDirection={{base:'column', lg:'row'}}>
                                <SimpleGrid columns={[4, null, 4]} gap={{base: "3", md: "", lg: "6"}} maxW={{ lg:'50vw' }} fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer' >
                                        <Image
                                            src='gibbresh.png'
                                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            alt='Name Lorem Ipsum'
                                            border='solid 1.5px transparent'
                                            borderRadius='5px'
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 'full',
                                            }}
                                            _hover={{
                                                filter: 'brightness(1.1)',
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                                border:'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                </SimpleGrid>
                                <Flex alignItems="center" gap="2" cursor="pointer" fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }} >
                                    <Center gap='4'>
                                        <HStack
                                            cursor="pointer"
                                            position="relative"
                                            marginBottom="4px"
                                            _before={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: 0,
                                                height: '1.5px',
                                                backgroundColor: '#A61212',
                                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                                            }}
                                            _hover={{
                                                _before: {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            <Text fontWeight='500' marginBottom="2px">Edit liked actors</Text>
                                        </HStack>
                                        <Box
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            _hover={{
                                                filter: "brightness(2)",
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/></svg>
                                        </Box>
                                    </Center>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Center>
            </Flex>
        </Box>
    )
}