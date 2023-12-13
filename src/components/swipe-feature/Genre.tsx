import React, {Fragment, useEffect, useState} from "react";
import httpService from "../../services/httpService";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


interface GenreProps {
    onChange: (selectedGenre: number) => void;
}

interface Genre {
    id: number,
    name: string
}

export default function Genre({onChange}: GenreProps ) {
    const genreUrl = "/movie/genres";
    const [genreData, setGenreData] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const fetchAllGenres = async () => {
        try {
            const {data} = await httpService.get(genreUrl);
            setGenreData(data.genres);
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
    <div>
        <Menu>
            <MenuButton
                as={Button} rightIcon={<ChevronDownIcon />}
                py={{base: "19px", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px"}}
                px={{base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px"}}
                w="fit-content"
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border=''
                borderRadius='10px'
                fontSize={{ base: "12px", sm:"13px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}
                fontFamily='Roboto'
                fontWeight='semibold'
                letterSpacing='0.75px'
                bg='#A61212'
                color='#F0F0EE'
                _hover={{ filter: 'brightness(1.2)' }}
                _active={{ bg: '#A61212', filter: 'brightness(1.2)' }}
                _focus={{ boxShadow: 'none' }}
                         >
                Genre
            </MenuButton>
            <MenuList
            bg='#21201d'
            color='#F0F0EE'
            border='2px'
            borderColor='#21201d'
            borderRadius='10px'>
                    <div>
                        {genreData.map((genre, index) => (
                    <MenuItem
                        onClick={() => handleSelectionChange(genre.id)}>{genre.name}</MenuItem>
                        ))}
                    </div>
            </MenuList>
        </Menu>
        </div>
    )

    
    
}