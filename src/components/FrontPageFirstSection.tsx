import React from 'react';
import '../App.css';
import { Image } from '@chakra-ui/react';
import { GridItem } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { Center} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

import Signup from "./SignupModal";


function FrontPageFirstSection() {

    return (
        <SimpleGrid columns={[1, null, 2]} spacing='0px' bg='#1A1917' color='#dcdbd8'>
            <GridItem>
                <Flex w='100%' height={{ base: '55vh', md: '90vh', lg: '90vh' }} alignContent={"center"} justifyContent={"center"}>
                    <Center>
                        <Box maxW={{ base: '87%', md: '87%', lg: '85%' }}>
                            <Heading mb={{ base: '7', md: '8', lg: '9' }} fontSize={{ base: "35px", md: "40px", lg: "45px" }}>
                                Start Swiping Today!
                            </Heading>
                            <Text mb={{ base: '12', md: '14', lg: '16' }} fontSize={{ base: "20px", md: "21px", lg: "22px" }} lineHeight='1.7'>
                                Fed up with the endless scrolling and disagreements when trying to pick a movie to watch with friends or family?
                                Look no further – welcome to the ultimate platform for matching your movie interests.
                                Join us today and let the cinematic matchmaking begin!
                            </Text>
                            <Signup/>
                        </Box>
                    </Center>
                </Flex>
            </GridItem>
            <GridItem w='100%' height={{ base: '45vh', md: '90vh', lg: '90vh' }} bg='blue.500'>
                <Image
                    boxSize=''
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                    alt='Placeholder'
                />
            </GridItem>
        </SimpleGrid>
    );
}

export default FrontPageFirstSection;