import React, { useEffect, useState } from 'react';
import './../../App.css';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import httpService from "../../services/httpService";

interface Movie {
    id: string;
    title: string;
}

interface MovieData {
    movies: Movie[];
}

function DiscoverMovies() {
    const movieUrl = "movie/discover"
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const genres = '12'

    const fetchAllMovies = async(genres: string) => {
        try {
            const {data} = await httpService.get(movieUrl, {
                params: {
                    genres: genres
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
                            src='gibbresh.png'
                            fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                        />
                    <Text textAlign='center' fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>{movie.title}</Text>
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default DiscoverMovies;
