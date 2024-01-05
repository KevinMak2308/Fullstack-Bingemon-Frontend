import React from 'react';
import {
    Box,
    Center,
    ChakraProvider,
    CircularProgress,
    Flex,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import {ColorModeScript} from '@chakra-ui/color-mode';

interface LoadingScreenProps {
    loadingText: string;
}

const LoadingScreen = ({loadingText}: LoadingScreenProps) => {
    // Const for responsive logo width
    const width = useBreakpointValue({
        base: "125px",
        sm: "125px",
        md: "150px",
        lg: "175px",
        xl: "200px",
        "2xl": "250px"
    });

    return (
        <ChakraProvider>
            <ColorModeScript/>
            <Box bg={useColorModeValue('#c1c1c1', '#151412')} color={useColorModeValue('#21201D', '#F0F0EE')}>
                <Flex height="100vh" width="100vw" alignItems="center" justifyContent="center">
                    <Box display='grid' gap='4'>
                        <Box display='grid' gap='10'>
                            <Center>
                                <img width={width} src={'/images/logo/bingemon_red_side_sm.png'}
                                     alt="Logo"/>
                            </Center>
                            <Center>
                                <CircularProgress isIndeterminate color="#A61212" size="75px" thickness="4px"/>
                            </Center>
                        </Box>
                        <Center>
                            <Text className='SubheaderMdReg'>Loading {loadingText}</Text>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default LoadingScreen;
