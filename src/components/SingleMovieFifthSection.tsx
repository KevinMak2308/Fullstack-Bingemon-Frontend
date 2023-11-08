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

interface Genre {
    id: string;
    name: string;
}

interface Company {
    id: string;
    name: string;
}

interface Country {
    id: string;
    name: string;
}

interface Language {
    id: string;
    english_name: string;
    name: string;
}


interface Movie {
    title: string;
    original_title: string;
    original_language: string;
    genres: Genre[];
    collection: string;
    runtime: string;
    release_date: string;
    belongs_to_collection: string;
    status: string;
    budget: string;
    revenue: string;
    production_companies: Company[];
    production_countries: Country[];
    spoken_languages: Language[];

}


function SingleMovieFifthSection() {

    const [movieData, setMovieData] = useState<Movie | null>(null)

    useEffect(() => {
        fetch('http://localhost:8080/movie/74')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then(data => {
                console.log("This is the fetched data", data)
                setMovieData(data)
            })
    }, []);

    if(movieData == null) {
        return <div>Something went wrong... Please refresh the page</div>
    }

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
                                                <Td textAlign='right'>{movieData.original_title}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Original Language</Td>
                                                <Td textAlign='right'>{movieData.original_language.charAt(0).toUpperCase() + movieData.original_language.slice(1)}</Td>
                                            </Tr>

                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Spoken Language(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7">
                                                        {movieData.spoken_languages.map((language, i) => (
                                                            <WrapItem width='fit-content' key={language.name}>
                                                                <span>{language.name}</span>
                                                                {movieData.spoken_languages.length > 1 && i < movieData.spoken_languages.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
                                                </Td>
                                            </Tr>

                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Genre(s)</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7">
                                                        {movieData.genres.map((genre, i) => (
                                                            <WrapItem width='fit-content' key={genre.name}>
                                                                <span>{genre.name}</span>
                                                                {movieData.genres.length > 1 && i < movieData.genres.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
                                                </Td>
                                            </Tr>

                                            <Tr>
                                                <Td fontWeight='500'>Belongs to Collection</Td>
                                                <Td textAlign='right'>{movieData.belongs_to_collection}</Td>
                                            </Tr>

                                            <Tr>
                                                <Td fontWeight='500'>Release Date</Td>
                                                <Td textAlign='right'>{movieData.release_date}</Td>
                                            </Tr>

                                            <Tr>
                                                <Td fontWeight='500'>Runtime</Td>
                                                <Td textAlign='right'>{movieData.runtime} minutes</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Status</Td>
                                                <Td textAlign='right'>{movieData.status}</Td>
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
                                                <Td textAlign='right'>{new Intl.NumberFormat('en-US').format(parseFloat(movieData.budget))} $</Td>
                                            </Tr>
                                            <Tr>
                                                <Td fontWeight='500'>Revenue</Td>
                                                <Td textAlign='right'>{new Intl.NumberFormat('en-US').format(parseFloat(movieData.revenue))} $</Td>
                                            </Tr>

                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Production Companies</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7" >
                                                        {movieData.production_companies.map((company, i) => (
                                                            <WrapItem width='fit-content' key={company.name}>
                                                                <span>{company.name}</span>
                                                                {movieData.production_companies.length > 1 && i < movieData.production_companies.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
                                                </Td>
                                            </Tr>

                                            <Tr w='100%'>
                                                <Td fontWeight='500'>Production Countries</Td>
                                                <Td w='full'>
                                                    <Wrap w='full' justify='end' spacing='7px' lineHeight="1.7" >
                                                        {movieData.production_countries.map((country, i) => (
                                                            <WrapItem width='fit-content' key={country.name}>
                                                                <span>{country.name}</span>
                                                                {movieData.production_countries.length > 1 && i < movieData.production_countries.length - 1 ? <span>,</span> : null}
                                                            </WrapItem>
                                                        ))}
                                                    </Wrap>
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