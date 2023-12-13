import React from 'react';
import '../../App.css';
import {Box, Center, Flex, GridItem, HStack, Image, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react'

export default function ProfileCards() {
    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{base: '75px', sm: '80px', md: '85', lg: '90px', xl: '95px', "2xl": '100px'}}
                  alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w='80vw' display="grid" gap='60px'>
                        <Box display='grid'
                             gap={{base: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "22px"}}>
                            <Text as='h2'>
                                Liked genres
                            </Text>
                            <Flex justifyContent='space-between' alignItems="center" gap="10"
                                  flexDirection={{base: 'column', lg: 'row'}}>
                                <SimpleGrid columns={[2, 2, 4, 4, 4, 4]} className="SubheaderSm" gap={{
                                    base: "15px",
                                    sm: "16px",
                                    md: "17px",
                                    lg: "18px",
                                    xl: "19px",
                                    "2xl": "20px"
                                }} maxW={{lg: '50vw'}}>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                    </GridItem>
                                </SimpleGrid>
                                <Flex alignItems="center" gap="2" cursor="pointer">
                                    <Center gap='4'>
                                        <HStack
                                            cursor="pointer"
                                            position="relative"
                                            w='fit-content'
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
                                            <Text className="BodyBold" marginBottom="2px">Edit liked genres</Text>
                                        </HStack>
                                        <Box
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            _hover={{
                                                filter: "brightness(2)",
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                 viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/>
                                            </svg>
                                        </Box>
                                    </Center>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box display='grid'
                             gap={{base: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "22px"}}>
                            <Text as='h2'>
                                Liked actors
                            </Text>
                            <Flex justifyContent='space-between' alignItems="center" gap="10"
                                  flexDirection={{base: 'column', lg: 'row'}}>
                                <SimpleGrid columns={[2, 2, 4, 4, 4, 4]} className="SubheaderSm" gap={{
                                    base: "15px",
                                    sm: "16px",
                                    md: "17px",
                                    lg: "18px",
                                    xl: "19px",
                                    "2xl": "20px"
                                }} maxW={{lg: '50vw'}}>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                    <GridItem w='100%' display="grid" gridGap="2" cursor='pointer'>
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
                                                border: 'solid 1.5px #A61212',
                                            }}
                                        />
                                        <Text textAlign="center">Name Lorem Ipsum</Text>
                                    </GridItem>
                                </SimpleGrid>
                                <Flex alignItems="center" gap="2" cursor="pointer" fontWeight='500'
                                      fontSize={{base: "13px", md: "14px", lg: "15px"}}>
                                    <Center gap='4'>
                                        <HStack
                                            cursor="pointer"
                                            position="relative"
                                            w='fit-content'
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
                                            <Text className="BodyBold" marginBottom="2px">Edit liked actors</Text>
                                        </HStack>
                                        <Box
                                            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                            _hover={{
                                                filter: "brightness(2)",
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                 viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z"/>
                                            </svg>
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