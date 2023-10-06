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
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'


function FrontPageFirstSection() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <SimpleGrid columns={[1, null, 2]} spacing='0px' bg='#1A1917' color='#dcdbd8'>
            <GridItem>
                <Flex w='100%' height={{ base: '55vh', md: '90vh', lg: '90vh' }} alignContent={"center"} justifyContent={"center"}>
                    <Center>
                        <Box maxW={{ base: '87%', md: '87%', lg: '85%' }}>
                            <Heading mb={{ base: '7', md: '8', lg: '9' }} fontSize={{ base: "35px", md: "40px", lg: "45px" }}>
                                Start Swiping Today!
                            </Heading>
                            <Text mb={{ base: '12', md: '14', lg: '16' }} fontSize={{ base: "20px", md: "21px", lg: "22px" }} lineHeight='1.7'>
                                Fed up with the endless scrolling and disagreements when trying to pick a movie to watch with friends or family?
                                Look no further – welcome to the ultimate platform for matching your movie interests.
                                Join us today and let the cinematic matchmaking begin!
                            </Text>
                            <Button onClick={onOpen}
                                as='button'
                                height={{ base: "44px", md: "47px", lg: "50px" }}
                                width={{ base: "160px", md: "180px", lg: "200px" }}
                                lineHeight='1.2'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                border=''
                                px='8px'
                                borderRadius='10px'
                                fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                                fontWeight='semibold'
                                bg='#E11818'
                                borderColor=''
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
                                Sign Up Now
                            </Button>

                            <Modal isOpen={isOpen} onClose={onClose} >
                                <ModalOverlay />
                                <ModalContent bg={'grey.100'}>
                                    <ModalHeader fontSize={'2xl'}>Sign up</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <FormControl mb={'4'} id="email" isRequired >
                                            <FormLabel>E-mail</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="E-mail" />
                                        </FormControl>
                                        <FormControl mb={'4'} id="username" isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="Username" />
                                        </FormControl>
                                        <FormControl id="password" isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="Password" />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button bg={'red.100'} borderRadius={'sm'} _hover={{bg: 'red.hover'}} px={'8'}>
                                            Sign up
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Center>
                </Flex>
            </GridItem>
            <GridItem w='100%' height={{ base: '45vh', md: '90vh', lg: '90vh' }} bg='blue.500'>
                <Image
                    boxSize=''
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    src='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
                    alt='Placeholder'
                />
            </GridItem>
        </SimpleGrid>
    );
}

export default FrontPageFirstSection;