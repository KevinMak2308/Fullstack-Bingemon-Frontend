import React, {useEffect, useState} from "react";
import httpService from "../../services/httpService";

interface GenreProps {
    onChange: (selectedGenre: number) => void;
}

interface Genre {
    id: number,
    name: string
}

export default function Genre({onChange}: GenreProps ) {
    const genreUrl = "/movie/genres";
    const [genreList, setGenreList] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const fetchAllGenres = async () => {
        try {
            const {data} = await httpService.get(genreUrl);
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
}