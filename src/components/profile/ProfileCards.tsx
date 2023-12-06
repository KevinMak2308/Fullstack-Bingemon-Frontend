import React, { useState } from 'react';
import '../../App.css';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Heading,
    Button,
    Image,
    Text,
    Box,
    useColorMode,
    useColorModeValue,
    Flex,
    Center,
    SimpleGrid,
    GridItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
import { User, Movie, Series } from "../../pages/ProfilePage";

interface ProfileProps {
    user: User;
    movies: Movie[];
    series: Series[];
}

function selectedBox(id: number) {
    localStorage.setItem("selectedBox", id.toString());
}

export default function ProfileCards({ user, movies, series }: ProfileProps) {
    const { colorMode, toggleColorMode } = useColorMode();

    const defaultImgUrl = "http://127.0.0.1:8080/default/poster_unavailable.jpg";


    return (
        <Box bg={useColorModeValue('#e2e2e2', '#21201D')} color={useColorModeValue('#21201D', '#F0F0EE')} >
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w='80vw'>
                        <Heading className="h2"  mb={{ base: "4", md: "6", lg: "8" }}>
                            Liked movies and series
                        </Heading>
                        <SimpleGrid columns={[1, 1, 2]} gap={{ base: 14, md: 0, lg: 20 }} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                            <GridItem w='100%'>
                                <Flex justifyContent='space-between' alignItems="center" mb={{ base: "4", md: "6", lg: "8" }}>
                                    <Heading as='h3' fontSize={{ base: '20px', md: '22px', lg: '25px' }}>
                                        {movies.length} liked movies
                                    </Heading>
                                    <Menu placement="bottom-end">
                                        <MenuButton as={Button} bg='#343434' color="#F0F0EE" _hover={{ filter: 'brightness(1.4)' }} _active={{ bg: '#484848', color: '#F0F0EE' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' rightIcon={<ChevronDownIcon />}>
                                            Sort by
                                        </MenuButton>
                                        <MenuList bg='#343434' border='#343434' color='#F0F0EE'>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Popularity ascending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Popularity descending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Release Date ascending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Release Date descending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Title (A-Z)</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Title (Z-A)</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <SimpleGrid columns={[3, null, 3]} gap={{base: "4", md: "", lg: "6"}} fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                    {movies.slice(0, 6).map((movie) => (
                                        <Link to={"/singlemoviepage/" + movie.id}>
                                            <GridItem key={movie.id} w='100%' h='100%' display="grid" gridGap="1.5" cursor='pointer' >
                                                <Image
                                                    className='movie'
                                                    src={movie.poster_path}
                                                    fallbackSrc={defaultImgUrl}
                                                    alt={"Poster for: " + movie.title}
                                                    h={{ base: "22vh", md: "26vh", lg: "30vh" }}

                                                />
                                                <Box textAlign="center" alignItems="top" h="55px">
                                                    <Text lineHeight='1.5'>{movie.title}</Text>
                                                </Box>
                                            </GridItem>
                                        </Link>
                                    ))}
                                </SimpleGrid>
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: "4", md: "6", lg: "8" }}>
                                    {movies.length <= 6 ? (null)
                                        :
                                        (
                                            <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: "4", md: "6", lg: "8" }}>
                                                <Link to={"/liked/" + user.id}>
                                                    <Button
                                                        onClick={() => selectedBox(0)}
                                                        py={{base: "24px", md: "26px", lg: "25px"}}
                                                        px={{base: "28px", md: "29px", lg: "30px"}}
                                                        mt='20px'
                                                        lineHeight='1.2'
                                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                                        border=''
                                                        borderRadius='10px'
                                                        fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                                        fontWeight='semibold'
                                                        bg='#A61212'
                                                        color='#F0F0EE'
                                                        _hover={{ bg: '#c01515' }}>
                                                        View all liked movies
                                                    </Button>
                                                </Link>
                                            </Flex>
                                        )
                                    }
                                </Flex>
                            </GridItem>
                            <GridItem w='100%'>
                                <Flex justifyContent='space-between' alignItems="center" mb={{ base: "4", md: "6", lg: "8" }}>
                                    <Heading as='h3' fontSize={{ base: '20px', md: '22px', lg: '25px' }}>
                                        {series.length} liked series
                                    </Heading>
                                    <Menu placement="bottom-end">
                                        <MenuButton as={Button} bg='#343434' color="#F0F0EE" _hover={{ filter: 'brightness(1.4)' }} _active={{ bg: '#484848', color: '#F0F0EE' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' rightIcon={<ChevronDownIcon />}>
                                            Sort by
                                        </MenuButton>
                                        <MenuList bg='#343434' border='#343434' color='#F0F0EE'>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Popularity ascending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Popularity descending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Release Date ascending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Release Date descending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Title (A-Z)</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Title (Z-A)</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                                <SimpleGrid columns={[3, null, 3]} gap={{base: "4", md: "", lg: "6"}} fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                    {series.slice(0, 6).map((singleSeries) => (
                                        <Link to={"/singleseriespage/" + singleSeries.id}>
                                            <GridItem key={singleSeries.id} w='100%' h={{ base: "22vh", md: "26vh", lg: "30vh" }} display="grid" gridGap="1.5" cursor='pointer'>
                                                <Image
                                                    className='movie'
                                                    src={singleSeries.poster_path}
                                                    fallbackSrc={defaultImgUrl}
                                                    alt={"Poster for: " + singleSeries.name}
                                                    h={{ base: "22vh", md: "26vh", lg: "30vh" }}
                                                />
                                                <Box textAlign="center" alignItems="top" h="55px">
                                                    <Text lineHeight='1.5'>{singleSeries.name}</Text>
                                                </Box>
                                            </GridItem>
                                        </Link>
                                    ))}
                                </SimpleGrid>
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: "4", md: "6", lg: "8" }}>
                                    {series.length <= 6 ? (null)
                                        :
                                        (
                                            <Link to={"/liked/"+user.id}>
                                                <Button
                                                    onClick={() => selectedBox(1)}
                                                    py={{base: "24px", md: "26px", lg: "25px"}}
                                                    px={{base: "28px", md: "29px", lg: "30px"}}
                                                    mt='20px'
                                                    lineHeight='1.2'
                                                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                                    border=''
                                                    borderRadius='10px'
                                                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                                    fontWeight='semibold'
                                                    bg='#A61212'
                                                    color='#F0F0EE'
                                                    _hover={{ filter: 'brightness(1.2)' }}>
                                                    View all liked series
                                                </Button>
                                            </Link>
                                        )
                                    }
                                </Flex>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>

    )
}