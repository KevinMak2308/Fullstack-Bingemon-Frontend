import React from 'react';
import '../../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
    useColorModeValue,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import {CastMember, Movie} from "../../pages/SingleMoviePage";

interface SingleMovieProps {
    movie: Movie;
    directors: CastMember[];
}

const unavailableText = "N/A";

function SingleMovieFifthSection({movie, directors}: SingleMovieProps) {
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
                    <Box display="grid"
                         gap={{base: "15px", sm: "16px", md: "17px", lg: "18px", xl: "19px", "2xl": "20px"}} w="80vw">
                        <Text as='h2'>
                            More information
                        </Text>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} gap={{base: 0, md: 0, lg: 0, xl: 10}}>
                            <GridItem w='100%'>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Tbody>
                                            {/* Movie title */}
                                            <Tr>
                                                <Td className='BodyBold'>Original Title</Td>
                                                <Td textAlign='right' className='BodyReg' whiteSpace='normal'>
                                                    {movie.original_title || unavailableText}
                                                </Td>
                                            </Tr>
                                            {/* Movie language(s) */}
                                            <Tr w='100%'>
                                                {movie.spoken_languages.length === 1 ? (
                                                    <Td className='BodyBold'>Spoken Language</Td>
                                                ) : (
                                                    <Td className='BodyBold'>Spoken Languages</Td>
                                                )}
                                                <Td w='full' whiteSpace='normal'>
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
                                                            <span
                                                                className='BodyReg'>No spoken languages available</span>
                                                        )}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            {/* Movie genres */}
                                            <Tr w='100%'>
                                                {movie.genres.length === 1 ? (
                                                    <Td className='BodyBold'>Genre</Td>
                                                ) : (
                                                    <Td className='BodyBold'>Genres</Td>
                                                )}
                                                <Td w='full' whiteSpace='normal'>
                                                    <Wrap w='full' justify='end' spacing='1' className='BodyReg'>
                                                        {movie.genres.map((genre, i) => (
                                                            <WrapItem width='fit-content' key={genre.name}>
                                                                <span>{genre.name}</span>
                                                                {movie.genres.length > 1 && i < movie.genres.length - 1 ?
                                                                    <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            {/* Movie collection */}
                                            {movie.belongs_to_collection ?
                                                <Tr>
                                                    <Td className='BodyBold'>Belongs to Collection</Td>
                                                    <Td textAlign='right'
                                                        className='BodyReg' whiteSpace='normal'>{movie.belongs_to_collection.name}</Td>
                                                </Tr>
                                                :
                                                null
                                            }
                                            {/* Movie release date */}
                                            <Tr>
                                                <Td className='BodyBold'>Release Date</Td>
                                                <Td textAlign='right'
                                                    className='BodyReg' whiteSpace='normal'>{movie.release_date || unavailableText}</Td>
                                            </Tr>
                                            {/* Movie runtime */}
                                            <Tr>
                                                <Td className='BodyBold'>Runtime</Td>
                                                <Td textAlign='right'
                                                    className='BodyReg' whiteSpace='normal'>{movie.runtime ? `${movie.runtime} minutes` : unavailableText}</Td>
                                            </Tr>
                                            {/* Movie status */}
                                            <Tr>
                                                <Td className='BodyBold'>Status</Td>
                                                <Td textAlign='right'
                                                    className='BodyReg' whiteSpace='normal'>{movie.status || unavailableText}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </GridItem>
                            <GridItem w='100%'>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Tbody>
                                            {/* Movie budget */}
                                            <Tr>
                                                <Td className='BodyBold'>Budget</Td>
                                                <Td textAlign='right' className='BodyReg' whiteSpace='normal'>
                                                    {movie.revenue !== undefined && movie.revenue !== 0
                                                        ? new Intl.NumberFormat('en-US').format(parseFloat(movie.revenue.toString())) + ' $'
                                                        : unavailableText
                                                    }
                                                </Td>
                                            </Tr>
                                            {/* Movie revenue */}
                                            <Tr>
                                                <Td className='BodyBold'>Revenue</Td>
                                                <Td textAlign='right' className='BodyReg' whiteSpace='normal'>
                                                    {movie.budget !== undefined && movie.budget !== 0
                                                        ? new Intl.NumberFormat('en-US').format(parseFloat(movie.budget.toString())) + ' $'
                                                        : unavailableText
                                                    }
                                                </Td>
                                            </Tr>
                                            {/* Movie production companies */}
                                            <Tr w='100%'>
                                                {movie.production_companies.length === 1 ? (
                                                    <Td className='BodyBold'>Production Company</Td>
                                                ) : (
                                                    <Td className='BodyBold'>Production Companies</Td>
                                                )}
                                                <Td
                                                    w='full'
                                                    whiteSpace='normal'
                                                    style={{
                                                        wordWrap: 'break-word',
                                                        overflowWrap: 'break-word',
                                                        wordBreak: 'break-all',
                                                        flexWrap: 'wrap',
                                                        textAlign: 'right',
                                                    }}
                                                    className='BodyReg' display='flex' justifyContent='flex-end' alignItems='flex-end' gap={1}>                                                     <Wrap w='full' justify='end' spacing='1' className='BodyReg'>
                                                        {movie.production_companies && movie.production_companies.length > 0
                                                            ? movie.production_companies.map((company, i) => (
                                                                <WrapItem width='fit-content' key={company.id}>
                                                                    <span>{company.name}</span>
                                                                    {i < movie.production_companies.length - 1 &&
                                                                        <span>,</span>}
                                                                </WrapItem>
                                                            ))
                                                            : <span className='BodyReg'>{unavailableText}</span>}
                                                    </Wrap>
                                                </Td>
                                            </Tr>
                                            {/* Movie production countries */}
                                            <Tr w='100%'>
                                                {movie.production_countries.length === 1 ? (
                                                    <Td className='BodyBold'>Production Country</Td>
                                                ) : (
                                                    <Td className='BodyBold'>Production Countries</Td>
                                                )}
                                                <Td
                                                    w='full'
                                                    whiteSpace='normal'
                                                    style={{
                                                        wordWrap: 'break-word',
                                                        overflowWrap: 'break-word',
                                                        wordBreak: 'break-all',
                                                        flexWrap: 'wrap',
                                                        textAlign: 'right',
                                                    }}
                                                    className='BodyReg' display='flex' justifyContent='flex-end' alignItems='flex-end' gap={1}>                                                    {movie.production_countries && movie.production_countries.length > 0 ? (
                                                        <>
                                                            {movie.production_countries.map((country, i) => (
                                                                <WrapItem width='fit-content'  key={country.iso_3166_1}>
                                                                    <span>{country.name}</span>
                                                                    {movie.production_countries.length > 1 && i < movie.production_countries.length - 1 ?
                                                                        <span>,</span> : null}
                                                                </WrapItem>
                                                            ))}
                                                        </>
                                                    ) : <span className='BodyReg'>{unavailableText}</span>}
                                                </Td>
                                            </Tr>
                                            {/* Movie directors */}
                                            <Tr w='100%'>
                                                {directors.length === 1 ? (
                                                    <Td className='BodyBold'>Director</Td>
                                                ) : (
                                                    <Td className='BodyBold'>Directors</Td>
                                                )}
                                                <Td w='full' whiteSpace='normal' className='BodyReg' display='flex' justifyContent='flex-end' gap={1}>
                                                    {directors.length > 0 ? (
                                                        <>
                                                            {directors.map((director, i) => (
                                                                <WrapItem className='BodyReg' width='fit-content' key={director.id}>
                                                                    <span>{director.name}</span>
                                                                    {i < directors.length - 1 && <span>,</span>}
                                                                </WrapItem>
                                                            ))}
                                                        </>
                                                    ) : (
                                                        <span className='BodyReg'>{unavailableText}</span>
                                                    )}
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