import React from 'react';
import '../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Text
} from '@chakra-ui/react';

import {SeasonList} from "../pages/SingleSeriesPage";

function SingleSeriesFourthSection({ seasons }: SeasonList) {

    return (
        <Box bg='#1A1917' color='#dcdbd8'>
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                        <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                            Seasons
                        </Heading>
                        <SimpleGrid columns={[3, null, 6]} gap={6} minWidth="100px" fontWeight='400' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                            {seasons.slice(0, seasons.length).map((season) => (
                                <GridItem w='100%' display="grid" gridGap="2" key={season.id}>
                                    <Image src={season.poster_path} fallbackSrc={'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'} borderRadius="7px" />
                                    <Text fontSize={{ base: "15px", md: "17px", lg: "19px" }} fontWeight="600" textAlign="center">{season.name}</Text>
                                </GridItem>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default SingleSeriesFourthSection;