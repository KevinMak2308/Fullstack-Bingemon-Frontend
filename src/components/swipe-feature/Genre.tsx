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
            <MenuButton  as={Button} rightIcon={<ChevronDownIcon />}>
                Genre
            </MenuButton>
            <MenuList>
                {genreData.map((genre, index) => (
                    <MenuItem>{genre.name}</MenuItem>
                            ))}
            </MenuList>
        </Menu>
        </div>
    )

    
    
}