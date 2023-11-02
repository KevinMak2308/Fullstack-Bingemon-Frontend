import React from 'react';
import '../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    Heading,
    Image,
    SimpleGrid
} from '@chakra-ui/react';

function SingleSeriesFourthSection() {
    return (
        <Box bg='#1A1917' color='#dcdbd8'>
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                        <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                            Seasons
                        </Heading>
                        <SimpleGrid columns={[3, null, 4]} gap={6}>
                            <GridItem w='100%' bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%' bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%'  bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%' bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%'  bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%'  bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%' bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                            <GridItem w='100%' bg='blue.500'>
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default SingleSeriesFourthSection;