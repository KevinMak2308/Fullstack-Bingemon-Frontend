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
                bg='#A61212'
                _hover={{bg: '#A61212'}}
                cursor='pointer'
                borderRadius='10px'
                color='#F0F0EE'
                width='200px'
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