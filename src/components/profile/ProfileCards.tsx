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
    AspectRatio
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
        <Box bg={useColorModeValue('#e5e5e5', '#21201D')} color={useColorModeValue('#21201D', '#F0F0EE')} >

            <Text as='h1' fontSize={{ base: "25px", sm: "30px", md: "35px", lg: "40px", xl: "45px", "2xl": "50px" }}>H1 lorem ipsum 123</Text>
            <Text fontSize={{ base: "19x", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px" }}>Subheader H1 Test lorem ipsum 123</Text>

            <Text as='h2' fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "35px", xl: "40px", "2xl": "45px" }}>H2 lorem ipsum 123</Text>
            <Text fontSize={{ base: "16x", sm: "17px", md: "18px", lg: "19px", xl: "20px", "2xl": "21px" }}>Subheader H2 Test lorem ipsum 123</Text>

            <Text as='h3' fontSize={{ base: "15px", sm: "20px", md: "25px", lg: "30px", xl: "35px", "2xl": "40px" }}>H3 lorem ipsum 123</Text>
            <Text as='h4' fontSize={{ base: "10x", sm: "15px", md: "20px", lg: "25px", xl: "30px", "2xl": "35px" }}>H4 lorem ipsum 123</Text>

            <Text fontSize={{ base: "15px", sm: "16px", md: "17px", lg: "18px", xl: "19px", "2xl": "20px" }}>P lorem ipsum 123</Text>

            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w='80vw'>
                        <Heading className="h2"  mb={{ base: "4", md: "6", lg: "8" }}>
                            Liked movies and series
                        </Heading>
                        <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} gap={{ base: 14, md: 0, lg: 20 }} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
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
                                <SimpleGrid columns={[3, 3, 3, 3, 3, 4]} gap={{base: "3", sm:"4", md: "5", lg: "6", xl:"7", "2xl":"8"}} fontWeight='500' fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}>
                                    {movies.slice(0, 6).map((movie) => (
                                        <Link to={"/singlemoviepage/" + movie.id}>
                                            <GridItem key={movie.id} w='100%' h='100%' display="grid" gap={{base: "1.5", sm:"1.5", md: "1.5", lg: "2", xl:"3", "2xl":"4"}} cursor='pointer' >
                                                <AspectRatio ratio={2 / 3}>
                                                    <Image
                                                        objectFit="cover"
                                                        className='movie'
                                                        src={movie.poster_path}
                                                        fallbackSrc={defaultImgUrl}
                                                        alt={"Poster for: " + movie.title}
                                                    />
                                                </AspectRatio>
                                                <Box textAlign="center" alignItems="top" h='5vh' overflow="hidden">
                                                    <Text
                                                        lineHeight='1.5'
                                                        overflow="hidden"
                                                        display="-webkit-box"
                                                        style={{
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 2,
                                                            maxWidth: '100%',
                                                        }}
                                                    >
                                                        {movie.title}
                                                    </Text>
                                                </Box>
                                            </GridItem>
                                        </Link>
                                    ))}
                                </SimpleGrid>
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: "6", md: "8", lg: "10" }}>
                                    {movies.length <= 6 ? (null)
                                        :
                                        (
                                        <Flex alignContent={"center"} justifyContent={"center"}>
                                            <Link to={"/liked/" + user.id}>
                                                <Button
                                                    onClick={() => selectedBox(0)}
                                                    py={{base: "24px", md: "26px", lg: "25px"}}
                                                    px={{base: "28px", md: "29px", lg: "30px"}}
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
                                <SimpleGrid columns={[3, 3, 3, 3, 3, 4]} gap={{base: "3", sm:"4", md: "5", lg: "6", xl:"7", "2xl":"8"}} fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                    {series.slice(0, 6).map((singleSeries) => (
                                        <Link to={"/singleseriespage/" + singleSeries.id}>
                                            <GridItem key={singleSeries.id} w='100%' h={{ base: "22vh", md: "26vh", lg: "30vh" }} display="grid" gridGap="1.5" cursor='pointer'>
                                                <AspectRatio ratio={2 / 3}>
                                                    <Image
                                                        objectFit="cover"
                                                        className='movie'
                                                        src={singleSeries.poster_path}
                                                        fallbackSrc={defaultImgUrl}
                                                        alt={"Poster for: " + singleSeries.name}
                                                    />
                                                </AspectRatio>
                                                <Box textAlign="center" alignItems="top" h='5vh' overflow="hidden">
                                                    <Text
                                                        lineHeight='1.5'
                                                        overflow="hidden"
                                                        display="-webkit-box"
                                                        style={{
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 2,
                                                            maxWidth: '100%',
                                                        }}
                                                    >
                                                        {singleSeries.name}
                                                    </Text>
                                                </Box>
                                            </GridItem>
                                        </Link>
                                    ))}
                                </SimpleGrid>
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: "6", md: "8", lg: "10" }}>
                                    {series.length <= 6 ? (null)
                                        :
                                        (
                                            <Link to={"/liked/"+user.id}>
                                                <Button
                                                    onClick={() => selectedBox(1)}
                                                    py={{base: "24px", md: "26px", lg: "25px"}}
                                                    px={{base: "28px", md: "29px", lg: "30px"}}
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