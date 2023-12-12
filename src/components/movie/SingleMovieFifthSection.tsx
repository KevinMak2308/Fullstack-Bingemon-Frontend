import React from 'react';
import '../../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    SimpleGrid,
    Table,
    Tbody,
    Td,
    TableContainer,
    useColorModeValue,
    Tr,
    Wrap,
    Text,
    WrapItem
} from '@chakra-ui/react'
import {Movie, CastMember} from "../../pages/SingleMoviePage";

interface SingleMovieProps {
    movie: Movie;
    directors: CastMember[];
}

function SingleMovieFifthSection({ movie, directors }: SingleMovieProps) {
    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{
                base: '75px',
                sm: '80px',
                md: '85px',
                lg: '90px',
                xl: '95px',
                '2xl': '100px',
            }}
                  alignContent={"center"}
                  justifyContent={"center"}>
                <Center>
                    <Box display="grid" gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }} w="80vw">
                        <Text as='h2'>
                            More information
                        </Text>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} gap={{ base: 0, md: 0, lg: 0, xl:20 }} fontSize={{ base: "13px", md: "14px", lg: "15px" }} lineHeight='1.7'>
                            <GridItem w='100%'>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr>
                                                <Td className='BodyBold'>Original Title</Td>
                                                <Td textAlign='right' className='BodyReg'>{movie.original_title}</Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td className='BodyBold'>Spoken Language(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='1' className='BodyReg'>
                                                        {movie.spoken_languages && movie.spoken_languages.length > 0 ? (
                                                            <>
                                                                {movie.spoken_languages.map((language) => (
                                                                    <WrapItem width='fit-content'>
                                                                        <span>{language.name}</span>
                                                                    </WrapItem>
                                                                ))}
                                                            </>
                                                        ) : (
                                                            <span className='BodyReg'>No spoken languages available</span>
                                                        )}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td className='BodyBold'>Genre(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='1' className='BodyReg'>
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
                                                    <Td className='BodyBold'>Belongs to Collection</Td>
                                                    <Td textAlign='right' className='BodyReg'>{movie.belongs_to_collection.name}</Td>
                                                </Tr>
                                                :
                                                null
                                            }
                                            <Tr>
                                                <Td className='BodyBold'>Release Date</Td>
                                                <Td textAlign='right' className='BodyReg'>{movie.release_date}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td className='BodyBold'>Runtime</Td>
                                                <Td textAlign='right' className='BodyReg'>{movie.runtime} minutes</Td>
                                            </Tr>
                                            <Tr>
                                                <Td className='BodyBold'>Status</Td>
                                                <Td textAlign='right' className='BodyReg'>{movie.status}</Td>
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
                                                <Td className='BodyBold'>Budget</Td>
                                                <Td textAlign='right'  className='BodyReg'>{new Intl.NumberFormat('en-US').format(parseFloat(movie.budget.toString()))} $</Td>
                                            </Tr>
                                            <Tr>
                                                <Td className='BodyBold'>Revenue</Td>
                                                <Td textAlign='right'  className='BodyReg'>{new Intl.NumberFormat('en-US').format(parseFloat(movie.revenue.toString()))} $</Td>
                                            </Tr>
                                            <Tr w='100%'>
                                                <Td className='BodyBold'>Production Companies</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='2' className='BodyReg'>
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
                                                <Td className='BodyBold'>Production Countries</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='2' className='BodyReg'>
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
                                                {directors.length === 1 ? (
                                                        <Td className='BodyBold'>Director</Td>)
                                                    :
                                                    <Td className='BodyBold'>Directors</Td>
                                                }
                                                <Td>
                                                    <Wrap justify='flex-end' align='center' spacing='2' className='BodyReg'>
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