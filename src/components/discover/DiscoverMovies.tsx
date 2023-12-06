import React, { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid, Text, Flex, Center, Heading, Link as ChakraLink } from '@chakra-ui/react';
import httpService from "../../services/httpService";
import DiscoverPrimaryFilter from './DiscoverPrimaryFilter';
import DiscoverSecondaryFilterDecade from './DiscoverSecondaryFilterDecade';
import DiscoverSecondaryFilterGenre from './DiscoverSecondaryFilterGenre';
import DiscoverSecondaryFilterLanguage from './DiscoverSecondaryFilterLanguage';
import DiscoverSecondaryFilterActor from './DiscoverSecondaryFilterActor';
import DiscoverSortBy from './DiscoverSortBy';
import { Link as ReactRouterLink } from 'react-router-dom'

interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

function DiscoverMovies() {
    const movieUrl = "movie/discover";
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [selectedDecade, setSelectedDecade] = useState<string | null>(null);
    const [selectedActor, setSelectedActor] = useState<number | null>(null);
    const [selectedPrimaryFilter, setSelectedPrimaryFilter] = useState<string | null>(null);

    const handleLanguageSelection = (selectedLanguage: string) => {
        setSelectedLanguage(selectedLanguage);
    }

    const handleGenreSelection = (selectedGenre: number) => {
        setSelectedGenre(selectedGenre);
    }

    const handleDecadeSelection = (selectedDecade: string) => {
        setSelectedDecade(selectedDecade);
    }

    const handleActorSelection = (selectedActor: number) => {
        setSelectedActor(selectedActor);
    }


    const fetchAllMovies = async () => {
        try {
            const { data } = await httpService.get(movieUrl, {
                params: {
                    genres: selectedGenre,
                    decade: selectedDecade,
                    original_language: selectedLanguage,
                    cast: selectedActor
                }
            });
            setMovieData(data);
        } catch (error) {
            console.error("Something went wrong fetching: ", error);
        }
    }

    useEffect(() => {
        fetchAllMovies();
        console.log("What is in genre param?: ", selectedGenre);
        console.log("What is in decade param?: ", selectedDecade);
        console.log("What is in language param?: ", selectedLanguage);
        console.log("What is in actor param?: ", selectedActor);
    }, [selectedGenre, selectedDecade, selectedLanguage, selectedActor]);

    const handlePrimaryFilterChange = (selectedOption: string) => {
        setSelectedPrimaryFilter(selectedOption);
    };

    const resetFilters = () => {
        setSelectedLanguage(null);
        setSelectedGenre(null);
        setSelectedDecade(null);
        setSelectedActor(null);
        setSelectedPrimaryFilter(null);
    };

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
                            {selectedPrimaryFilter === 'Popular' && (
                                <>
                                    {resetFilters()}
                                </>
                            )}

                            {selectedPrimaryFilter === 'Actor' && (
                                <>
                                    <Heading
                                        as='h3'
                                        pt='15px'
                                        fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                    >
                                        All actors
                                    </Heading>
                                    <DiscoverSecondaryFilterActor
                                        onChange={handleActorSelection}
                                    />
                                </>
                            )}

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
                                        onChange={handleDecadeSelection}
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
                                    <DiscoverSecondaryFilterLanguage
                                        onChange={handleLanguageSelection}
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
                                    <DiscoverSecondaryFilterGenre
                                        onChange={handleGenreSelection}
                                    />
                                </>
                            )}

                            <DiscoverSortBy
                                selectedCast={selectedActor}
                                selectedGenre={selectedGenre}
                                selectedDecade={selectedDecade}
                                selectedLanguage={selectedLanguage}/>

                        </Box>

                        <SimpleGrid
                            columns={[3, null, 5]}
                            gap={{ base: '7', md: '8', lg: '9' }}
                            fontWeight='500'
                            textTransform='capitalize'
                            fontSize={{ base: '13px', md: '14px', lg: '15px' }}
                        >
                            {movieData.map((movie) => (
                                <ChakraLink as={ReactRouterLink} key={movie.id} to={`/singlemoviepage/${movie.id}`}>
                                <Box
                                    key={movie.id}
                                    display="grid" gap="3"
                                    _hover={{ filter: 'brightness(115%)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' cursor="pointer"
                                >
                                    {movie.poster_path ? (
                                        <Image src={movie.poster_path}/>
                                        )
                                    :
                                    <Image src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'/>
                                    }
                                    <Text textAlign='center' fontWeight='500' fontSize={{ base: "13px", md: "13px", lg: "15px" }}>{movie.title}</Text>
                                </Box>
                                </ChakraLink>
                            ))}
                        </SimpleGrid>

                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default DiscoverMovies;
