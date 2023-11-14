import React, { useState, useEffect } from 'react';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';

interface DiscoverSecondaryFilterLanguageProps {
    selectedFilters: string[];
    onChange: (selectedFilters: string[]) => void;
}

const DiscoverSecondaryFilterLanguage: React.FC<DiscoverSecondaryFilterLanguageProps> = ({
                                                                                             selectedFilters,
                                                                                             onChange,
                                                                                         }) => {
    const boxNames = ["All Languages", "English", "Mandarin", "Hindi", "Spanish", "French", "Arabic", "Bengali", "Russian", "Portuguese", "Urdu", "Indonesian", "German", "Japanese", "Marathi", "Turkish"];
    const [selectedBoxes, setSelectedBoxes] = useState<boolean[]>([true, ...new Array(boxNames.length - 1).fill(false)]);

    const handleBoxClick = (boxId: number) => {
        const newSelectedBoxes = [...selectedBoxes];

        // If "All Decades" is clicked, reset all other boxes
        if (boxId === 0) {
            newSelectedBoxes.fill(false);
            newSelectedBoxes[0] = true; // Select "All Decades"
        } else {
            // Toggle the clicked box
            newSelectedBoxes[boxId] = !newSelectedBoxes[boxId];

            // Unselect "All Decades" if any other box is selected
            if (newSelectedBoxes[0]) {
                newSelectedBoxes[0] = false;
            }
        }

        setSelectedBoxes(newSelectedBoxes);

        const selectedFilters = newSelectedBoxes.reduce((filters, isSelected, index) => {
            if (isSelected) {
                filters.push(boxNames[index]);
            }
            return filters;
        }, [] as string[]);

        onChange(selectedFilters);
    };

    useEffect(() => {
        // Trigger onChange with the default selected option if no box is selected
        if (!selectedBoxes.some(box => box)) {
            onChange([boxNames[0]]);
        }
    }, [selectedBoxes]);

    return (
        <SimpleGrid columns={[3, null, 6]} gap={{ base: "4", md: "5", lg: "auto" }} textTransform="capitalize" fontWeight='500' fontSize={{ base: "14px", md: "15px", lg: "16px" }}>
            {boxNames.map((name, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    <Box
                        bg={selectedBoxes[index] ? '#A61212' : '#21201d'}
                        cursor='pointer'
                        p='10px'
                        border='2px'
                        borderColor='#A61212'
                        _hover={{ bg: selectedBoxes[index] ? '#c01515' : '#262521' }}
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{ base: "10vh", md: "16vh", lg: "12vh" }}
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
};

export default DiscoverSecondaryFilterLanguage;