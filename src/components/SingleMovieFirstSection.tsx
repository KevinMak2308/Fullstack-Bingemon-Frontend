import React from 'react';
import '../App.css';
import ImageCarousel from "../components/ImageCarousel";
import {
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    HStack,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import Signup from "./SignupModal";

function SingleMovieFirstSection() {
    return (
        <SimpleGrid columns={[1, null, 2]} spacing='0px' bg='#1A1917' color='#F0F0EE'>
            <GridItem bg='blue.500'>
                <ImageCarousel />
            </GridItem>
            <GridItem>
                <Flex py={{ base: '80px', md: '', lg: '90px' }} w='100%' minH={{ base: '55vh', md: '90vh', lg: '92.5vh' }} alignContent={"center"} justifyContent={"center"}>
                    <Center>
                        <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w={{ base: "80vw", md: "40vw", lg: "40vw" }}>
                            <Heading as='h1' fontSize={{ base: "35px", md: "40px", lg: "45px" }}>
                                Movie Title Lorem
                            </Heading>
                            <Wrap spacing='7px'>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button
                                        py={{base: "15px", md: "16px", lg: "17px"}}
                                        px={{base: "23px", md: "24px", lg: "25px"}}
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        borderRadius='100px'
                                        border='2px'
                                        fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                        fontWeight='normal'
                                        cursor='default'
                                        bg=''
                                        borderColor='#A61212'
                                        color='#F0F0EE'
                                        _hover={{ bg: '' }}>
                                        Genre
                                    </Button>
                                </WrapItem>
                            </Wrap>
                            <Text fontSize={{ base: "20px", md: "21px", lg: "22px" }} lineHeight='1.7'>
                                Tagline non turpis dolor tristique duis senectus massa
                            </Text>
                            <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} >
                                <Flex gridGap={{ base: "2", md: "6", lg: "8" }} justifyContent={"space-between"} fontSize={{ base: "13px", md: "14px", lg: "15px" }} flexWrap='wrap' w={{ base: "80vw", md: "40vw", lg: "40vw" }}>
                                    <HStack spacing='7px'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"/></svg>
                                        <Text fontWeight='500'>  Runtime</Text>
                                    </HStack>
                                    <HStack spacing='7px'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 6h14v2H5z" opacity=".3"/><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                                        <Text fontWeight='500' >  Release date</Text>
                                    </HStack>
                                    <HStack spacing='7px'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                        <Text fontWeight='500' >  Spoken language</Text>
                                    </HStack>
                                    <HStack spacing='7px'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>
                                        <Text fontWeight='500'> Vote average</Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <Text fontSize={{ base: "16px", md: "17px", lg: "18px" }} lineHeight='1.7'>Lorem ipsum dolor sit amet consectetur. Duis est eu amet interdum. Scelerisque non turpis dolor tristique duis senectus massa posuere hac. Sodales amet eget pretium nisl eget. Lectus nec arcu arcu quis mi enim nullam nibh. Lorem ipsum dolor sit amet consectetur.
                                        Duis est eu amet interdum. Scelerisque non turpis dolor tristique duis senectus massa posuere hac. Sodales amet eget pretium nisl eget.</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Center>
                </Flex>
            </GridItem>
        </SimpleGrid>
    );
}

export default SingleMovieFirstSection;