import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Searchbar from "../components/Searchbar"
import Contentbox from "../components/Contentbox"
import ContentboxSort from "../components/ContentboxSort"
import Disctag from "../components/Disctag"
import SortBy from "../components/SortBy"
import {
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Text
} from '@chakra-ui/react';

function Discover() {

    return (
        <div>
            <NavBar/>
            <Box bg='#21201d' color='#dcdbd8'>
                <Center pt="25px">
                <Heading as='h1' fontSize={{ base: "50px", md: "55px", lg: "60px" }}>
                    DISCOVER MOVIES
                </Heading>
                </Center>
                <Searchbar/>
                <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="89vw">
                <Flex alignContent={"center"} justify={"flex-end"}>
                    <Disctag/>
                    <Disctag/>
                    <Disctag/>
                </Flex>
                </Box>
                <Flex pb={{ base: '35px', md: '', lg: '50px' }} alignContent={"center"} justifyContent={"center"}>
                    <Center>
                        <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                            <Heading as='h2' fontSize={{ base: "35px", md: "40px", lg: "45px" }}>
                                Discover by
                            </Heading>
                            <SimpleGrid columns={[3, null, 6]} gap={6} fontWeight='400' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <ContentboxSort/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <ContentboxSort/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <ContentboxSort/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <ContentboxSort/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <ContentboxSort/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <ContentboxSort/>
                                </GridItem>
                            </SimpleGrid>
                        </Box>
                    </Center>
                </Flex>
                <Box  w="89vw">
                    <Flex alignContent={"center"} justifyContent={"end"}>
                        <SortBy/>
                    </Flex>
                </Box>
                <Flex py={{ base: '30px', md: '', lg: '45px' }} alignContent={"center"} justifyContent={"center"}>
                    <Center>
                        <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">

                            <SimpleGrid columns={[3, null, 6]} gap={6} fontWeight='400' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                            </SimpleGrid>
                            <SimpleGrid columns={[3, null, 6]} gap={6} fontWeight='400' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                            </SimpleGrid>
                            <SimpleGrid columns={[3, null, 6]} gap={6} fontWeight='400' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                                <GridItem w='100%' display="grid" gridGap="2">
                                    <Contentbox/>
                                </GridItem>
                            </SimpleGrid>
                        </Box>
                    </Center>
                </Flex>
            </Box>
            <Footer/>
        </div>

    )

}

export default Discover;