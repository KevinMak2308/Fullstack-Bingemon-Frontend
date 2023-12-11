import React, { useCallback, useState } from 'react';
import '../../App.css';
import {
    Image,
    Text,
    Box,
    useColorModeValue,
    Flex,
    Center,
    SimpleGrid,
    GridItem,
    AspectRatio
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { User, Movie, Series } from "../../pages/ProfilePage";
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

export default function ProfileCards({ user, movies, series }: ProfileProps) {
    // Default img if movie doesn't have any movie poster
    const defaultImgUrl = "http://127.0.0.1:8080/default/poster_unavailable.jpg";

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

    return (
        <Box bg={useColorModeValue('#e5e5e5', '#21201D')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{ base: '75px', sm:'80px', md: '85px', lg: '90px', xl:'95px', "2xl":'100px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w='80vw' display='grid' gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"20px", "2xl":"22px" }}>
                        {/* Heading */}
                        <Text as="h2">
                            Liked movies and series
                        </Text>
                        {/* Liked movies and series */}
                        <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} display='grid' gap='20' >
                            {/* Liked movies */}
                            <GridItem w='100%' display='grid' gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"20px", "2xl":"22px" }}>
                                {/* H3 + sort button */}
                                <Box alignItems="top">
                                    <Flex justifyContent='space-between' alignItems="center">
                                        <Text as='h3'>
                                            {movies.length} liked movies
                                        </Text>
                                        <SortButton onSortChange={handleSortChange} sortingOptions={sortingOptions} />
                                    </Flex>
                                </Box>
                                {/* Movie loop */}
                                <SimpleGrid columns={[3, 3, 4, 3, 3, 4]} gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"22px", "2xl":"26px" }} className="SubheaderSm">
                                    {movies.slice(0, 6).map((movie) => (
                                        <Link to={"/singlemoviepage/" + movie.id}>
                                            <GridItem key={movie.id} w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                                <AspectRatio ratio={2 / 3}>
                                                    <Image
                                                        objectFit="cover"
                                                        className='movie'
                                                        src={movie.poster_path}
                                                        fallbackSrc={defaultImgUrl}
                                                        alt={"Poster for: " + movie.title}
                                                    />
                                                </AspectRatio>
                                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
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
                                {/* View all button */}
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: '15px', sm:'15px', md: '15px', lg: '15px', xl:'20px', "2xl":'25px' }}>
                                    {movies.length <= 6 ? (null)
                                        :
                                        (
                                        <Flex alignContent={"center"} justifyContent={"center"}>
                                            <Link to={"/liked/" + user.id}>
                                                <PrimaryButton
                                                    onClick={() => selectedBox(0)}
                                                    buttonText="View all liked movies"
                                                />
                                            </Link>
                                        </Flex>
                                        )
                                    }
                                </Flex>
                            </GridItem>
                            {/* Liked series */}
                            <GridItem w='100%' display='grid' justifyContent='top' gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"20px", "2xl":"22px" }}>
                                {/* H3 + sort button */}
                                <Box alignItems="top">
                                    <Flex justifyContent='space-between' alignItems="center">
                                        <Text as='h3'>
                                            {series.length} liked series
                                        </Text>
                                        <SortButton onSortChange={handleSortChange} sortingOptions={sortingOptions} />
                                    </Flex>
                                </Box>
                                {/* Series loop */}
                                <SimpleGrid columns={[3, 3, 4, 3, 3, 4]} gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"22px", "2xl":"26px" }} className="SubheaderSm">
                                    {series.slice(0, 6).map((singleSeries) => (
                                        <Link to={"/singleseriespage/" + singleSeries.id}>
                                            <GridItem key={singleSeries.id} w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                                <AspectRatio ratio={2 / 3}>
                                                    <Image
                                                        objectFit="cover"
                                                        className='movie'
                                                        src={singleSeries.poster_path}
                                                        fallbackSrc={defaultImgUrl}
                                                        alt={"Poster for: " + singleSeries.name}
                                                    />
                                                </AspectRatio>
                                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
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
                                    ))}
                                </SimpleGrid>
                                {/* View all button */}
                                <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: '15px', sm:'15px', md: '15px', lg: '15px', xl:'20px', "2xl":'25px' }}>
                                    {series.length <= 6 ? (null)
                                        :
                                        (
                                            <Flex alignContent={"center"} justifyContent={"center"}>
                                                <Link to={"/liked/" + user.id}>
                                                    <PrimaryButton
                                                        onClick={() => selectedBox(0)}
                                                        buttonText="View all liked series"
                                                    />
                                                </Link>
                                            </Flex>
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