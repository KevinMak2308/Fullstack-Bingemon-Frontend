import {
    Box,
    useColorModeValue,
    Image,
    VStack,
    Text,
    Link,
    Flex,
    Center,
    HStack
} from '@chakra-ui/react'


function Footer() {
    return (
    <Box bg={useColorModeValue('#c1c1c1', '#151412')} color={useColorModeValue('#21201D', '#F0F0EE')} display="grid" gap={{ base: '75px', sm:'80px', md: '85px', lg: '90px', xl:'95px', "2xl":'100px'}} pt={{ base: '75px', sm:'80px', md: '85px', lg: '90px', xl:'95px', "2xl":'100px' }} pb="35px">
        <Flex justifyContent="center" alignItems="center" gap={{base:"20px", sm:"30px", md:"40px", lg:"50px", xl:"60px", "2xl":"70px"}} placeItems="center" flexDirection={{base:"column", md:"row", lg:"row"}}>
            {/* Logo */}
            <VStack>
                <Flex justifyContent='center' placeItems={{base:"center", md:"normal", lg:"normal"}} maxW="50%">
                    <a href="/">
                        <img src='http://localhost:3000/images/bingemon_logo_transparent_red_sm.png'/>
                    </a>
                </Flex>
                <Text className='SubheaderXsReg'>
                    Bingemon © All rights reserved.
                </Text>
            </VStack>
            {/* Movies */}
            <Flex >
                <Flex flexDirection='column' gap='10px' placeItems={{base:"center", sm:"center", md:"normal", lg:"normal", xl:"normal", "2xl":"normal"}}>
                    <Text className='BodyBold'>
                        Discover movies
                    </Text>
                    <Box
                        as="span"
                        position="relative"
                        cursor="pointer"
                        w='fit-content'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: '1.5px',
                            backgroundColor: '#A61212',
                            transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                        }}
                        _hover={{
                            _before: {
                                width: '100%',
                            },
                        }}
                    >
                        <Text className='BodyReg' marginBottom="2px">Browse movies</Text>
                    </Box>
                    <Box
                        as="span"
                        position="relative"
                        cursor="pointer"
                        w='fit-content'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: '1.5px',
                            backgroundColor: '#A61212',
                            transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                        }}
                        _hover={{
                            _before: {
                                width: '100%',
                            },
                        }}
                    >
                        <Text className='BodyReg' marginBottom="2px">Start swiping movies</Text>
                    </Box>
                </Flex>
            </Flex>
            {/* Series */}
            <Flex >
                <Box >
                    <Flex flexDirection='column' gap='10px' placeItems={{base:"center", md:"normal", lg:"normal"}}>
                        <Text className='BodyBold'>
                            Discover series
                        </Text>
                        <Box
                            as="span"
                            position="relative"
                            cursor="pointer"
                            w='fit-content'
                            _before={{
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '0%',
                                height: '1.5px',
                                backgroundColor: '#A61212',
                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                            }}
                            _hover={{
                                _before: {
                                    width: '100%',
                                },
                            }}
                        >
                            <Text className='BodyReg' marginBottom="2px">Browse series</Text>
                        </Box>
                        <Box
                            as="span"
                            position="relative"
                            cursor="pointer"
                            w='fit-content'
                            _before={{
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '0%',
                                height: '1.5px',
                                backgroundColor: '#A61212',
                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                            }}
                            _hover={{
                                _before: {
                                    width: '100%',
                                },
                            }}
                        >
                            <Text className='BodyReg' marginBottom="2px">Start swiping series</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            {/* Policies etc. */}
            <Flex >
                <Flex flexDirection='column' gap='10px' placeItems={{base:"center", md:"normal", lg:"normal"}}>
                    <Text className='BodyBold'>
                        Policies & terms
                    </Text>
                    <Box
                        as="span"
                        position="relative"
                        cursor="pointer"
                        w='fit-content'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: '1.5px',
                            backgroundColor: '#A61212',
                            transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                        }}
                        _hover={{
                            _before: {
                                width: '100%',
                            },
                        }}
                    >
                        <Text className='BodyReg' marginBottom="2px">Privacy policy</Text>
                    </Box>
                    <Box
                        as="span"
                        position="relative"
                        cursor="pointer"
                        w='fit-content'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '0%',
                            height: '1.5px',
                            backgroundColor: '#A61212',
                            transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                        }}
                        _hover={{
                            _before: {
                                width: '100%',
                            },
                        }}
                    >
                        <Text className='BodyReg' marginBottom="2px">Terms of use</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        {/* API credit */}
        <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            display='flex'
            gap="15px"
        >
            <Image maxW="100px" src='http://localhost:3000/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'/>
            <Text className='SubheaderXsReg'>This product uses the TMDB API but is not endorsed or certified by TMDB.</Text>
        </Flex>
    </Box>
    )
}

export default Footer;