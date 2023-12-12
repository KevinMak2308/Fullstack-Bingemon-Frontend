import React from 'react';
import '../../App.css';
import {
    Box,
    useColorModeValue,
    Center,
    Flex,
    GridItem,
    Stack,
    Image,
    SimpleGrid,
    Text
} from '@chakra-ui/react';
import PrimaryButton from "../buttons/PrimaryButton"

function FrontPageSecondSection() {
    return (
        <Box bg={useColorModeValue('#e5e5e5', '#21201D')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{ base: '75px', sm:'80px', md: '85px', lg: '90px', xl:'95px', "2xl":'100px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w="80vw" >
                        <SimpleGrid display="grid" gap={{ base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px" }} columns={[1, 1, 2, 2, 2, 2]} >
                            {/* Image */}
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
                            {/* Heading, text & button */}
                            <GridItem>
                                <Flex h='100%' alignContent={"center"} justifyContent={"center"}>
                                    <Center>
                                        <Stack gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"20px", "2xl":"22px" }} w={{"2xl":"30vw"}}>
                                            <Text as='h2'>
                                                Swipe, Match, Enjoy!
                                            </Text>
                                            <Text  className='SubheaderMdReg'>
                                                With our app, you can swipe through a vast array of movies to discover the ideal film for your next enjoyable evening.

                                                How does it work? It's simple. By swiping right to 'like' a movie and left to 'dislike' it, the app begins to learn your preferences. But that's not where it ends. What truly makes our app unique is the ability to match movies with your friends.
                                            </Text>
                                            <Box mt={{ base: '15px', sm:'15px', md: '15px', lg: '15px', xl:'20px', "2xl":'25px' }}>
                                                <PrimaryButton buttonText="Start swiping now" />
                                            </Box>
                                        </Stack>
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