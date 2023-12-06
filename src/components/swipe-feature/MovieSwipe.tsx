import React, { useEffect, useState } from 'react';
import httpService from "../../services/httpService";
import { Box } from '@chakra-ui/react';
import Genre from "./Genre";
import Language from "./Language"
import Decades from "./Decades"

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
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [selectedDecades, setSelectedDecades] = useState<string | null>(null);

    const handleGenreSelection = (selectedGenre: number) => {
        setSelectedGenre(selectedGenre);
    }

    const handleLanguageSelection = (selectedLanguage: string) => {
        setSelectedLanguage(selectedLanguage);
    }

    const handleDecadesSelection = (selectedDecades: string) => {
        setSelectedDecades(selectedDecades);
    }


        const fetchAllMovies = async () => {
            try {
                const { data } = await httpService.get(movieUrl, {
                    params: {
                        genres: selectedGenre,
                        original_language: selectedLanguage,
                        decade: selectedDecades,
                    }
                });
                setMovieData(data);
            } catch (error) {
                console.error("Something went wrong fetching: ", error);
            }
        }
    useEffect(() => {
        fetchAllMovies()
        console.log("What is in genre param?: ", selectedGenre);
        console.log("What is in language param?: ", selectedLanguage);
    }, [selectedGenre, selectedLanguage, selectedDecades])

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap='20px'>
            <Genre onChange={handleGenreSelection}/>
            <Language onChange={handleLanguageSelection}/>
            <Decades onChange={handleDecadesSelection}/>
        </Box>
    )
}
