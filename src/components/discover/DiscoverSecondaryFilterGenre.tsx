import React, { useEffect, useState } from 'react';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import httpService from "../../services/httpService";

interface DiscoverSecondaryFilterGenreProps {
    onChange: (selectedGenre: number) => void;
}

interface Genre {
    id: number,
    name: string
}

export default function DiscoverSecondaryFilterGenre({onChange}: DiscoverSecondaryFilterGenreProps ) {
    const genreUrl = "/movie/genres";
    const [genreList, setGenreList] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const fetchAllGenres = async () => {
        try {
            const { data } = await httpService.get(genreUrl);
            setGenreList(data.genres);
        } catch (error) {
            console.error("Something went wrong fetching: ", error);
        }
    }

    useEffect(() => {
        fetchAllGenres();
    }, []);

    const handleSelectionChange = (option: number) => {
        if (option) {
            setSelectedGenre(option);
            onChange(option);
            console.log("Selected Genre ID: ", option);
        }
    }

    return (
        <SimpleGrid columns={[2, 3, 4, 6, 6, 6]} gap={{ base: "4", md: "5", lg: "auto" }} textTransform="capitalize" fontWeight='500' fontSize={{ base: "14px", md: "15px", lg: "16px" }}>
            {genreList.map((genre, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    <Box
                        bg={selectedGenre === genre.id ? '#A61212' : '#21201d'}
                        cursor='pointer'
                        p='10px'
                        className='SubheaderSmReg'
                        border='2px'
                        borderColor='#A61212'
                        _hover={{ bg: selectedGenre === genre.id ? '#c01515' : '#262521' }}
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{ base: "10vh", md: "16vh", lg: "12vh" }}
                        display='flex'
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'
                        onClick={() => handleSelectionChange(genre.id)}
                    >
                        <Text>
                            {genre.name}
                        </Text>
                    </Box>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}