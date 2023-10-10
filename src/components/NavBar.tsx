'use client'

import {
    Box,
    Flex,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Link,
} from '@chakra-ui/react'


import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from "react";

interface Props {
    children: React.ReactNode
}



export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg={useColorModeValue('white', 'grey.100')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>

                    <Flex alignItems={'center'} justifyContent={'space-between'} >
                        <Stack
                            flex={{ md: 0 }}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>

                            <Button onClick={onOpen}
                                as={'a'}
                                display={{ sm: 'inline-flex', md: 'inline-flex' }}
                                fontSize={'md'}
                                fontWeight={600}
                                color={'white'}
                                bg={'red.100'}
                                href={'#'}
                                borderRadius={'sm'}
                                px={'8'}
                                mr={'2'}
                                _hover={{
                                    bg: 'red.hover',
                                }}>
                                Login
                            </Button>

                            <Modal isOpen={isOpen} onClose={onClose} >
                                <ModalOverlay />
                                <ModalContent  bg={'grey.100'}>
                                    <ModalHeader fontSize={'2xl'}>Login</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody >
                                        <FormControl mb={'4'} id="username" isRequired >
                                            <FormLabel>Username</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="Username" />
                                        </FormControl>
                                        <FormControl id="password" isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <Input borderRadius={'sm'}  placeholder="Password" />
                                        </FormControl>
                                        <Stack mt={4} fontSize={'sm'}>
                                        <p>Are you new on Bingemon? <Link fontWeight={600}>Sign up now</Link></p>
                                        </Stack>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button bg={'red.100'} borderRadius={'sm'} _hover={{bg: 'red.hover'}} px={'8'}>
                                            Login
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>


                        </Stack>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} borderRadius={'none'} bg={'none'} _hover={{
                                bg: 'none',
                            }}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

        </>


    )


}