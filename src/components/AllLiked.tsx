import React, {useCallback, useEffect, useState } from 'react';
import {
    Box,
    Center,
    Flex,
    SimpleGrid,
    GridItem,
    Text,
    Image,
    AspectRatio,
    useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import '../App.css';
import { LoggedInId, Movie, Series, User } from "../pages/ProfileLiked";
import BackButton from './buttons/BackButton';
import FilterButton from './buttons/FilterButton';
import SortButton from './buttons/SortButton';


interface AllLikedProps {
    commonMovies: Movie[];
    commonSeries: Series[];
    movies: Movie[];
    series: Series[];
    user: User;
    loggedInId: number;
}

// Default img if movie doesn't have any movie poster
const defaultImgUrl = "http://127.0.0.1:8080/default/poster_unavailable.jpg";

export default function AllLiked({ commonMovies, commonSeries, movies, series, user, loggedInId }: AllLikedProps) {
    // FILTER
    // Name for filter boxes and state to track selected box
    const boxNames = ["Movies In Common", "Series In Common", "Liked Movies", "Liked Series"];
    const [selectedBox, setSelectedBox] = useState(0);
    // Data array (filter)
    const data = [commonMovies, commonSeries, movies, series];
    // Function, handle box click (filter)
    const handleBoxClick = (boxId: number) => {
        setSelectedBox((prev) => (prev === boxId ? prev : boxId));
        localStorage.setItem("selectedBox", boxId.toString());
    };

    // LIKE BUTTON/HEART SVG
    // State and function for SVG interaction
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [isClicked, setIsClicked] = useState(false);
    // Function to toggle SVG
    const toggleSvg = useCallback(() => {
        setIsClicked(prevState => !prevState);
        setIsHovered(null);
    }, []);
    // Function for hover
    const handleMouseEnter = useCallback((index: number) => {
        setIsHovered(index)
    }, [isClicked]);
    // Function for un-hover
    const handleMouseLeave = useCallback(() => {
        if (!isClicked) {
            setIsHovered(null);
        }
    }, [isClicked]);
    // Check for a selected box in localStorage
    useEffect(() => {
        const chooseBoxOnRender = () => {
            const selected = localStorage.getItem("selectedBox");
            if (selected && selected !== "" && selected !== null) {
                setSelectedBox(parseInt(selected));
            }
        };

        chooseBoxOnRender();
    }, []);

    // SORT BUTTON
    const handleSortChange = (sortOption: string) => {
        console.log('Sorting option selected:', sortOption);
    };
    const sortingOptions = [
        'Popularity ascending',
        'Popularity descending',
        'Release Date ascending',
        'Release Date descending',
        'Title (A-Z)',
        'Title (Z-A)',
    ];

    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            {/* Back button */}
            <BackButton />
            <Flex
                py={{ base: '75px', sm:'80px', md: '85px', lg: '90px', xl:'95px', "2xl":'100px' }}
                alignContent={'center'}
                justifyContent={'center'}
            >
                <Center>
                    <Box
                        display='grid'
                        gridGap={{ base: '4', sm:'6', md: '8', lg: '10', xl:'12', "2xl":'14' }}
                        w='80vw'
                    >
                        {/* Profile img and heading */}
                        <Flex alignContent={'center'} alignItems="top" justifyContent={'center'}>
                            <Center gap={{ base: '15px', sm:'30px', md: '35px', lg: '40px', xl:'45px', "2xl":'50px' }}>
                                <Box maxW={{ base: '100%', sm: '175px', md: '200px', lg: '225px', xl: '250px', "2xl": '275px' }}>
                                    <Center style={{ cursor: 'pointer'}}>
                                        <Image
                                            objectFit="cover"
                                            src={user.profile_picture_filename}
                                            fallbackSrc={defaultImgUrl}
                                            display={{ base: 'none', sm: 'none', md: 'block' }}
                                            borderRadius='50%'
                                            h={{ base: '50px', sm:'75px', md: '100px', lg: '125px', xl:'150px', "2xl":'175px' }}
                                            w={{ base: '50px', sm:'75px', md: '100px', lg: '125px', xl:'150px', "2xl":'175px' }}
                                            border='solid 3px #A61212'
                                            alt='Profile'
                                            style={{
                                                boxShadow: '0 0 50px 3px rgba(192, 21, 21, 0.75)',
                                                display: 'block',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </Center>
                                </Box>
                                <Text
                                    as='h1'
                                    w='fit-content'
                                    alignItems="top"
                                >
                                    {(user.id === Number(loggedInId) && selectedBox === 0) || (user.id === Number(loggedInId) && selectedBox === 1) ? (
                                        <Text as='h1' textAlign="center">Your liked {selectedBox === 0 ? 'movies' : 'series'}</Text>
                                    ) : null}

                                    {loggedInId === 0 && (user.id !== Number(loggedInId) && selectedBox === 0) || loggedInId === 0 && (user.id !== Number(loggedInId) && selectedBox === 1) ? (
                                        <Text as='h1' textAlign="center">{user.username}'s liked {selectedBox === 0 ? 'movies' : 'series'}</Text>
                                    ) : null}

                                    {loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 0) || loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 1) ? (
                                        <Text as='h1' textAlign="center">You and {user.username} like these {selectedBox === 0 ? 'movies' : 'series'}</Text>
                                    ) : null}

                                    {loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 2) || loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 3) ? (
                                        <Text as='h1' textAlign="center">{user.username}'s liked {selectedBox === 2 ? 'movies' : 'series'}</Text>
                                    ) : null}
                                </Text>
                            </Center>
                        </Flex>
                        {/* Filter and sort button */}
                        <Box display='grid' gap={{ base: "4", sm: "5", md: "6", lg:"7", xl:"8", "2xl":"9" }}>
                            {user.id === loggedInId || loggedInId === 0 ? (
                                <SimpleGrid columns={[2, null, 2]} gap={{ base: "2", sm: "3", md: "4", lg:"5", xl:"6", "2xl":"7" }} className='SubheaderMdReg'>
                                    {/* Filter button/box 1 */}
                                    {boxNames.slice(2, 4).map((name, index) => (
                                        <FilterButton
                                            key={index}
                                            filterText={name}
                                            isSelected={selectedBox === index}
                                            onClick={() => handleBoxClick(index)}
                                        />
                                    ))}
                                </SimpleGrid>
                            ) : (
                                <SimpleGrid columns={[2, null, 2]} gap={{ base: "2", sm: "3", md: "4", lg:"5", xl:"6", "2xl":"7" }} className='SubheaderMdReg'>
                                    {/* Filter button/box 2 */}
                                    {boxNames.map((name, index) => (
                                        <FilterButton
                                            key={index}
                                            filterText={name}
                                            isSelected={selectedBox === index}
                                            onClick={() => handleBoxClick(index)}
                                        />
                                    ))}
                                </SimpleGrid>
                            )}
                            {/* Sort button */}
                            <Flex justify={"end"}>
                                <SortButton onSortChange={handleSortChange} sortingOptions={sortingOptions} />
                            </Flex>
                        </Box>
                        {/* Movies/series (loop) */}
                        <SimpleGrid columns={[2, 3, 3, 4, 5, 6]} gap={{base: "3", sm:"4", md: "5", lg: "6", xl:"7", "2xl":"8"}} fontWeight='500' fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}>
                            {data[selectedBox].map((data, index) => (
                                <Link key={data.id} to={selectedBox === 0 || selectedBox === 2 ? "/singlemoviepage/" + data.id : "/singleseriespage/" + data.id}>
                                    <GridItem key={data.id} w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer' position="relative">
                                        <AspectRatio ratio={2 / 3}>
                                            <Image
                                                objectFit="cover"
                                                className='movie'
                                                src={data.poster_path}
                                                fallbackSrc={defaultImgUrl}
                                                alt={`Poster for: ${'title' in data ? data.title : ''}`}
                                            />
                                        </AspectRatio>
                                        <Box
                                            onClick={toggleSvg}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            boxSize='17%'
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 15,
                                                zIndex: 1,
                                            }}
                                        >
                                            {isClicked ? (
                                                <svg key={`clicked-${data.id}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256">
                                                    <path fill="#c01515" d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                                </svg>
                                            ) : isHovered ? (
                                                <svg key={`hovered-${data.id}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256">
                                                    <path fill="#c01515" d="M239.81 99.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 220.67 16 164 16 94a62 62 0 0 1 96.47-51.55a4 4 0 0 1 .61 6.17L99.72 62a8 8 0 0 0 0 11.31l32.53 32.53L111 127a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5l17.47-17.47A61.63 61.63 0 0 1 178.41 32c36.32.23 64.18 31.29 61.4 67.5"/>
                                                </svg>
                                            ) : (
                                                <svg key={`default-${data.id}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256">
                                                    <path fill="#c01515" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62"/>
                                                </svg>
                                            )}
                                        </Box>

                                        {selectedBox === 0 && 'title' in data ?
                                            <Text
                                                textAlign="center"
                                                h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}}
                                                className='MovieTitle'
                                                overflow="hidden"
                                                display="-webkit-box"
                                                style={{
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 2,
                                                    maxWidth: '100%',
                                                }}>
                                                {data.title}
                                            </Text> : null}
                                        {selectedBox === 1 && 'name' in data ?
                                            <Text
                                                textAlign="center"
                                                h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}}
                                                lineHeight='1.5'
                                                overflow="hidden"
                                                display="-webkit-box"
                                                style={{
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 2,
                                                    maxWidth: '100%',
                                                }}>
                                                {data.name}
                                            </Text> : null}
                                        {selectedBox === 2 && 'title' in data ?
                                            <Text
                                                textAlign="center"
                                                h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}}
                                                lineHeight='1.5'
                                                overflow="hidden"
                                                display="-webkit-box"
                                                style={{
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 2,
                                                    maxWidth: '100%',
                                                }}>
                                                {data.title}
                                            </Text> : null}
                                        {selectedBox === 3 && 'name' in data ?
                                            <Text
                                                textAlign="center"
                                                h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}}
                                                lineHeight='1.5'
                                                overflow="hidden"
                                                display="-webkit-box"
                                                style={{
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 2,
                                                    maxWidth: '100%',
                                                }}>
                                                {data.name}
                                            </Text> : null}
                                    </GridItem>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );


}