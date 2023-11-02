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
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' my='2' fontWeight='semibold' fontSize={{ base: "16px", md: "17px", lg: "18px" }} >
                                                Section 2 title
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
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
                                                Section 3 title
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
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
                                                Section 4 title
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pt={0} pb={8} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
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