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
    TableContainer,
    Tbody,
    Td,
    Tr,
    Wrap,
    WrapItem
} from '@chakra-ui/react';

import {Series, CastMember} from "../pages/SingleSeriesPage";

interface SingleSeriesProps {
    series: Series;
}

function SingleSeriesSixthSection({ series }: SingleSeriesProps) {
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
                                                <Td textAlign='right'>{series.original_name}</Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Spoken Language(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7">
                                                        {series.spoken_languages && series.spoken_languages.length > 0 ? (
                                                            <>
                                                                {series.spoken_languages.map((language) => (
                                                                    <WrapItem width='fit-content'>
                                                                        <span>{language.name}</span>
                                                                    </WrapItem>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <span>No spoken languages available</span>
                                                        )}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Genre(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7">
                                                        {series.genres.map((genre, i) => (
                                                            <WrapItem width='fit-content' key={genre.name}>
                                                                <span>{genre.name}</span>
                                                                {series.genres.length > 1 && i < series.genres.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>First aired</Td>
                                                <Td textAlign='right'>{series.first_air_date}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Status</Td>
                                                <Td textAlign='right'>{series.status}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </GridItem>
                            <GridItem w='100%'>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Production Companies</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7" >
                                                        {series.production_companies && series.production_companies.length > 0 ? (
                                                            <>
                                                                {series.production_companies.map((company, i) => (
                                                                    <WrapItem width='fit-content' key={company.id}>
                                                                        <span>{company.name}</span>
                                                                        {series.production_companies.length > 1 && i < series.production_companies.length - 1 ? <span>,</span> : null}
                                                                    </WrapItem>
                                                                ))}
                                                            </>
                                                        ) : null
                                                        }
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Production Countries</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7" >
                                                        {series.production_countries && series.production_countries.length > 0 ? (
                                                            <>
                                                                {series.production_countries.map((country, i) => (
                                                                    <WrapItem width='fit-content' key={country.iso_3166_1}>
                                                                        <span>{country.name}</span>
                                                                        {series.production_countries.length > 1 && i < series.production_countries.length - 1 ? <span>,</span> : null}
                                                                    </WrapItem>
                                                                ))}
                                                            </>
                                                        ) : null
                                                        }
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                {series.created_by.length === 1 ? (
                                                    <Td fontWeight='500'>Creator</Td>)
                                                    :
                                                    <Td fontWeight='500'>Creators</Td>
                                                }
                                                    <Td>
                                                    <Wrap justify='flex-end' align='center' spacing='7px' lineHeight="1.7">
                                                        {series.created_by.map((creator, i) => (
                                                            <WrapItem key={creator.id}>
                                                                <span>{creator.name}</span>
                                                                {series.created_by.length > 1 && i < series.created_by.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
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

export default SingleSeriesSixthSection;