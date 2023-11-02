import React from 'react';
import '../App.css';
import { Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useColorModeValue, useColorMode } from '@chakra-ui/react';





export default function ProfileInfo() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (

            <Flex  bg={useColorModeValue('white', 'grey.100')} justifyContent='center' gap={{sm:'2', lg:'8'}} flexDirection={{sm: 'column', lg:'row' }} pt='8'>
                <Flex justifyContent={{sm:'center'}}>
                <Image
                    objectFit='cover'
                    borderRadius='full'
                    maxW={{ base: '100%', sm: '200px' }}
                    src="https://bit.ly/dan-abramov"
                    alt='Dan Abramov'
                />
                </Flex>

                <Stack pt={{sm: '0', lg:'6' }} mx={{sm:'4', lg:'0'}}>
                    <Flex gap={6} justifyContent={{sm:'center', lg:'flex-start'}}>
                        <Heading size='xl'>NAME NAMESEN </Heading>


                    </Flex>

                    <Flex justifyContent={{sm:'center', lg:'flex-start'}}>
                    <Text fontSize='xl' fontWeight='500' >
                        @username
                    </Text>
                    </Flex>
                    <Box>
                        <Flex justifyContent={"space-between"} flexWrap='wrap' maxW={{lg:'xl'}} >

                            <Text fontWeight='500' ><EditIcon/> Denmark</Text>

                            <Text fontWeight='500'><EditIcon/> 123 friends</Text>

                            <Text fontWeight='500'><EditIcon/>  123 movies liked</Text>

                            <Text fontWeight='500'><EditIcon/> 123 series liked</Text>

                        </Flex>



                        <Flex>
                        <Text pt='4'>Lorem ipsum dolor sit amet consectetur. Feugiat arcu sed ultrices at purus varius. Nec dolor a quam sapien massa malesuada nec sit dictum.</Text>

                        </Flex>

                    </Box>

                </Stack>

            </Flex>





    );
}

