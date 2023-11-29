import React, { useEffect, useState } from 'react';
import './../../App.css';
import { Box, Image, SimpleGrid, Text, Flex, Center, Heading } from '@chakra-ui/react';
import httpService from "../../services/httpService";
import DiscoverPrimaryFilter from './DiscoverPrimaryFilter';
import DiscoverSecondaryFilterDecade from './DiscoverSecondaryFilterDecade';
import DiscoverSecondaryFilterGenre from './DiscoverSecondaryFilterGenre';
import DiscoverSecondaryFilterLanguage from './DiscoverSecondaryFilterLanguage';
import DiscoverSortBy from './DiscoverSortBy';



interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

interface DiscoverMovieProps {
    languageNames: string[]
}

function DiscoverMovies() {
    const movieUrl = "movie/discover"
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const genres = '12'
    const decade = ''
    const language = ''

    const fetchAllMovies = async(genres: string) => {
        try {
            const {data} = await httpService.get(movieUrl, {
                params: {
                    genres: genres,
                    decade: decade,
                    original_language: language
                }
            });
            setMovieData(data)
        } catch (error) {
            console.error("Something went wrong fetching: ", error)
        }
    }

    useEffect(() => {
        fetchAllMovies(genres)
    }, []);

    const [selectedPrimaryFilter, setSelectedPrimaryFilter] = useState<string | null>(null);
    const [selectedSecondaryFilters, setSelectedSecondaryFilters] = useState<string[]>([]);

    const handlePrimaryFilterChange = (selectedOption: string) => {
        setSelectedPrimaryFilter(selectedOption);
        // Clear secondary filters when changing the primary filter
        setSelectedSecondaryFilters([]);
    };

    const handleSecondaryFilterChange = (selectedFilters: string[]) => {
        // Update the selected secondary filters
        setSelectedSecondaryFilters(selectedFilters);
    };

    /*useEffect(() => {
        fetch('http://localhost:8080/movie/discover')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                console.log('This is the fetched data', data);
                setMovieData(data);
            });
    }, []);*/

    /*if (movieData == null) {
        return <div>Something went wrong... Please refresh the page</div>;
    }*/

    console.log("This is the movieData:", movieData);

    return (
                <Box bg='#1A1917' color='#dcdbd8'>
                    <Flex
                        py={{ base: '75px', md: '', lg: '90px' }}
                        alignContent={'center'}
                        justifyContent={'center'}
                    >
                        <Center>
                            <Box
                                display='grid'
                                gridGap={{ base: '16', md: '18', lg: '20' }}
                                w='80vw'
                            >
                                <Flex alignContent={'center'} justifyContent={'center'}>
                                    <Heading
                                        as='h1'
                                        fontSize={{ base: '35px', md: '40px', lg: '45px' }}
                                        textTransform='capitalize'
                                    >
                                        Discover Movies
                                    </Heading>
                                </Flex>

                                <Box
                                    display='grid'
                                    gridGap={{ base: '4', md: '6', lg: '6' }}
                                >
                                    <Heading
                                        as='h2'
                                        fontSize={{ base: '25px', md: '30px', lg: '35px' }}
                                    >
                                        Discover by
                                    </Heading>
                                    <DiscoverPrimaryFilter
                                        onChange={handlePrimaryFilterChange}
                                    />

                                    {selectedPrimaryFilter === 'Decade' && (
                                        <>
                                            <Heading
                                                as='h3'
                                                pt='15px'
                                                fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                            >
                                                All decades
                                            </Heading>
                                            <DiscoverSecondaryFilterDecade
                                                decadeYears={selectedSecondaryFilters}
                                                onChange={handleSecondaryFilterChange}
                                            />
                                        </>
                                    )}

                                    {selectedPrimaryFilter === 'Language' && (
                                        <>
                                            <Heading
                                                as='h3'
                                                pt='15px'
                                                fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                            >
                                                Popular languages
                                            </Heading>
                                            {/* Use DiscoverSecondaryFilterLanguage here */}
                                            <DiscoverSecondaryFilterLanguage
                                                languageNames={selectedSecondaryFilters}
                                                onChange={handleSecondaryFilterChange}
                                            />
                                        </>
                                    )}

                                    {selectedPrimaryFilter === 'Genre' && (
                                        <>
                                            <Heading
                                                as='h3'
                                                pt='15px'
                                                fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                            >
                                                All genres
                                            </Heading>
                                            {/* Use DiscoverSecondaryFilterGenre here */}
                                            <DiscoverSecondaryFilterGenre
                                                genreNames={selectedSecondaryFilters}
                                                onChange={handleSecondaryFilterChange}
                                            />
                                        </>
                                    )}

                                    <DiscoverSortBy />

                                </Box>

                                <SimpleGrid
                                    columns={[3, null, 5]}
                                    gap={{ base: '7', md: '8', lg: '9' }}
                                    fontWeight='500'
                                    textTransform='capitalize'
                                    fontSize={{ base: '13px', md: '14px', lg: '15px' }}
                                >
                                    {movieData.map((movie) => (
                                        <Box
                                            key={movie.id}
                                            display="grid" gap="3"
                                            _hover={{ filter: 'brightness(115%)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' cursor="pointer"
                                        >

                                            <Image
                                                src={movie.poster_path}
                                                fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                            />
                                            <Text textAlign='center' fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>{movie.title}</Text>
                                        </Box>
                                    ))}
                                </SimpleGrid>

                            </Box>
                        </Center>
                    </Flex>
                </Box>


    );
}

export default DiscoverMovies;
