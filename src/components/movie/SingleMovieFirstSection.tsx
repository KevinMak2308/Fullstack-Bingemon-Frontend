import React from 'react';
import '../../App.css';
import {
    Box,
    Center,
    Flex,
    GridItem,
    HStack,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import ImageCarousel, {ApiImage} from "../../components/ImageCarousel";
import {Movie} from "../../pages/SingleMoviePage";
import BackButton from "../buttons/BackButton";
import Tag from "../buttons/Tag";

interface SingleMovieFirstSectionProps {
    movie: Movie;
    images: ApiImage[];
}

const unavailableText = "N/A";

function SingleMovieFirstSection({movie, images}: SingleMovieFirstSectionProps) {
    // Default img if movie doesn't have any movie poster
    const defaultImgUrl = "http://127.0.0.1:8080/default/backdrop_unavailable.jpg";

    // Max movie description length
    const maxOverviewLength = 445;

    return (
        <SimpleGrid
            h={{lg: "82vh", xl: "82vh", "2xl": "82vh"}}
            columns={[1, 1, 1, 2, 2, 2]}
            bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}
        >
            {/* Movie images */}
            <GridItem>
                {images.length > 1 ? (
                    <ImageCarousel images={images}/>
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
                            h={{
                                base: "50vh",
                                sm: "50vh",
                                md: "60vh",
                                lg: "82vh",
                                xl: "82vh",
                                "2xl": "82vh"
                            }}
                            w="100%"
                            objectFit="cover"
                        />
                    ))
                )}
            </GridItem>
            <GridItem>
                {/* Back button */}
                <BackButton/>
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
                             w={{base: "80vw", md: "80vw", lg: "40vw"}}
                             display='grid'
                             gap={{base: "15px", sm: "16px", md: "17px", lg: "18px", xl: "19px", "2xl": "20px"}}
                        >
                            {/* Movie title */}
                            <Text as='h1'>
                                {movie.original_title || unavailableText}
                            </Text>

                            {/* Movie genres (loop) */}
                            <Wrap spacing='2'>
                                {movie.genres.map((genre) => (
                                    <WrapItem key={genre.id}>
                                        <Tag
                                            tagText={genre.name || unavailableText}
                                        />
                                    </WrapItem>
                                ))}
                            </Wrap>

                            {/* Movie tagline */}
                            <Text className='SubheaderLgReg'>
                                {movie.tagline || unavailableText}
                            </Text>

                            {/* Movie infos: runtime, rating etc. */}
                            <Box display="grid" gridGap={{base: "4", md: "6", lg: "8"}}>
                                <Flex gridGap={{base: "2", md: "6", lg: "8"}} justifyContent={"space-between"}
                                      alignItems='center'
                                      flexWrap='wrap' w={{base: "80vw", md: "30vw", lg: "30vw"}}>
                                    <HStack alignItems='center' spacing='2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"/>
                                        </svg>
                                        <Text className='SubheaderSmBold'>
                                            {movie.runtime !== undefined && movie.runtime !== 0 ? `${movie.runtime} m.` : unavailableText}
                                        </Text>
                                    </HStack>
                                    <HStack alignItems='center' spacing='2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M5 6h14v2H5z" opacity=".3"/>
                                            <path fill="currentColor"
                                                  d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                                        </svg>
                                        <Text
                                            className='SubheaderSmBold'>{new Date(movie.release_date).getFullYear() || unavailableText}</Text>
                                    </HStack>
                                    {movie.spoken_languages && movie.spoken_languages.length > 0 ? (
                                        <>
                                            {movie.spoken_languages.slice(0, 1).map((language) => (
                                                <HStack alignItems='center' spacing='2' key={language.iso_639_1}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                         viewBox="0 0 256 256">
                                                        <path fill="currentColor"
                                                              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89M98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89m19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48m32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45a88.37 88.37 0 0 1 55.69 45M105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45M49.63 168h35.43a142.39 142.39 0 0 0 20.26 45a88.37 88.37 0 0 1-55.69-45m101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45"/>
                                                    </svg>
                                                    <Text className='SubheaderSmBold'>{language.english_name || unavailableText}</Text>
                                                </HStack>
                                            ))}
                                        </>
                                    ) : (
                                        <Text className='SubheaderSmBold'>No spoken languages available</Text>
                                    )}
                                    <HStack alignItems='center' spacing='2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                             viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                  d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/>
                                        </svg>
                                        <Text className='SubheaderSmBold'>
                                            {movie.vote_average !== undefined && parseFloat(movie.vote_average).toFixed(1) !== '0.0'
                                                ? parseFloat(movie.vote_average).toFixed(1)
                                                : unavailableText
                                            }
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <Text className='SubheaderMdReg'>
                                        {movie.overview.length > maxOverviewLength
                                            ? `${movie.overview.slice(0, maxOverviewLength)}...`
                                            : movie.overview || unavailableText
                                        }
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