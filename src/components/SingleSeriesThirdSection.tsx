import React from 'react';
import '../App.css';
import {
    AspectRatio,
    Box,
    Center,
    Flex,
    Heading
} from '@chakra-ui/react';

function SingleSeriesThirdSection() {
    return (
        <Box backgroundImage="url(https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png)" backgroundPosition="center"
             backgroundRepeat="no-repeat" backgroundSize="cover">
            <Box backdropFilter="auto" backdropBlur="5px">
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w="80vw">
                        <Heading as='h2' mb={{ base: '4', md: '5', lg: '6' }} fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                            Trailer
                        </Heading>
                        <AspectRatio maxH={{ base: '40vh', md: '60vh', lg: '70vh' }} ratio={1}>
                            <iframe
                                title='naruto'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                </Center>
            </Flex>
            </Box>
        </Box>
    );
}

export default SingleSeriesThirdSection;