import React from 'react';
import '../App.css';
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

function FrontPageSecondSection() {
    return (
        <Box
            bg='#21201D'
            backgroundImage='https://www.pngkit.com/png/full/276-2764925_movie-film-png-movie-reel-border.png'
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            color='#dcdbd8'
        >
            <Flex py={{ base: '80px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w="80vw" >
                        <SimpleGrid display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} columns={[1, null, 2]} spacing={{ base: "0px", md: "40px", lg: "40px" }} >
                                <GridItem>
                                    <Flex w='100%' height='100%' alignContent={"center"} justifyContent={"center"}>
                                        <Center>
                                            <Image
                                                boxSize=''
                                                textAlign='right'
                                                height={{ base: "100%", md: "100%", lg: "75%" }}
                                                maxH='70vh'
                                                width={{ base: "100%", md: "100%", lg: "100%" }}
                                                objectFit='cover'
                                                src='https://cdn.pixabay.com/photo/2022/02/21/06/56/couple-7025924_1280.jpg'
                                                alt='Placeholder'
                                            />
                                        </Center>
                                    </Flex>
                                </GridItem>
                            <GridItem>
                                <Flex w='100%' h='100%' alignContent={"center"} justifyContent={"center"}>
                                    <Center>
                                        <Box>
                                            <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }}>
                                            <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                                                Swipe, Match, Enjoy!
                                            </Heading>
                                            <Text  fontSize={{ base: "16px", md: "17px", lg: "18px" }} lineHeight='1.7'>
                                                With our app, you can swipe through a vast array of movies to discover the ideal film for your next enjoyable evening.

                                                How does it work? It's simple. By swiping right to 'like' a movie and left to 'dislike' it, the app begins to learn your preferences. But that's not where it ends. What truly makes our app unique is the ability to match movies with your friends.
                                            </Text>
                                            </Box>
                                            <Button
                                                py={{base: "24px", md: "26px", lg: "25px"}}
                                                px={{base: "28px", md: "29px", lg: "30px"}}
                                                mt='40px'
                                                lineHeight='1.2'
                                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                                border=''
                                                borderRadius='10px'
                                                fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                                fontWeight='semibold'
                                                bg='#A61212'
                                                color='#F0F0EE'
                                                _hover={{ bg: '#c01515' }}>
                                                Start swiping now
                                            </Button>
                                        </Box>
                                    </Center>
                                </Flex>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default FrontPageSecondSection;