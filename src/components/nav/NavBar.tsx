import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Link as ChakraLink,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {MoonIcon, SearchIcon, SunIcon} from '@chakra-ui/icons'
import Login from "../authentication/LoginModal";
import SubNav from "./SubNav";
import Logout from "../authentication/Logout";

export default function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode()
    const user = document.cookie.split(';').find((row) => row.startsWith('user='))?.split('=')[1];

    // Const for light/dark mode
    const bgColor = useColorModeValue('#c1c1c1', '#151412');
    const textColor = useColorModeValue('#21201D', '#F0F0EE');

    // Const for responsive logo width
    const width = useBreakpointValue({
        base: "125px",
        sm: "125px",
        md: "150px",
        lg: "175px",
        xl: "200px",
        "2xl": "250px"
    });

    return (
        <Box bg={bgColor} color={textColor}>
            <Flex py={{base: '10px', sm: '10px', md: '10px', lg: '10px', xl: '10px', "2xl": '10px'}} w='100%' h='10vh'
                  alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Flex w='90vw' alignItems={'center'} alignContent={"center"} justifyContent={"space-between"}>
                        {/* Logo */}
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/">
                                <img alt={"bingemon_logo2"} width={width} src={'http://localhost:3000/images/bingemon_red_side_xsm.png'}/>
                            </ChakraLink>
                        </Box>
                        {/* Searchbar, login, and dark/light mode */}
                        <Flex alignItems={'center'} gap={{base: "2", sm: "2", md: "6", lg: "6", xl: "6", "2xl": "8"}}
                              justifyContent={'space-between'}>
                            <Stack
                                direction={'row'}
                                display='flex'
                                alignItems={'center'}
                            >
                                <InputGroup size="md" variant='filled' display={{base: "none", md: "block"}}>
                                    <InputLeftElement pointerEvents='none'>
                                        <SearchIcon/>
                                    </InputLeftElement>
                                    <Input type='search' placeholder='Search...' focusBorderColor='#A61212'
                                           borderRadius='10px'/>
                                </InputGroup>
                            </Stack>
                            {/* Dark/light mode */}
                            <Stack direction={'row'} display='flex' alignItems={'center'}
                                   spacing={{base: "1", sm: "1", md: "2", lg: "2", xl: "2", "2xl": "2"}}>
                                {/* Login */}
                                {user ? (
                                    <Box py='4'>
                                        <Menu placement="bottom-end">
                                            <MenuButton
                                                cursor="pointer"
                                                _hover={{filter: 'brightness(1.2)'}}
                                                _focus={{boxShadow: 'none'}}
                                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                            >
                                                <Avatar
                                                    bg="#A61212"
                                                    height={{
                                                        base: '20px',
                                                        sm: '24px',
                                                        md: '28px',
                                                        lg: '32px',
                                                        xl: '36px',
                                                        '2xl': '40px'
                                                    }}
                                                    width={{
                                                        base: '20px',
                                                        sm: '24px',
                                                        md: '28px',
                                                        lg: '32px',
                                                        xl: '36px',
                                                        '2xl': '40px'
                                                    }}
                                                />
                                            </MenuButton>
                                            <MenuList bg="#343434" border="#343434" color="#F0F0EE" zIndex="2000"
                                                      minW='xs'>
                                                <MenuItem
                                                    as={ReactRouterLink} to="/profilepage"
                                                    py='2'
                                                    px='4'
                                                    className='BodyReg'
                                                    bg="#343434"
                                                    _hover={{filter: 'brightness(1.4)'}}
                                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                                >
                                                    My profile
                                                </MenuItem>
                                                <MenuItem
                                                    as={ReactRouterLink} to="/profilepage"
                                                    py='2'
                                                    px='4'
                                                    className='BodyReg'
                                                    bg="#343434"
                                                    _hover={{filter: 'brightness(1.4)'}}
                                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                                >
                                                    My movies & series
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => Logout()}
                                                    py='2'
                                                    px='4'
                                                    className='BodyReg'
                                                    bg="#343434"
                                                    _hover={{filter: 'brightness(1.4)'}}
                                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                                >
                                                    Log out
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Box>
                                ) : (
                                    <Login/>
                                )}
                                <Button
                                    onClick={toggleColorMode}
                                    borderRadius={'none'}
                                    bg={'none'}
                                    _hover={{
                                        bg: 'none',
                                    }}>
                                    {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                                </Button>
                            </Stack>
                        </Flex>
                    </Flex>
                </Center>
            </Flex>
            <SubNav/>
        </Box>
    )
}