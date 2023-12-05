import React, { useEffect, useState } from 'react';
import httpService from "../../services/httpService";
import { Box } from '@chakra-ui/react';
import Genre from "./Genre";

interface Movie {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: string;
    release_date: string;
    runtime: number;
    genre: Genre[]
    credits: Credits[]
    videos: Videos[]
}

interface Genre {
    name: string
}

interface Credits {
    name: string
}

interface Videos {
    type: string,
    official: boolean
    key: string
}

export default function MovieSwipe() {
    const movieUrl = `movie/discover`
    const [genreData, setGenreData] = useState<Genre[]>([])
    const [creditsData, setCreditsData] = useState<Credits[]>([])
    const [videosData, setVideosData] = useState<Videos[]>([])
    const [movieData, setMovieData] = useState<Movie>()
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);


    const handleGenreSelection = (selectedGenre: number) => {
        setSelectedGenre(selectedGenre);
    }

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const { data } = await httpService.get(movieUrl, {
                    params: {
                        genres: selectedGenre,
                    }
                });
                setMovieData(data);
            } catch (error) {
                console.error("Something went wrong fetching: ", error);
            }
        }
        fetchAllMovies()
    }, [selectedGenre])

    return (
        <Box>
            <Genre onChange={handleGenreSelection}/>
        </Box>
    )
}
