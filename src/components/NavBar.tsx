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
    Link,
} from '@chakra-ui/react'


import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Login from "./LoginModal";
import SubNav from "./SubNav";


export default function NavBar() {
    const nav = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode()
    useEffect(() => {
        const redirectToFrontpage = async() => {
            const user = localStorage.getItem("user")
            if(!user) {
                nav("/")
            }
        }
        redirectToFrontpage()
    }, [nav]);



    if (localStorage.getItem("user")) {
        return (
            <div>
                <Box px={4}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>Logo</Box>

                        <Popover>
                            <PopoverTrigger>
                                <Button borderRadius={'none'} bg={'none'} _hover={{
                                    bg: 'none',
                                }}><Avatar bg={'red.100'} height={'2em'} width={'2em'}/></Button>
                            </PopoverTrigger>
                            <PopoverContent textAlign={'left'}>
                                <PopoverArrow/>
                                <PopoverBody>
                                   {/* Route til profile page*/}
                                    <Link>My profile</Link>
                                </PopoverBody>
                                <PopoverBody>
                                    <Link>My movies & series</Link>
                                </PopoverBody>
                                <PopoverBody>
                                    <Link>Log out</Link>
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
                        <Box>Logo</Box>

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







