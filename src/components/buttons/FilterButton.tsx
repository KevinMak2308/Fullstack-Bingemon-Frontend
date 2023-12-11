import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface FilterButtonProps {
    filterText: string;
    isSelected: boolean;
    onClick?: () => void;
}

function FilterButton({ filterText, isSelected, onClick }: FilterButtonProps) {
    return (
        <Box
            bg={isSelected ? '#21201d' : '#A61212'}
            cursor='pointer'
            p='10px'
            border='2px'
            borderColor='#A61212'
            borderRadius='10px'
            fontFamily='Roboto'
            color='#F0F0EE'
            _hover={{ bg: isSelected ? '#262521' : '#c01515' }}
            h={{ base: '15vh', md: '16vh', lg: '17vh' }}
            display='flex'
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
            onClick={onClick}
        >
            <Text>{filterText}</Text>
        </Box>
    );
}

export default FilterButton;
