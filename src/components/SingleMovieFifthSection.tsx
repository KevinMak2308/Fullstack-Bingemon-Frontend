import React, {useEffect, useState} from 'react';
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
import {Movie, CastMember} from "../pages/SingleMoviePage";

interface SingleMovieProps {
    movie: Movie;
    directors: CastMember[];
}

function SingleMovieFifthSection({ movie, directors }: SingleMovieProps) {
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
                                                <Td textAlign='right'>{movie.original_title}</Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Spoken Language(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7">
                                                        {movie.spoken_languages && movie.spoken_languages.length > 0 ? (
                                                            <>
                                                                {movie.spoken_languages.map((language) => (
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
                                                        {movie.genres.map((genre, i) => (
                                                            <WrapItem width='fit-content' key={genre.name}>
                                                                <span>{genre.name}</span>
                                                                {movie.genres.length > 1 && i < movie.genres.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            {movie.belongs_to_collection ?
                                                <Tr>
                                                    <Td fontWeight='500'>Belongs to Collection</Td>
                                                    <Td textAlign='right'>{movie.belongs_to_collection.name}</Td>
                                                </Tr>
                                                :
                                                null
                                            }
                                            <Tr>
                                                <Td fontWeight='500'>Release Date</Td>
                                                <Td textAlign='right'>{movie.release_date}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Runtime</Td>
                                                <Td textAlign='right'>{movie.runtime} minutes</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Status</Td>
                                                <Td textAlign='right'>{movie.status}</Td>
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
                                                <Td fontWeight='500'>Budget</Td>
                                                <Td textAlign='right'>{new Intl.NumberFormat('en-US').format(parseFloat(movie.budget.toString()))} $</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Revenue</Td>
                                                <Td textAlign='right'>{new Intl.NumberFormat('en-US').format(parseFloat(movie.revenue.toString()))} $</Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Production Companies</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7" >
                                                        {movie.production_companies && movie.production_companies.length > 0 ? (
                                                            <>
                                                                {movie.production_companies.map((company, i) => (
                                                                    <WrapItem width='fit-content' key={company.id}>
                                                                        <span>{company.name}</span>
                                                                        {movie.production_companies.length > 1 && i < movie.production_companies.length - 1 ? <span>,</span> : null}
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
                                                        {movie.production_countries && movie.production_countries.length > 0 ? (
                                                            <>
                                                                {movie.production_countries.map((country, i) => (
                                                                    <WrapItem width='fit-content' key={country.iso_3166_1}>
                                                                        <span>{country.name}</span>
                                                                        {movie.production_countries.length > 1 && i < movie.production_countries.length - 1 ? <span>,</span> : null}
                                                                    </WrapItem>
                                                                ))}
                                                            </>
                                                        ) : null
                                                        }
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Director(s)</Td>
                                                <Td>
                                                    <Wrap justify='flex-end' align='center' spacing='7px' lineHeight="1.7">
                                                        {directors.map((director, i) => (
                                                            <WrapItem key={director.id}>
                                                                <span>{director.name}</span>
                                                                {directors.length > 1 && i < directors.length - 1 ? <span>,</span> : null}
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

export default SingleMovieFifthSection;