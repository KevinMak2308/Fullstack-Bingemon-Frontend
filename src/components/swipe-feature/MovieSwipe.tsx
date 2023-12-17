import React, { useState } from 'react';
import httpService from "../../services/httpService";
import {Box, Text, SimpleGrid, GridItem, Flex, HStack, Button} from '@chakra-ui/react';
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
    videos: Videos[]
}

interface Genre {
    name: string
}

interface Videos {
    type: string,
    official: boolean
    key: string
}

export default function MovieSwipe() {
    const movieListUrl = `movie/swipe`
    const [genreData, setGenreData] = useState<Genre[]>([])
    const [videosData, setVideosData] = useState<Videos[]>([])
    const [movieListData, setMovieListData] = useState<Movie[]>([])
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
            const { data } = await httpService.get(movieListUrl, {
                params: {
                    genres: selectedGenre,
                    original_language: selectedLanguage,
                    decade: selectedDecades,
                    }
                });
                setCurrentMovie(0)
                setMovieListData(data.results);
                console.log("JSON Array in fetchAllMovies: ", data.results)
                fetchSingleMovie(data.results[0].id)
                console.log("JSON object from fetchSingleMovie inside fetchAllMovies: ", data.results[currentMovie])
            } catch (error) {
                console.error("Something went wrong fetching: ", error);
            }
        }

    const fetchAllData = async () => {
        await fetchAllMovies()
    }

    const fetchSingleMovie = async (id: string) => {
        try {
            const { data } = await httpService.get(`movie/${id}`);
            setVideosData(data.videos.results)
            setGenreData(data.genres)
            console.log("JSON object in fetchSingleMovie: ", data)
        } catch (error) {
            console.log("Something went wrong fetching single movie: ", error)
        }
    }

    const renderNextMovie = async () => {
        if(currentMovie < movieListData.length -1) {
            console.log("Current Movie in handleNextMovie: ", movieListData[currentMovie].id)
            const nextMovie = currentMovie + 1
            setCurrentMovie(nextMovie)
            await fetchSingleMovie(movieListData[nextMovie].id)

        }
    }

    const renderNextMovieAndAddToList = async () => {
        if(currentMovie < movieListData.length -1) {
            console.log("Current Movie in handleNextMovie: ", movieListData[currentMovie].id)
            const nextMovie = currentMovie + 1
            setCurrentMovie(nextMovie)
            await fetchSingleMovie(movieListData[nextMovie].id)

        }
    }

    const officialMovieTrailer = videosData.filter((trailer) => trailer.type.includes('Trailer')).map((trailer) => (trailer.key))

    return (
        <>
        <Box
            py={"40px"}
            display='flex'
            flexWrap={"wrap"}
            justifyContent='center'
            alignItems='center'
            gap='20px'>
            <Genre onChange={handleGenreSelection}/>
            <Language onChange={handleLanguageSelection}/>
            <Decades onChange={handleDecadesSelection}/>
            <Button
                py={{base: "19px", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px"}}
                px={{base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px"}}
                w="fit-content"
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border=''
                borderRadius='10px'
                fontSize={{ base: "12px", sm:"13px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}
                fontFamily='Roboto'
                fontWeight='semibold'
                letterSpacing='0.75px'
                bg='#A61212'
                color='#F0F0EE'
                _hover={{ filter: 'brightness(1.2)' }}
                _active={{ bg: '#A61212', filter: 'brightness(1.2)' }}
                _focus={{ boxShadow: 'none' }}
                onClick={fetchAllData}>
                See Your Movies
            </Button>
        </Box>
            {movieListData.length > 0 && (
                <Box>
            <Flex
                alignContent={"center"} justifyContent={"center"}>

            <SimpleGrid
                w="80vw"
                border='2px'
                borderColor='#A61212'
                columns={[1, null, 2]}
                spacing='0px'
                backgroundSize={"100%"}
                objectFit={"fill"}
                backgroundRepeat={"no-repeat"}
                position="relative"
                overflow="hidden">


                <Box
                    backgroundImage={"https://image.tmdb.org/t/p/original/" + movieListData[currentMovie].backdrop_path}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    position="absolute"
                    top="0"
                    bottom="0"
                    left="0"
                    right="0"
                    zIndex="-1"
                    opacity={"0.4"}

                />

                <GridItem>
                    <Flex  pb={{ base: '10px', md: '40px', lg: '40px' }} pt={{base: '20px', md: '40px', lg: '40px' }}  alignContent={"center"} justifyContent={"center"}>
                        <Box maxW={{base:"80%", lg:"87%"}}>
                            <Flex flexDirection="column" gap="3">
                                <Text as='h1' fontSize={{ base: "35px", md: "40px", lg: "45px" }}>{movieListData[currentMovie].title}</Text>
                                <Flex
                                gap="40px">
                                    <HStack>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>
                                        <p className='SubheaderSmBold'>{movieListData[currentMovie].vote_average}</p>
                                    </HStack>
                                    <HStack>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 6h14v2H5z" opacity=".3"/><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                                        <p className='SubheaderSmBold'>{new Date(movieListData[currentMovie].release_date).getFullYear()}</p>
                                    </HStack>
                                </Flex>
                                <Text className='BodyReg'>{movieListData[currentMovie].overview}</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex pb={{ base: '20px', md: '40px', lg: '40px' }} pt={{base: '10px', md: '40px', lg: '40px' }} flexDirection="column" mr={{base:"0", md:"30px", lg:"55px"}} mx={{base:"10px"}} >
                    <Flex justifyContent={{base:"center", md:"center", lg:"end" }} gap={"2"}>
                        {genreData.map((genre) => (
                                <Button
                                    py={{ base: "15px", md: "16px", lg: "17px" }}
                                    px={{ base: "23px", md: "24px", lg: "25px" }}
                                    lineHeight="1.2"
                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                    borderRadius="100px"
                                    border="2px"
                                    bg="#21201d"
                                    className="BodyBold"
                                    cursor="default"
                                    borderColor="#A61212"
                                    _hover={{ bg: "" }}
                                    _active={{ bg: "" }}
                                    _focus={{ boxShadow: 'none' }}>
                                    {genre.name}</Button>
                        ))}
                    </Flex>
                    {officialMovieTrailer.length > 0 && (
                        <Box
                        pt="10px"
                        h={{base:"25vh", md:"30vh", lg:"40vh"}}>
                            <iframe src={`https://www.youtube.com/embed/${officialMovieTrailer[officialMovieTrailer.length -1]}`} width="100%" height="100%"/>
                        </Box>
                    )}
                    </Flex>
                </GridItem>
            </SimpleGrid>
            </Flex>
            <Flex alignContent={"center"} justifyContent={"center"} py={"40px"} gap={"60px"}>
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
                </Box>
            )}
        </>
    )
}
