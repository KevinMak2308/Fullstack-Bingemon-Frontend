import React, { useEffect, useState } from 'react';
import httpService from "../../services/httpService";
import {Box, Text, SimpleGrid, GridItem, Flex, Heading, HStack, Button} from '@chakra-ui/react';
import Genre from "./Genre";
import Language from "./Language"
import Decades from "./Decades"

interface Movie {
    id: string;
    title: string;
    overview: string;
    vote_average: string;
    release_date: string;
    backdrop_path: string;
    genre: Genre[]
    credits: Credits[]
    videos: Videos[]
}

interface Genre {
    name: string
}

interface Credits {
    name: string
}

interface Videos {
    type: string,
    official: boolean
    key: string
}

export default function MovieSwipe() {
    const movieUrl = `movie/swipe`
    const [genreData, setGenreData] = useState<Genre[]>([])
    const [creditsData, setCreditsData] = useState<Credits[]>([])
    const [videosData, setVideosData] = useState<Videos[]>([])
    const [movieData, setMovieData] = useState<Movie[]>([])
    const [currentMovie, setCurrentMovie] = useState(0)
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedDecades, setSelectedDecades] = useState<string | null>(null);

    const handleGenreSelection = (selectedGenre: number) => {
        setSelectedGenre(selectedGenre);
    }

    const handleLanguageSelection = (selectedLanguage: string) => {
        setSelectedLanguage(selectedLanguage);
    }

    const handleDecadesSelection = (selectedDecades: string) => {
        setSelectedDecades(selectedDecades);
    }


        const fetchAllMovies = async () => {
            try {
                const { data } = await httpService.get(movieUrl, {
                    params: {
                        genres: selectedGenre,
                        original_language: selectedLanguage,
                        decade: selectedDecades,
                    }
                });
                setMovieData(data.results);
                console.log("This is our json array: ", data.results)
            } catch (error) {
                console.error("Something went wrong fetching: ", error);
            }
        }

    const handleSingleMovie = () => {
            if(currentMovie < movieData.length -1) {
                const movie = movieData[currentMovie]
                console.log("Single movie json: ", movie)
                setCurrentMovie(currentMovie)
            }
    }

    const renderNextMovie = () => {
        setCurrentMovie(currentMovie + 1)
    }

    const renderNextMovieAndAddToList = () => {
        // Indsæt film id til user movie list
        setCurrentMovie(currentMovie + 1)
    }

    useEffect(() => {
        fetchAllMovies()
        console.log("What is in genre param?: ", selectedGenre);
        console.log("What is in language param?: ", selectedLanguage);
        handleSingleMovie()
    }, [selectedGenre, selectedLanguage, selectedDecades])



    return (
        <>
        <Box
            pt={"40px"}
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap='20px'>
            <Genre onChange={handleGenreSelection}/>
            <Language onChange={handleLanguageSelection}/>
            <Decades onChange={handleDecadesSelection}/>
        </Box>

            <Flex
                alignContent={"center"} justifyContent={"center"} pt={"40px"} >
                {movieData.length > 0 && (

            <SimpleGrid
                w={"80%"}
                border='2px'
                borderColor='#A61212'
                columns={[2, null, 2]}
                spacing='0px'
                backgroundImage={"https://image.tmdb.org/t/p/original/" + movieData[currentMovie].backdrop_path}
                backgroundSize={"100%"}
                objectFit={"fill"}
                backgroundRepeat={"no-repeat"}>


                <GridItem>
                    <Flex py={{ base: '40px', md: '40px', lg: '40px' }}  alignContent={"center"} justifyContent={"center"}>
                        <Box maxW={{base:"80%", lg:"87%"}}>
                            <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }}>
                                <Heading>{movieData[currentMovie].title}</Heading>
                                <Flex
                                gap="40px">
                                    <HStack>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>
                                        <p>{movieData[currentMovie].vote_average}</p>
                                    </HStack>
                                    <HStack>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 6h14v2H5z" opacity=".3"/><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                                        <p>{new Date(movieData[currentMovie].release_date).getFullYear()}</p>
                                    </HStack>
                                </Flex>
                                <Text>{movieData[currentMovie].overview}</Text>
                            </Box>
                        </Box>
                    </Flex>
                </GridItem>
            </SimpleGrid>
                )}
            </Flex>
            <Flex alignContent={"center"} justifyContent={"center"} pt={"40px"} gap={"60px"}>
                <Button
                    bg={"#A61212"}
                    borderRadius={"50%"}
                    w={"60px"}
                    h={"60px"}
                    onClick={renderNextMovie}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>
                </Button>
                <Button
                    bg={"#A61212"}
                    borderRadius={"50%"}
                    w={"60px"}
                    h={"60px"}
                    onClick={renderNextMovieAndAddToList}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"/></svg>
                </Button>
            </Flex>
        </>
    )
}
