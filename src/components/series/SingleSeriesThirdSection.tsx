import React from 'react';
import YouTube from 'react-youtube';
import '../../App.css';
import {
    AspectRatio,
    Box,
    Center,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';
import {Series, Trailer} from "../../pages/SingleSeriesPage";

interface SingleSeriesThirdSectionProps {
    series: Series;
    trailer: Trailer | null;
}

function SingleSeriesThirdSection({ series, trailer }: SingleSeriesThirdSectionProps) {
    if (!trailer || !trailer.key) {
        return (
            <Box
                bg="#1D1C1A"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                color="#dcdbd8"
                height="fit-content"
            >
                <Box backdropFilter="auto">
                    <Flex
                        py={{ base: '75px', md: '', lg: '90px' }}
                        alignContent={'center'}
                        justifyContent={'center'}
                    >
                        <Center>
                            <Text fontSize={{ base: "15px", md: "17px", lg: "19px" }} fontWeight="600" textAlign="center">No trailer available for this series.</Text>
                        </Center>
                    </Flex>
                </Box>
            </Box>
        );
    }
    return (
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
                    py={{ base: '75px', md: '', lg: '90px' }}
                    alignContent={'center'}
                    justifyContent={'center'}
                >
                    <Center>
                        <Box w="80vw">
                            <Heading
                                as="h2"
                                mb={{ base: '4', md: '5', lg: '6' }}
                                fontSize={{ base: '25px', md: '30px', lg: '35px' }}
                            >
                                {series.name}
                            </Heading>
                            <AspectRatio
                                maxH={{ base: '40vh', md: '60vh', lg: '70vh' }}
                                ratio={1}
                            >
                                <YouTube
                                    videoId={extractVideoId(trailer.key)}
                                    opts={{ width: '100%', height: '100%', playerVars: { autoplay: 0 } }}
                                />
                            </AspectRatio>
                        </Box>
                    </Center>
                </Flex>
            </Box>
        </Box>
    );
}

const extractVideoId = (url: string | undefined) => {
    if (url) {
        const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/);
        return match ? match[1] : '';
    }
    return '';
};

export default SingleSeriesThirdSection;