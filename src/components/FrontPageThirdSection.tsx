import React from 'react';
import '../App.css';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';

function FrontPageThirdSection() {
    return (
    <Box bg='#1A1917' color='#dcdbd8'>
        <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
            <Center>
                <Box maxW={{ base: '80vw', md: '', lg: '65vw' }} display="grid" gridGap={{ base: "4", md: "6", lg: "8" }}>
                    <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                        FAQ - Frequently Asked Questions
                    </Heading>
                    <Text  fontSize={{ base: "16px", md: "17px", lg: "18px" }} lineHeight='1.7'>
                        Here, we've compiled answers to the most common questions about our Bingemon. Whether you're looking for information on pricing, streaming or troubleshooting, you'll find it all here. If your question isn't addressed, feel free to reach out to our customer support team for personalized assistance here.
                    </Text>
                    <Accordion allowMultiple mt={{ base: '3', md: '', lg: '3' }}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' my='2' fontWeight='semibold' fontSize={{ base: "16px", md: "17px", lg: "18px" }} >
                                        What is Bingemon?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                Bingemon is an application designed for movie enthusiasts who want to discover and share movie experiences with their friends. You can swipe between movies and match them based on your friends' preferences.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' my='2' fontWeight='semibold' fontSize={{ base: "16px", md: "17px", lg: "18px" }} >
                                                How does the swipe feature work?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        Swipe right to "like" a movie, or swipe left to "dislike" it. The app uses these preferences to generate movie recommendations for you.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' my='2' fontWeight='semibold' fontSize={{ base: "16px", md: "17px", lg: "18px" }} >
                                                How do I match movies with my friends?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        Swipe through movies and use the app's swipe feature to indicate whether you like or dislike a movie. The app will analyze your likes and compare them to your friends' preferences. This allows you to plan shared movie nights.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' my='2' fontWeight='semibold' fontSize={{ base: "16px", md: "17px", lg: "18px" }} >
                                                Can I match with multiple friends for the same movie?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        Yes, you can match with multiple friends for the same movie. If more than one friend likes the same movie you liked, the app will create multiple matches.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' my='2' fontWeight='semibold' fontSize={{ base: "16px", md: "17px", lg: "18px" }} >
                                                How can I view and manage my movie matches?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        You can view and manage your movie matches on your profile. There, you can see the movies you've matched on with your friends and easily plan movie nights
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Center>
        </Flex>
    </Box>
    );
}

export default FrontPageThirdSection;