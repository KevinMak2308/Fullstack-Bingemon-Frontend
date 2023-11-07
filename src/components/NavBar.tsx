import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Flex,
    Button,
    Stack,
    Popover,
    PopoverTrigger,
    useColorMode,
    Avatar,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Image,
    Link as ChakraLink, LinkProps
} from '@chakra-ui/react'

import { Link as ReactRouterLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Login from "./LoginModal";
import SubNav from "./SubNav";


export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const user = document.cookie.split(';').find((row) => row.startsWith('user='))?.split('=')[1];

    if (user) {
        return (
            <div>
                <Box px={4}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/"><img src={process.env.PUBLIC_URL + 'images/bingemon_red_side_xsm.png'}/></ChakraLink>
                        </Box>

                        <Popover>
                            <PopoverTrigger>
                                <Button borderRadius={'none'} bg={'none'} _hover={{
                                    bg: 'none',
                                }}><Avatar bg={'red.100'} height={'2em'} width={'2em'}/></Button>
                            </PopoverTrigger>
                            <PopoverContent textAlign={'left'}>
                                <PopoverArrow/>
                                <PopoverBody>
                                    <ChakraLink as={ReactRouterLink} to="/profilepage">My profile</ChakraLink>
                                </PopoverBody>
                                <PopoverBody>
                                    <ChakraLink>My movies & series</ChakraLink>
                                </PopoverBody>
                                <PopoverBody>
                                    <ChakraLink>Log out</ChakraLink>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Box>

            </div>
        )
    }
        return (
            <div>
                <Box px={4}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/"><img src={process.env.PUBLIC_URL + 'images/bingemon_red_side_xsm.png'}/></ChakraLink>
                        </Box>

                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Stack
                                flex={{md: 0}}
                                justify={'flex-end'}
                                direction={'row'}
                                spacing={6}>

                                <Login/>

                                <Stack direction={'row'} spacing={7}>
                                    <Button onClick={toggleColorMode} borderRadius={'none'} bg={'none'} _hover={{
                                        bg: 'none',
                                    }}>
                                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                    </Button>
                                </Stack>

                            </Stack>

                        </Flex>
                    </Flex>
                </Box>
                <SubNav/>
                </div>
        )
}







