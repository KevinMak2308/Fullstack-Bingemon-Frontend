import React from 'react';

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
    Link as ChakraLink,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react'

import { Link as ReactRouterLink } from 'react-router-dom'
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons'
import Login from "./LoginModal";
import SubNav from "./SubNav";
import SearchBar from "./Searchbar"


export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const user = document.cookie.split(';').find((row) => row.startsWith('user='))?.split('=')[1];

    if (user) {
        return (
            <Box>
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
                <SubNav/>
            </Box>
        )
    }
        return (
            <Box>
                <Box px={4} >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/"><img src={process.env.PUBLIC_URL + 'images/bingemon_red_side_xsm.png'}/></ChakraLink>
                        </Box>

                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Stack
                                justify={'flex-end'}
                                direction={'row'}
                                spacing={6}>

                                <InputGroup size="md"  variant='filled' >
                                    <InputLeftElement pointerEvents='none'>
                                        <SearchIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='search' placeholder='Search...' focusBorderColor='#A61212' borderRadius='10px' />
                                </InputGroup>




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
                </Box>
        )
}







