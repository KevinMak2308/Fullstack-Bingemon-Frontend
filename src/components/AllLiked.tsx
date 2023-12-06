import React, {useCallback, useEffect, useState } from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
    SimpleGrid,
    GridItem,
    Text,
    MenuList,
    MenuButton,
    MenuItem,
    Menu,
    Button,
    Image,
    useMediaQuery,
} from '@chakra-ui/react';
import '../App.css';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { LoggedInId, Movie, Series, User } from "../pages/ProfileLiked";


interface AllLikedProps {
    commonMovies: Movie[];
    commonSeries: Series[];
    movies: Movie[];
    series: Series[];
    user: User;
    loggedInId: number;
}

const defaultImgUrl = "http://127.0.0.1:8080/default/poster_unavailable.jpg";

export default function AllLiked({ commonMovies, commonSeries, movies, series, user, loggedInId }: AllLikedProps) {
    const boxNames = ["Movies In Common", "Series In Common", "Liked Movies", "Liked Series"];
    const [selectedBox, setSelectedBox] = useState(0);
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const data = [commonMovies, commonSeries, movies, series];

    const handleBoxClick = (boxId: number) => {
        setSelectedBox((prev) => (prev === boxId ? prev : boxId));
        localStorage.setItem("selectedBox", boxId.toString());
    };

    const [isClicked, setIsClicked] = useState(false);

    const toggleSvg = useCallback(() => {
        setIsClicked(prevState => !prevState);
        setIsHovered(null);
    }, []);

    const handleMouseEnter = useCallback((index: number) => {
        setIsHovered(index)
        console.log("index", index);
    }, [isClicked]);

    const handleMouseLeave = useCallback(() => {
        if (!isClicked) {
            setIsHovered(null);
        }
    }, [isClicked]);


    useEffect(() => {
        const chooseBoxOnRender = () => {
            const selected = localStorage.getItem("selectedBox");
            if (selected && selected !== "" && selected !== null) {
                setSelectedBox(parseInt(selected));
            }
        };

        chooseBoxOnRender();
    }, []);

    const [isSmallerThan600, isSmallerThan960] = useMediaQuery([
        '(max-width: 600px)',
        '(max-width: 960px)',
    ]);

    const getMovieNameLength = () => {
        if (isSmallerThan600) {
            return 37;
        } else if (isSmallerThan960) {
            return 45;
        } else {
            return 63;
        }
    };

    const svgSize = isSmallerThan600 ? '32.5px' : '42.5px';

    console.log("LOGGEDIN", loggedInId);
    return (
        <Box bg='#1A1917' color='#dcdbd8'>
            <Box
                p={{ base: '4', md: '6', lg: '8' }}
                position='absolute'
            >
                <Box
                    _hover={{ filter: 'brightness(1.1)' }}
                    cursor='pointer'
                    transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24">
                        <path fill="#343434" d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" />
                    </svg>
                </Box>
            </Box>
            <Flex
                py={{ base: '75px', md: '', lg: '90px' }}
                alignContent={'center'}
                justifyContent={'center'}
            >
                <Center>
                    <Box
                        display='grid'
                        gridGap={{ base: '16', md: '18', lg: '20' }}
                        w='80vw'
                    >
                        <Flex alignContent={'center'} alignItems="top" justifyContent={'center'}>
                            <Center gap={{ base: "4", md: "5", lg: "10" }}>
                                <Box>
                                    <Center style={{ cursor: 'pointer' }}>
                                        <Image
                                            src={user.profile_picture_filename}
                                            fallbackSrc={defaultImgUrl}
                                            objectFit='cover'
                                            borderRadius='full'
                                            border='solid 2px #A61212'
                                            w={{ sm: '14vw', lg: '7vw' }}
                                            h={{ sm: '8vh', lg: '12vh' }}
                                            alt='Profile'
                                            style={{
                                                boxShadow: '0 0 15px 1px rgba(192, 21, 21, 0.75)',
                                            }}
                                        />
                                    </Center>
                                </Box>
                                <Heading
                                    as='h1'
                                    fontSize={{ base: '35px', md: '40px', lg: '45px' }}
                                    alignItems="top"
                                >
                                    {(user.id === Number(loggedInId) && selectedBox === 0) || (user.id === Number(loggedInId) && selectedBox === 1) ? (
                                        <Text textAlign="center">Your liked {selectedBox === 0 ? 'movies' : 'series'}</Text>
                                    ) : null}

                                    {loggedInId === 0 && (user.id !== Number(loggedInId) && selectedBox === 0) || loggedInId === 0 && (user.id !== Number(loggedInId) && selectedBox === 1) ? (
                                        <Text textAlign="center">{user.username}'s liked {selectedBox === 0 ? 'movies' : 'series'}</Text>
                                    ) : null}

                                    {loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 0) || loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 1) ? (
                                        <Text textAlign="center">You and {user.username} like these {selectedBox === 0 ? 'movies' : 'series'}</Text>
                                    ) : null}

                                    {loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 2) || loggedInId !== 0 && (user.id !== Number(loggedInId) && selectedBox === 3) ? (
                                        <Text textAlign="center">{user.username}'s liked {selectedBox === 2 ? 'movies' : 'series'}</Text>
                                    ) : null}


                                </Heading>
                            </Center>
                        </Flex>
                        <Box display='grid' gridGap={{ base: '4', md: '6', lg: '6' }}>
                            {user.id === loggedInId || loggedInId === 0 ? (
                                <SimpleGrid columns={[2, null, 2]} gap={{ base: "4", md: "5", lg: "auto" }} fontWeight='500' fontSize={{ base: "16px", md: "17px", lg: "18px" }}>
                                    {boxNames.slice(2, 4).map((name, index) => (
                                        <GridItem key={index} w='100%'>
                                            <Box
                                                bg={selectedBox === index ? '#21201d' : '#A61212'}
                                                cursor='pointer'
                                                p='10px'
                                                border='2px'
                                                borderColor='#A61212'
                                                borderRadius='10px'
                                                color='#F0F0EE'
                                                _hover={{ bg: selectedBox === index ? '#262521' : '#c01515' }}
                                                h={{ base: "15vh", md: "16vh", lg: "17vh" }}
                                                display='flex'
                                                textAlign='center'
                                                alignItems='center'
                                                justifyContent='center'
                                                transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                                                onClick={() => handleBoxClick(index)}
                                            >
                                                <Text>
                                                    {name}
                                                </Text>
                                            </Box>
                                        </GridItem>
                                    ))}
                                </SimpleGrid>
                            ) : (
                                <SimpleGrid columns={[2, null, 4]} gap={{ base: "4", md: "5", lg: "auto" }} fontWeight='500' fontSize={{ base: "16px", md: "17px", lg: "18px" }}>
                                    {boxNames.map((name, index) => (
                                        <GridItem key={index} w='100%'>
                                            <Box
                                                bg={selectedBox === index ? '#21201d' : '#A61212'}
                                                cursor='pointer'
                                                p='10px'
                                                border='2px'
                                                borderColor='#A61212'
                                                borderRadius='10px'
                                                color='#F0F0EE'
                                                _hover={{ bg: selectedBox === index ? '#262521' : '#c01515' }}
                                                h={{ base: "15vh", md: "16vh", lg: "17vh" }}
                                                display='flex'
                                                textAlign='center'
                                                alignItems='center'
                                                justifyContent='center'
                                                transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                                                onClick={() => handleBoxClick(index)}
                                            >
                                                <Text>
                                                    {name}
                                                </Text>
                                            </Box>
                                        </GridItem>
                                    ))}
                                </SimpleGrid>
                            )}

                            <Flex justify={"end"}>
                                <GridItem>
                                    <Menu placement="bottom-end">
                                        <MenuButton as={Button} bg='#343434' color="#F0F0EE" _hover={{ filter: 'brightness(1.4)' }} _active={{ bg: '#484848', color: '#F0F0EE' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' rightIcon={<ChevronDownIcon />}>
                                            Sort by
                                        </MenuButton>
                                        <MenuList bg='#343434' border='#343434' color='#F0F0EE'>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Popularity ascending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Popularity descending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Release Date ascending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Release Date descending</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Title (A-Z)</MenuItem>
                                            <MenuItem bg='#343434' _hover={{ filter: 'brightness(1.4)' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>Title (Z-A)</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </GridItem>
                            </Flex>
                        </Box>
                        <SimpleGrid columns={[2, 3, 3, 4, 5, 6]} gap={{base: "6", md: "", lg: "6"}} fontWeight='500' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>                            {data[selectedBox].map((data, index) => (
                            <GridItem key={data.id} w='100%' h='100%' display="grid" gridGap="1.5" cursor='pointer' position="relative">
                                    <Image
                                        src={data.poster_path}
                                        fallbackSrc={defaultImgUrl}
                                        alt="Name Lorem Ipsum"
                                        h={{ base: "22vh", md: "26vh", lg: "40vh" }}
                                        className="movie"
                                    />
                                    <div
                                        className="svg-container"
                                        onClick={toggleSvg}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            zIndex: 1,
                                        }}
                                    >
                                        {isClicked ? (
                                            <svg key={`clicked-${data.id}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                                <path fill="#c01515" d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                            </svg>
                                        ) : isHovered ? (
                                            <svg key={`hovered-${data.id}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                                <path fill="#c01515" d="M239.81 99.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 220.67 16 164 16 94a62 62 0 0 1 96.47-51.55a4 4 0 0 1 .61 6.17L99.72 62a8 8 0 0 0 0 11.31l32.53 32.53L111 127a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5l17.47-17.47A61.63 61.63 0 0 1 178.41 32c36.32.23 64.18 31.29 61.4 67.5"/>
                                            </svg>
                                        ) : (
                                            <svg key={`default-${data.id}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                                                <path fill="#c01515" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62"/>
                                            </svg>
                                        )}
                                    </div>
                                    {selectedBox === 0 && 'title' in data ? <Text textAlign="center">{data.title}</Text> : null}
                                    {selectedBox === 1 && 'name' in data ? <Text textAlign="center">{data.name}</Text> : null}
                                    {selectedBox === 2 && 'title' in data ? <Text textAlign="center">{data.title}</Text> : null}
                                    {selectedBox === 3 && 'name' in data ? <Text textAlign="center">{data.name}</Text> : null}
                                </GridItem>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );


}