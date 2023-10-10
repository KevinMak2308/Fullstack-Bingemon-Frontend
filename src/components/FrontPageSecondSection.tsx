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

function FrontPageSecondSection() {
    return (
        <Box bg='#21201d' color='#dcdbd8'>
            <Flex py={{ base: '75px', md: '90px', lg: '60px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box  maxW={{ base: '87%', md: '87%', lg: '70%' }}>
                        <SimpleGrid columns={[1, null, 2]} spacing={{ base: "0px", md: "40px", lg: "40px" }} >
                                <GridItem>
                                    <Flex w='100%' height='100%' alignContent={"center"} justifyContent={"center"}>
                                        <Center>
                                            <Image
                                                boxSize=''
                                                textAlign='right'
                                                height={{ base: "100%", md: "100%", lg: "75%" }}
                                                width={{ base: "100%", md: "100%", lg: "100%" }}
                                                objectFit='cover'
                                                src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                                                alt='Placeholder'
                                            />
                                        </Center>
                                    </Flex>
                                </GridItem>
                            <GridItem>
                                <Flex pt={{ base: '15px', md: '0px', lg: '0px' }} w='100%' h='100%' alignContent={"center"} justifyContent={"center"}>
                                    <Center>
                                        <Box>
                                            <Heading mt={{ base: '4', md: '0', lg: '0' }} mb={{ base: '4', md: '5', lg: '6' }} fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                                                Heading 2
                                            </Heading>
                                            <Text mb={{ base: '8', md: '9', lg: '10' }} fontSize={{ base: "16px", md: "17px", lg: "18px" }} lineHeight='1.6'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis ut nunc quis ullamcorper. Proin id ullamcorper dolor, ac aliquet ex. Vestibulum accumsan gravida elementum. Nunc dolor nibh, facilisis in nibh quis, egestas congue sem.                             </Text>
                                            <Box
                                                as='button'
                                                height={{ base: "44px", md: "47px", lg: "50px" }}
                                                width={{ base: "160px", md: "180px", lg: "200px" }}
                                                lineHeight='1.2'
                                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                                border='2px'
                                                px='8px'
                                                borderRadius='10px'
                                                fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                                                fontWeight='semibold'
                                                bg=''
                                                borderColor='#E11818'
                                                color='#ffffff'
                                                _hover={{ bg: '#E42F2F' }}
                                                _active={{
                                                    bg: '#E42F2F',
                                                    transform: 'scale(0.98)',
                                                    borderColor: '',
                                                }}
                                                _focus={{
                                                    boxShadow:
                                                        '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                                                }}
                                            >
                                                Read more
                                            </Box>
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