import React from 'react';
import '../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    Heading,
    SimpleGrid,
    Text
} from '@chakra-ui/react';
import Signup from "./SignupModal";


function FrontPageFirstSection() {
    return (
        <SimpleGrid columns={[1, null, 2]} spacing='0px' color='#dcdbd8'>
            <GridItem>
                <Flex py={{ base: '80px', md: '', lg: '90px' }} w='100%' minH={{ base: '55vh', md: '90vh', lg: '92.5vh' }} alignContent={"center"} justifyContent={"center"}>
                    <Center >
                        <Box maxW='87%'>
                            <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }}>
                                <Heading as='h1' fontSize={{ base: "35px", md: "40px", lg: "45px" }}>
                                    Start Swiping Today!
                                </Heading>
                                <Text fontSize={{ base: "20px", md: "21px", lg: "22px" }}  maxW='85%' lineHeight='1.9' mb={{ base: "4", md: "6", lg: "8" }}>
                                    Fed up with the endless scrolling and disagreements when trying to pick a movie to watch with friends or family?
                                    Look no further – welcome to the ultimate platform for matching your movie interests.
                                    Join us today and let the cinematic matchmaking begin!
                                </Text>
                            </Box>
                            <Signup/>
                        </Box>
                    </Center>
                </Flex>
            </GridItem>
        </SimpleGrid>
    );
}

export default FrontPageFirstSection;