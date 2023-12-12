import React from 'react';
import {
    Box,
    Flex,
    CircularProgress,
    Text,
    Center,
    ChakraProvider,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode';

interface ErrorScreenProps {
    errorText: string;
}

const ErrorScreen = ({ errorText }: ErrorScreenProps) => {
    // Const for responsive logo width
    const width = useBreakpointValue({ base: "125px", sm: "125px", md: "150px", lg: "175px", xl: "200px", "2xl":"250px" });

    return (
        <ChakraProvider>
            <ColorModeScript />
            <Box bg={useColorModeValue('#c1c1c1', '#151412')} color={useColorModeValue('#21201D', '#F0F0EE')}>
                <Flex height="100vh" width="100vw" alignItems="center" justifyContent="center">
                    <Box display='grid' gap='10'>
                        <Box display='grid' gap='10'>
                            <Center>
                                <img width={width} src={'http://localhost:3000/images/bingemon_red_side_xsm.png'} alt="Logo" />
                            </Center>
                            <Center>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-9q.425 0 .713-.288T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Z"/></svg>
                            </Center>
                        </Box>
                        <Box display='grid' gap='2'>
                            <Center>
                                <Text className='SubheaderMdReg'>{errorText}</Text>
                            </Center>
                            <Center>
                                <Text className='SubheaderSmReg'>Please refresh the page.</Text>
                            </Center>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default ErrorScreen;
