import React from 'react';
import '../../App.css';
import {AspectRatio, Box, Center, Flex, GridItem, Image, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {Movie, Series, User} from "../../pages/ProfilePage";
import PrimaryButton from "../buttons/PrimaryButton";
import SortButton from '../buttons/SortButton';

interface ProfileProps {
    user: User;
    movies: Movie[];
    series: Series[];
}

function selectedBox(id: number) {
    localStorage.setItem("selectedBox", id.toString());
}

export default function ProfileCards({user, movies, series}: ProfileProps) {
    // Default img if movie doesn't have any movie poster
    const defaultImgUrl = "../../images/unavailable/poster_unavailable.jpg";

    // SORT BUTTON
    const handleSortChange = (sortOption: string) => {
        console.log('Sorting option selected:', sortOption);
    };
    const sortingOptions = [
        'Popularity ascending',
        'Popularity descending',
        'Release Date ascending',
        'Release Date descending',
        'Title (A-Z)',
        'Title (Z-A)',
    ];

    const bgColor = useColorModeValue('#e5e5e5', '#21201D');
    const textColor = useColorModeValue('#21201D', '#F0F0EE');


    return (
        <Box bg={bgColor} color={textColor}>
            <Flex py={{base: '75px', sm: '80px', md: '85px', lg: '90px', xl: '95px', "2xl": '100px'}}
                  alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w='80vw' display='grid'
                         gap={{base: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "22px"}}>
                        {/* Heading */}
                        <Text as="h2">
                            Liked movies and series
                        </Text>
                        {/* Liked movies and series */}
                        <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} display='grid' gap='20'>
                            {/* Liked movies */}
                            <GridItem w='100%' display='grid' gap={{
                                base: "12px",
                                sm: "14px",
                                md: "16px",
                                lg: "18px",
                                xl: "20px",
                                "2xl": "22px"
                            }}>
                                {/* H3 + sort button */}
                                <Box alignItems="top">
                                    <Flex justifyContent='space-between' alignItems="center">
                                        <Text as='h3'>
                                            {movies.length} liked movies
                                        </Text>
                                        <SortButton onSortChange={handleSortChange} sortingOptions={sortingOptions}/>
                                    </Flex>
                                </Box>
                                {/* Movie loop */}
                                {movies.length > 0 ? (
                                    <SimpleGrid columns={[3, 3, 4, 3, 3, 4]} gap={{
                                        base: "12px",
                                        sm: "14px",
                                        md: "16px",
                                        lg: "18px",
                                        xl: "22px",
                                        "2xl": "26px"
                                    }} className="SubheaderSm">
                                        {movies.slice(0, 6).map((movie) => (
                                            <Link to={"/singlemoviepage/" + movie.id}>
                                                <GridItem key={movie.id} w='100%' h='100%' display="grid" gap={{
                                                    base: "4px",
                                                    sm: "5px",
                                                    md: "6px",
                                                    lg: "7px",
                                                    xl: "8px",
                                                    "2xl": "9px"
                                                }} cursor='pointer'>
                                                    <AspectRatio ratio={2 / 3}>
                                                        <Image
                                                            objectFit="cover"
                                                            className='movie'
                                                            src={movie.poster_path}
                                                            fallbackSrc={defaultImgUrl}
                                                            alt={"Poster for: " + movie.title}
                                                        />
                                                    </AspectRatio>
                                                    <Box textAlign="center" alignItems="top" h={{
                                                        base: "30px",
                                                        sm: "35px",
                                                        md: "40px",
                                                        lg: "45px",
                                                        xl: "50px",
                                                        "2xl": "55px"
                                                    }} overflow="hidden">
                                                        <Text
                                                            className='MovieTitle'
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
                                ) : (
                                    <GridItem colSpan={6} py='20'>
                                        <Flex flexDirection="column" gap={{base: '20px', md: '25px', lg: '30px'}}
                                              alignContent="center" justifyContent="center">
                                            <Text className='SubheaderMdReg'>Oops, looks like you haven't liked any
                                                movies yet!</Text>
                                            <Center>
                                                <Link to={"/discover"}>
                                                    <PrimaryButton
                                                        onClick={() => selectedBox(0)}
                                                        buttonText="Discover series to like"
                                                    />
                                                </Link>
                                            </Center>
                                        </Flex>
                                    </GridItem>
                                )}
                                {/* View all button */}
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{
                                    base: '15px',
                                    sm: '15px',
                                    md: '15px',
                                    lg: '15px',
                                    xl: '20px',
                                    "2xl": '25px'
                                }}>
                                    {movies.length > 6 && (
                                        <Flex alignContent={"center"} justifyContent={"center"}>
                                            <Link to={"/liked/" + user.id}>
                                                <PrimaryButton
                                                    onClick={() => selectedBox(0)}
                                                    buttonText="View all liked movies"
                                                />
                                            </Link>
                                        </Flex>
                                    )}
                                </Flex>
                            </GridItem>
                            {/* Liked series */}
                            <GridItem w='100%' display='grid' justifyContent='top' gap={{
                                base: "12px",
                                sm: "14px",
                                md: "16px",
                                lg: "18px",
                                xl: "20px",
                                "2xl": "22px"
                            }}>
                                {/* H3 + sort button */}
                                <Box alignItems="top">
                                    <Flex justifyContent='space-between' alignItems="center">
                                        <Text as='h3'>
                                            {series.length} liked series
                                        </Text>
                                        <SortButton onSortChange={handleSortChange} sortingOptions={sortingOptions}/>
                                    </Flex>
                                </Box>
                                {/* Series loop */}
                                <SimpleGrid columns={[3, 3, 4, 3, 3, 4]} gap={{
                                    base: "12px",
                                    sm: "14px",
                                    md: "16px",
                                    lg: "18px",
                                    xl: "22px",
                                    "2xl": "26px"
                                }} className="SubheaderSm">
                                    {series.length > 0 ? (
                                        // Liked series content
                                        series.slice(0, 6).map((singleSeries) => (
                                            <Link to={"/singleseriespage/" + singleSeries.id}>
                                                <GridItem key={singleSeries.id} w='100%' h='100%' display="grid" gap={{
                                                    base: "4px",
                                                    sm: "5px",
                                                    md: "6px",
                                                    lg: "7px",
                                                    xl: "8px",
                                                    "2xl": "9px"
                                                }} cursor='pointer'>
                                                    <AspectRatio ratio={2 / 3}>
                                                        <Image
                                                            objectFit="cover"
                                                            className='movie'
                                                            src={singleSeries.poster_path}
                                                            fallbackSrc={defaultImgUrl}
                                                            alt={"Poster for: " + singleSeries.name}
                                                        />
                                                    </AspectRatio>
                                                    <Box textAlign="center" alignItems="top" h={{
                                                        base: "30px",
                                                        sm: "35px",
                                                        md: "40px",
                                                        lg: "45px",
                                                        xl: "50px",
                                                        "2xl": "55px"
                                                    }} overflow="hidden">
                                                        <Text
                                                            className='MovieTitle'
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
                                        ))
                                    ) : (
                                        <GridItem colSpan={6} py='20'>
                                            <Flex flexDirection="column" gap={{base: '20px', md: '25px', lg: '30px'}}
                                                  alignContent="center" justifyContent="center">
                                                <Text textAlign='center' className='SubheaderMdReg'>Oops, looks like you
                                                    haven't liked any series yet!</Text>
                                                <Center>
                                                    <Link to={"/discover"}>
                                                        <PrimaryButton
                                                            onClick={() => selectedBox(0)}
                                                            buttonText="Discover series to like"
                                                        />
                                                    </Link>
                                                </Center>
                                            </Flex>
                                        </GridItem>
                                    )}
                                </SimpleGrid>
                                {/* View all button */}
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{
                                    base: '15px',
                                    sm: '15px',
                                    md: '15px',
                                    lg: '15px',
                                    xl: '20px',
                                    "2xl": '25px'
                                }}>
                                    {series.length > 6 && (
                                        <Flex alignContent={"center"} justifyContent={"center"}>
                                            <Link to={"/liked/" + user.id}>
                                                <PrimaryButton
                                                    onClick={() => selectedBox(0)}
                                                    buttonText="View all liked series"
                                                />
                                            </Link>
                                        </Flex>
                                    )}
                                </Flex>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    )
}