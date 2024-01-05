import React, {useState} from 'react';
import {Box, GridItem, SimpleGrid, Text,} from '@chakra-ui/react';

interface DiscoverPrimaryFilterProps {
    onChange: (selectedOption: string) => void;
}

function DiscoverPrimaryFilter({onChange}: DiscoverPrimaryFilterProps) {
    const boxNames = ["Popular", "Actor", "Decade", "Genre", "Language"];
    const [selectedBox, setSelectedBox] = useState<number | null>(0);

    const handleBoxClick = (boxId: number) => {
        setSelectedBox((prev) => (prev === boxId ? prev : boxId));
        const selectedOption = boxNames[boxId];
        onChange(selectedOption);
    };

    return (
        <SimpleGrid columns={[5]} gap={{base: "4", md: "5", lg: "auto"}} fontWeight='500'
                    fontSize={{base: "16px", md: "18px", lg: "20px"}}>
            {boxNames.map((name, index) => (
                <GridItem key={index} w='100%'>
                    <Box
                        bg={selectedBox === index ? '#21201d' : '#A61212'}
                        cursor='pointer'
                        p='10px'
                        border='2px'
                        borderColor='#A61212'
                        _hover={{bg: selectedBox === index ? '#262521' : '#c01515'}}
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{base: "15vh", md: "16vh", lg: "17vh"}}
                        display='flex'
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'
                        onClick={() => handleBoxClick(index)}
                    >
                        <Text>
                            {name}
                        </Text>
                    </Box>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}

export default DiscoverPrimaryFilter;
