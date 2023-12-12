import React, {useEffect, useState} from 'react';
import '../App.css';
import {
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    HStack,
    Image,
    Heading,
    SimpleGrid,
    Text,
    Wrap,
    useColorModeValue,
    WrapItem
} from '@chakra-ui/react';
import ImageCarousel, {ApiImage} from "../components/ImageCarousel";
import {Movie} from "../pages/SingleMoviePage";
import BackButton from "./buttons/BackButton";
import Tag from "./buttons/Tag";

interface SingleMovieFirstSectionProps {
    movie: Movie;
    images: ApiImage[];
}

function SingleMovieFirstSection({ movie, images }: SingleMovieFirstSectionProps) {
    const defaultImgUrl = "http://127.0.0.1:8080/default/backdrop_unavailable.jpg";

    return (
        <SimpleGrid
            h={{ lg: "82vh", xl:"82vh", "2xl":"82vh" }}
            columns={[1,1,1,2,2,2]}
            bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}
        >
            {/* Movie images */}
            <GridItem>
                {images.length > 1 ? (
                    <ImageCarousel images={images} />
                ) : (
                    (movie.backdrop_path ? (
                        <Image
                            src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
                            h="100%"
                            w="100%"
                            objectFit="cover"
                        />
                    ) : (
                        <Image
                            src={defaultImgUrl}
                            h="100%"
                            w="100%"
                            objectFit="cover"
                        />
                    ))
                )}
            </GridItem>
            <GridItem>
                {/* Back button */}
                <BackButton />
                <Flex height="100%" direction="column" justify="center" align="center">
                    <Center>
                        <Box py={{
                            base: '75px',
                            sm: '80px',
                            md: '85px',
                            lg: '90px',
                            xl: '95px',
                            '2xl': '100px',
                            }}
                             w={{ base: "80vw", md: "80vw", lg: "40vw" }}
                             display='grid'
                             gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }}
                        >
                            {/* Movie title */}
                            <Text as='h1' fontSize={{ base: "35px", md: "40px", lg: "45px" }}>
                                {movie.original_title}
                            </Text>

                            {/* Movie genres (loop) */}
                            <Wrap spacing='2'>
                                {movie.genres.map((genre) => (
                                    <WrapItem key={genre.id}>
                                        <Tag
                                        tagText={genre.name}
                                        />
                                    </WrapItem>
                                ))}
                            </Wrap>

                            {/* Movie tagline */}
                            <Text className='SubheaderLgReg'>
                                {movie.tagline}
                            </Text>

                            {/* Movie infos: runtime, rating etc. */}
                            <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} >
                                <Flex gridGap={{ base: "2", md: "6", lg: "8" }} justifyContent={"space-between"} fontSize={{ base: "13px", md: "14px", lg: "15px" }} flexWrap='wrap' w={{ base: "80vw", md: "30vw", lg: "30vw" }}>
                                    <HStack spacing='2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"/></svg>
                                        <Text className='SubheaderSmBold'>{movie.runtime} m.</Text>
                                    </HStack>
                                    <HStack spacing='2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 6h14v2H5z" opacity=".3"/><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
                                        <Text className='SubheaderSmBold' >{new Date(movie.release_date).getFullYear()}</Text>
                                    </HStack>
                                    {movie.spoken_languages && movie.spoken_languages.length > 0 ? (
                                        <>
                                            {movie.spoken_languages.slice(0,1).map((language) => (
                                                <HStack spacing='2' key={language.iso_639_1}>
                                                    <Text className='SubheaderSmBold'>{language.english_name}</Text>
                                                </HStack>
                                            ))}
                                        </>
                                    ) : (
                                        <Text className='SubheaderSmBold'>No spoken languages available</Text>
                                    )}
                                    <HStack spacing='2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>
                                        <Text className='SubheaderSmBold'>{parseFloat(movie.vote_average).toFixed(1)}</Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <Text className='SubheaderMdReg'>
                                        {movie.overview}
                                    </Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Center>
                </Flex>
            </GridItem>
        </SimpleGrid>
    );
}

export default SingleMovieFirstSection;