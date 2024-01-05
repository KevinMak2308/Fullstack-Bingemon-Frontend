import React, {useEffect, useState} from 'react';
import {
    AspectRatio,
    Box,
    Center,
    Flex,
    GridItem,
    Image,
    Link,
    SimpleGrid,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import '../../App.css';
import httpService from "../../services/httpService";
import DiscoverPrimaryFilter from './DiscoverPrimaryFilter';
import DiscoverSecondaryFilterDecade from './DiscoverSecondaryFilterDecade';
import DiscoverSecondaryFilterGenre from './DiscoverSecondaryFilterGenre';
import DiscoverSecondaryFilterLanguage from './DiscoverSecondaryFilterLanguage';
import DiscoverSecondaryFilterActor from './DiscoverSecondaryFilterActor';
import {Link as ReactRouterLink} from 'react-router-dom'
import BackButton from '../buttons/BackButton';
import DiscoverSortBy from './DiscoverSortBy';

interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

function DiscoverMovies() {
    const defaultBgColor = useColorModeValue('#dbdbdb', '#1A1917');
    const defaultTextColor = useColorModeValue('#21201D', '#F0F0EE');
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

    // Default img if movie doesn't have any movie poster
    const defaultImgUrl = "http://127.0.0.1:8080/default/poster_unavailable.jpg";

    const fetchAllMovies = async () => {
        try {
            const {data} = await httpService.get(movieUrl, {
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
        const fetchData = async () => {
            await fetchAllMovies();
            console.log("What is in genre param?: ", selectedGenre);
            console.log("What is in decade param?: ", selectedDecade);
            console.log("What is in language param?: ", selectedLanguage);
            console.log("What is in actor param?: ", selectedActor);
        };

        fetchData();

    }, );

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

    console.log("fred på jord")

    return (
        <Box bg={defaultBgColor} color={defaultTextColor}>
            {/* Back button */}
            <BackButton/>
            <Flex
                py={{base: '75px', sm: '80px', md: '85px', lg: '90px', xl: '95px', "2xl": '100px'}}
                alignContent={'center'}
                justifyContent={'center'}
            >
                <Center>
                    <Box
                        display='grid'
                        gridGap={{base: '6', sm: '8', md: '10', lg: '10', xl: '12', "2xl": '14'}}
                        w='80vw'
                    >
                        <Flex alignContent={'center'} justifyContent={'center'}>
                            <Text
                                as='h1'
                            >
                                Discover Movies
                            </Text>
                        </Flex>

                        <Box
                            display='grid'
                            gridGap={{base: '4', md: '6', lg: '6'}}
                        >
                            <Text
                                as='h2'
                            >
                                Discover by
                            </Text>
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
                                    <Text
                                        as='h3'
                                    >
                                        All actors
                                    </Text>
                                    <DiscoverSecondaryFilterActor
                                        onChange={handleActorSelection}
                                    />
                                </>
                            )}

                            {selectedPrimaryFilter === 'Decade' && (
                                <>
                                    <Text
                                        as='h3'
                                    >
                                        All decades
                                    </Text>
                                    <DiscoverSecondaryFilterDecade
                                        onChange={handleDecadeSelection}
                                    />
                                </>
                            )}

                            {selectedPrimaryFilter === 'Language' && (
                                <>
                                    <Text
                                        as='h3'
                                    >
                                        Popular languages
                                    </Text>
                                    <DiscoverSecondaryFilterLanguage
                                        onChange={handleLanguageSelection}
                                    />
                                </>
                            )}

                            {selectedPrimaryFilter === 'Genre' && (
                                <>
                                    <Text
                                        as='h3'
                                    >
                                        All genres
                                    </Text>
                                    <DiscoverSecondaryFilterGenre
                                        onChange={handleGenreSelection}
                                    />
                                </>
                            )}
                            {/* Chosen tags and sort button */}
                            <DiscoverSortBy
                                selectedCast={selectedActor}
                                selectedGenre={selectedGenre}
                                selectedDecade={selectedDecade}
                                selectedLanguage={selectedLanguage}
                            />
                        </Box>
                        {/* Movies/series (loop) */}
                        <SimpleGrid columns={[2, 3, 3, 4, 5, 6]}
                                    gap={{base: "3", sm: "4", md: "5", lg: "6", xl: "7", "2xl": "8"}}>
                            {movieData.map((movie) => (
                                <Link
                                    as={ReactRouterLink}
                                    key={movie.id}
                                    to={`/singlemoviepage/${movie.id}`}
                                    _hover={{textDecoration: 'none'}}
                                >
                                    <GridItem key={movie.id} w='100%' h='100%' display="grid" gap={{
                                        base: "4px",
                                        sm: "5px",
                                        md: "6px",
                                        lg: "7px",
                                        xl: "8px",
                                        "2xl": "9px"
                                    }} cursor='pointer' position="relative">
                                        <AspectRatio ratio={2 / 3}>
                                            <Image
                                                objectFit="cover"
                                                className='movie'
                                                src={movie.poster_path}
                                                fallbackSrc={defaultImgUrl}
                                                alt={`Poster for: ${'title' in movie ? movie.title : ''}`}
                                            />
                                        </AspectRatio>
                                        <Text
                                            textAlign="center"
                                            h={{
                                                base: "30px",
                                                sm: "35px",
                                                md: "40px",
                                                lg: "45px",
                                                xl: "50px",
                                                "2xl": "55px"
                                            }}
                                            className='MovieTitle'
                                            overflow="hidden"
                                            display="-webkit-box"
                                            style={{
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                maxWidth: '100%',
                                            }}>
                                            {movie.title}
                                        </Text>
                                    </GridItem>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default DiscoverMovies;
