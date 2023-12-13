import React from 'react';
import {Box, useColorModeValue} from '@chakra-ui/react';

// Function, handles back button click
const handleBackButtonClick = () => {
    window.history.back();
};

const BackButton = () => {
    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Box p={{base: '4', sm: '5', md: '6', lg: '8', xl: '9', '2xl': '10'}} position='absolute'>
                <Box
                    _hover={{filter: 'brightness(1.3)'}}
                    cursor='pointer'
                    transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                    onClick={handleBackButtonClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width='12.5%' height='12.5%' viewBox="0 0 24 24">
                        <path fill="#343434"
                              d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                    </svg>
                </Box>
            </Box>
        </Box>
    );
};

export default BackButton;
