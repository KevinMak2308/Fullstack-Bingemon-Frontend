import React, { useState, useEffect } from 'react';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import httpService from "../../services/httpService";

interface genreFilterProps {
    genreNames: string[],
    onChange: (selectedFilters: string[]) => void;
}

interface Genre {
    id: number,
    name: string
}

export default function GenreFilter ({genreNames, onChange}: genreFilterProps) {
    const genreUrl = "/movie/genres"
    const [genreList, setGenreList] = useState<Genre[]>([])
    const [selectedItem, setSelectedItem] = useState(0)


    const fetchAllGenres = async() => {
        try {
            const {data} = await httpService.get(genreUrl);
                setGenreList(data.genres)
        } catch (error) {
            console.error("Something went wrong fetching: ", error)
        }
    }

    useEffect(() => {
        fetchAllGenres()
    }, [])

    console.log("This is our genre list: ", genreList)

    const handleSelectionChange = (option: number) => {
        if(option) {
            setSelectedItem(option)
            console.log("Selected Genre ID: ", selectedItem)
        }
    }



    return (
        <SimpleGrid columns={[3, null, 6]} gap={{ base: "4", md: "5", lg: "auto" }} textTransform="capitalize" fontWeight='500' fontSize={{ base: "14px", md: "15px", lg: "16px" }}>
            {genreList.map((genre, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    <Box
                        bg={selectedItem === genre.id ? '#A61212' : '#21201d'}
                        cursor='pointer'
                        p='10px'
                        border='2px'
                        borderColor='#A61212'
                        _hover={{ bg: selectedItem === genre.id ? '#c01515' : '#262521' }}
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{ base: "10vh", md: "16vh", lg: "12vh" }}
                        display='flex'
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'

                        onClick={() => handleSelectionChange(genre.id)}>
                        <Text>
                            {genre.name}
                        </Text>
                    </Box>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}


/*const DiscoverSecondaryFilterGenre: React.FC<DiscoverSecondaryFilterGenreProps> = ({selectedFilters, onChange,}) => {
    const boxNames = ["All Genres", "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "TV Movies", "Thriller", "War", "Western"];
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
};*/

/*
export default DiscoverSecondaryFilterGenre;*/
