import React from 'react';
import '../App.css';
import {
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    AspectRatio,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import PrimaryButton from "./buttons/PrimaryButton";

function SingleMovieFourthSection() {

    // Default img if movie doesn't have any movie poster
    const defaultImgUrl = "http://127.0.0.1:8080/default/user_unavailable.jpg";

    return (
        <Box bg={useColorModeValue('#e5e5e5', '#21201D')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{
                base: '75px',
                sm: '80px',
                md: '85px',
                lg: '90px',
                xl: '95px',
                '2xl': '100px',
            }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }} w="80vw">
                        <Text as='h2'>
                            Liked by these friends
                        </Text>
                        <SimpleGrid columns={[2, 3, 3, 4, 5, 5]} gap={{ base: "12px", sm:"14px", md: "16px", lg: "18px", xl:"22px", "2xl":"26px" }}>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem up
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem ipsum
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem w='100%' h='100%' display="grid" gap={{base: "4px", sm:"5px", md: "6px", lg: "7px", xl:"8px", "2xl":"9px"}} cursor='pointer'>
                                <AspectRatio ratio={1}  w="100%" h="100%">
                                    <Image
                                        backgroundPosition='center'
                                        backgroundRepeat='no-repeat'
                                        backgroundSize='cover'
                                        objectFit='cover'
                                        border='solid 1.5px transparent'
                                        borderRadius= '5px'
                                        transition= 'all 0.5s cubic-bezier(.08,.52,.52,1)'
                                        width= '100%'
                                        src={defaultImgUrl}
                                        fallbackSrc={defaultImgUrl}
                                        alt='User profile for user'
                                        _hover={{
                                            filter: 'brightness(1.3)'
                                        }}
                                    />
                                </AspectRatio>
                                <Box textAlign="center" alignItems="top" h={{base: "30px", sm:"35px", md: "40px", lg: "45px", xl:"50px", "2xl":"55px"}} overflow="hidden">
                                    <Text
                                        className='MovieTitle'
                                        overflow="hidden"
                                        display="-webkit-box"
                                        style={{
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        User name lorem up
                                    </Text>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
                        <Flex alignContent={"center"} justifyContent={"center"} mt={{ base: '15px', sm:'15px', md: '15px', lg: '15px', xl:'20px', "2xl":'25px' }}>
                            <PrimaryButton
                                buttonText="View all"
                            />
                        </Flex>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default SingleMovieFourthSection;