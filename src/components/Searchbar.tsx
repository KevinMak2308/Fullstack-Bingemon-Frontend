import React from 'react';
import {
    Box,
    Flex,
    Input,
    useColorModeValue
} from '@chakra-ui/react';
import { css } from '@emotion/react';

function Searchbar() {
    return (
        <Box
            cursor='pointer'
            className="searchbar-hover"
            bg={useColorModeValue('#e5e5e5', '#21201D')}
            color={useColorModeValue('#21201D', '#F0F0EE')}
            _hover={{
                bg: useColorModeValue('#e5e5e5', '#21201D'),
                filter: 'brightness(150%)',
            }}
        >
            <Flex py={{ base: '25px', md: '', lg: '35px' }} justifyContent="center">
                <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                    <Input className='BodyReg' placeholder='Insert text here' />
                </Box>
            </Flex>
        </Box>
    );
}

export default Searchbar;
