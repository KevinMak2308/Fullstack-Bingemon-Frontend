'use client'

import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react'

import Login from "./LoginModal";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from "react";

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
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

                            <Login/>

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