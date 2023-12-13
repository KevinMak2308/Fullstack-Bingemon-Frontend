import React from 'react';
import '../../App.css';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Flex,
    Text,
    useColorModeValue
} from '@chakra-ui/react';

function FrontPageThirdSection() {
    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{base: '75px', sm: '80px', md: '85px', lg: '90px', xl: '95px', "2xl": '100px'}}
                  alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box w={{base: '80vw', lg: '60vw', "2xl": "45vw"}} display="grid"
                         gap={{base: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "22px"}}>
                        <Text as='h2'>
                            FAQ - Frequently Asked Questions
                        </Text>
                        <Text className='SubheaderMdReg'>
                            Here, we've compiled answers to the most common questions about our Bingemon. Whether you're
                            looking for information on pricing, streaming or troubleshooting, you'll find it all here.
                            If your question isn't addressed, feel free to reach out to our customer support team for
                            personalized assistance here.
                        </Text>
                        <Accordion allowMultiple mt={{base: '3', md: '', lg: '3'}}>
                            <AccordionItem>
                                <AccordionButton>
                                    <Text className='SubheaderSmBold' flex='1' textAlign='left' my='2'>
                                        What is Bingemon?
                                    </Text>
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel pt={0} pb={8}>
                                    <Text className='p'>
                                        Bingemon is an application designed for movie enthusiasts who want to discover
                                        and share movie experiences with their friends. You can swipe between movies and
                                        match them based on your friends' preferences.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <>
                                    <AccordionButton>
                                        <Text className='SubheaderSmBold' flex='1' textAlign='left' my='2'>
                                            How does the swipe feature work?
                                        </Text>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel pt={0} pb={8}>
                                        <Text className='p'>
                                            Swipe right to "like" a movie, or swipe left to "dislike" it. The app uses
                                            these preferences to generate movie recommendations for you.
                                        </Text>
                                    </AccordionPanel>
                                </>
                            </AccordionItem>
                            <AccordionItem>
                                <>
                                    <AccordionButton>
                                        <Text className='SubheaderSmBold' flex='1' textAlign='left' my='2'>
                                            How do I match movies with my friends?
                                        </Text>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel pt={0} pb={8}>
                                        <Text className='p'>
                                            Swipe through movies and use the app's swipe feature to indicate whether you
                                            like or dislike a movie. The app will analyze your likes and compare them to
                                            your friends' preferences. This allows you to plan shared movie nights.
                                        </Text>
                                    </AccordionPanel>
                                </>
                            </AccordionItem>
                            <AccordionItem>
                                <>
                                    <AccordionButton>
                                        <Text className='SubheaderSmBold' flex='1' textAlign='left' my='2'>
                                            Can I match with multiple friends for the same movie?
                                        </Text>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel pt={0} pb={8}>
                                        <Text className='p'>
                                            Yes, you can match with multiple friends for the same movie. If more than
                                            one friend likes the same movie you liked, the app will create multiple
                                            matches.
                                        </Text>
                                    </AccordionPanel>
                                </>
                            </AccordionItem>
                            <AccordionItem>
                                <>
                                    <AccordionButton>
                                        <Text className='SubheaderSmBold' flex='1' textAlign='left' my='2'>
                                            How can I view and manage my movie matches?
                                        </Text>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel pt={0} pb={8}>
                                        <Text className='p'>
                                            You can view and manage your movie matches on your profile. There, you can
                                            see the movies you've matched on with your friends and easily plan movie
                                            nights
                                        </Text>
                                    </AccordionPanel>
                                </>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default FrontPageThirdSection;