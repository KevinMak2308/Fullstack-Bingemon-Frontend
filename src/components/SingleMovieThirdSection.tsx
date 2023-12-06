import React from 'react';
import YouTube from 'react-youtube';
import '../App.css';
import {
    AspectRatio,
    Box,
    Center,
    Flex,
    Heading
} from '@chakra-ui/react';
import {Movie, Trailer} from "../pages/SingleMoviePage";

interface SingleMovieFifthSectionProps {
    movie: Movie;
    trailer: Trailer;
}

function SingleMovieThirdSection({ movie, trailer }: SingleMovieFifthSectionProps) {
    console.log("TRAILER", trailer);
    return (
        trailer ? (
            <Box
                bg="#1A1917"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                color="#dcdbd8"
                height="100vh"
            >
                <Box backdropFilter="auto">
                    <Flex
                        py={{base: '75px', md: '', lg: '90px'}}
                        alignContent={'center'}
                        justifyContent={'center'}
                    >
                        <Center>
                            <Box w="80vw">
                                <Heading
                                    as="h2"
                                    mb={{base: '4', md: '5', lg: '6'}}
                                    fontSize={{base: '25px', md: '30px', lg: '35px'}}
                                >
                                    {movie.title}
                                </Heading>
                                <AspectRatio
                                    maxH={{base: '40vh', md: '60vh', lg: '70vh'}}
                                    ratio={1}
                                >
                                    <YouTube
                                        videoId={extractVideoId(trailer.key)}
                                        opts={{width: '100%', height: '100%', playerVars: {autoplay: 0}}}
                                    />
                                </AspectRatio>
                            </Box>
                        </Center>
                    </Flex>
                </Box>
            </Box>
        ) : (
            <span>No trailer available</span>
        )
    );
}

    const extractVideoId = (url: string) => {
    const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/);
    return match ? match[1] : '';
};

export default SingleMovieThirdSection;