import React from 'react';
import YouTube from 'react-youtube';
import '../App.css';
import {
    AspectRatio,
    Box,
    Center,
    Text,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';
import {Movie, Trailer} from "../pages/SingleMoviePage";

interface SingleMovieFifthSectionProps {
    movie: Movie;
    trailer: Trailer;
}

function SingleMovieThirdSection({ movie, trailer }: SingleMovieFifthSectionProps) {

    // Const for light/dark mode
    const bgColor = useColorModeValue('#dbdbdb', '#1A1917');
    const textColor = useColorModeValue('#21201D', '#F0F0EE');

    console.log("TRAILER", trailer);

    return (
        trailer ? (
            <Box bg={bgColor} color={textColor}>
                <Flex
                    py={{
                        base: '75px',
                        sm: '80px',
                        md: '85px',
                        lg: '90px',
                        xl: '95px',
                        '2xl': '100px',
                    }}
                    alignContent={'center'}
                    justifyContent={'center'}
                >
                    <Center>
                        <Box w="80vw" display='grid' gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }}>
                            <Text
                                as="h2"
                            >
                                {movie.title}
                            </Text>
                            <AspectRatio
                                h={{base: '30vh', sm:'40vh', md: '50vh', lg: '60vh', xl:'70vh', "2xl":'80vh'}}
                                w='100%'
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
        ) : (
            <span className='SubheaderMdReg'>No trailer available</span>
        )
    );
}

    const extractVideoId = (url: string) => {
    const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/);
    return match ? match[1] : '';
};

export default SingleMovieThirdSection;