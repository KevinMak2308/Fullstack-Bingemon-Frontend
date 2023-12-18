import React, {useState} from 'react';
import {
    AspectRatio,
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem, Image,
    Input,
    InputGroup,
    InputLeftElement, Link,
    Link as ChakraLink,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    SimpleGrid,
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
import httpService from "../../services/httpService";

interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

export default function NavBar() {
    const [movieSearch, setMovieSearch] = useState<Movie[]>([])
    const {colorMode, toggleColorMode} = useColorMode()
    const user = document.cookie.split(';').find((row) => row.startsWith('user_id='))?.split('=')[1];

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

    const defaultImgUrl = "../../images/unavailable/poster_unavailable.jpg";

    const searchMovie = async (title: string) => {
        try {
            const { data } = await httpService.get(`movie/searchMovie/${title}`);
            setMovieSearch(data.results)
            console.log("JSON Array in the searchMovie fetch: ", data.results)
        } catch (error) {
            console.log("Something went wrong searching for movies: ", error)
        }
    }




    return (
        <Box bg={bgColor} color={textColor}>
            <Flex py={{base: '10px', sm: '10px', md: '10px', lg: '10px', xl: '10px', "2xl": '10px'}} w='100%' h='10vh'
                  alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Flex w='90vw' alignItems={'center'} alignContent={"center"} justifyContent={"space-between"}>
                        {/* Logo */}
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/">
                                <img width={width} src={'/images/logo/bingemon_red_side_sm.png'} />
                            </ChakraLink>
                        </Box>
                        {/* Searchbar, login, and dark/light mode */}
                        <Flex alignItems={'center'} gap={{base: "2", sm: "2", md: "6", lg: "6", xl: "6", "2xl": "8"}}
                              justifyContent={'space-between'}>
                            <Popover>
                            <PopoverTrigger>
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
                                           borderRadius='10px' onChange={(event) => searchMovie(event.target.value)}/>
                                </InputGroup>
                            </Stack>
                            </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                        <PopoverCloseButton />
                                            <PopoverHeader>Search Results</PopoverHeader>
                                            <PopoverBody>
                                {movieSearch.length > 0 && (
                                <SimpleGrid>
                                    <Grid>
                                        {movieSearch.map((movie) => (
                                            <Link
                                                as={ReactRouterLink}
                                                key={movie.id}
                                                to={`/singlemoviepage/${movie.id}`}
                                                _hover={{textDecoration: 'none'}}
                                            >
                                            <GridItem>{movie.title}</GridItem>
                                                <AspectRatio ratio={2 / 3}>
                                                    <Image
                                                        objectFit="cover"
                                                        className='movie'
                                                        src={movie.poster_path}
                                                        fallbackSrc={defaultImgUrl}
                                                        alt={`Poster for: ${'title' in movie ? movie.title : ''}`}
                                                    />
                                                </AspectRatio>
                                            </Link>
                                        ))}
                                    </Grid>
                                </SimpleGrid>
                            )}
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
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
                                                    as={ReactRouterLink} to={`/profilepage/${user}`}
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