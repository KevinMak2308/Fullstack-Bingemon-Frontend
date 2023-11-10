import React from 'react';
import '../App.css';
import {
    Box,
    Center,
    Flex,
    Input,
} from '@chakra-ui/react';

function Searchbar() {
    return(
        <Box bg='#21201d' color='#dcdbd8' >
            <Flex py={{ base: '25px', md: '', lg: '35px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                        <Input placeholder='insert text here' size='sm'/>
                    </Box>
                </Center>
            </Flex>
        </Box>

    )
}

export default Searchbar;