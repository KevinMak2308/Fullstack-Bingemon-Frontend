import React from 'react';
import '../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    Heading,
    SimpleGrid,
    Table,
    Tbody,
    Td,
    TableContainer,
    Tr,
    Wrap,
    WrapItem
} from '@chakra-ui/react'

function SingleMovieFifthSection() {
    return (
        <Box bg='#1A1917' color='#F0F0EE'>
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                        <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                            More information
                        </Heading>
                        <SimpleGrid columns={[1, 0, 2]} gap={{ base: 0, md: 0, lg: 20 }} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                            <GridItem w='100%'>
                                <TableContainer>
                                    <Table variant='simple' >
                                        <Tbody>
                                            <Tr>
                                                <Td fontWeight='500'>Original Title</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Original Language</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Spoken Language(s)</Td>
                                                <Td>
                                                    <Flex>
                                                        <Wrap justify='end' width='fit-content' spacing='7px' lineHeight="1.7" >
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Genre(s)</Td>
                                                <Td>
                                                    <Flex >
                                                        <Wrap justify='end' width='fit-content' spacing='7px' lineHeight="1.7" >
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Belonging Collection</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Release Date</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Runtime</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </GridItem>
                            <GridItem w='100%'>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr>
                                                <Td fontWeight='500'>Status</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Budget</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Revenue</Td>
                                                <Td textAlign='right'>Lorem ipsum</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Production Companies</Td>
                                                <Td>
                                                    <Flex>
                                                        <Wrap justify='end' width='fit-content' spacing='7px' lineHeight="1.7" >
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Production Contries</Td>
                                                <Td>
                                                    <Flex>
                                                        <Wrap justify='end' width='fit-content' spacing='7px' lineHeight="1.7" >
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Director(s)</Td>
                                                <Td>
                                                    <Flex>
                                                        <Wrap justify='end' width='fit-content' spacing='7px' lineHeight="1.7" >
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Writer(s)</Td>
                                                <Td>
                                                    <Flex>
                                                        <Wrap justify='end' width='fit-content' spacing='7px' lineHeight="1.7" >
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                                <span>,</span>
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <span>Lorem ipsum</span>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default SingleMovieFifthSection;