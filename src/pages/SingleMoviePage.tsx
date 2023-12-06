import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import SingleMovieFirstSection from "../components/SingleMovieFirstSection"
import SingleMovieSecondSection from "../components/SingleMovieSecondSection"
import SingleMovieThirdSection from "../components/SingleMovieThirdSection"
import SingleMovieFourthSection from "../components/SingleMovieFourthSection"
import SingleMovieFifthSection from "../components/SingleMovieFifthSection"
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom';
import {ApiImage} from "../components/ImageCarousel";
import httpService from '../services/httpService';

interface Genre {
    id: number;
    name: string;
}

interface Language {
    iso_639_1: string;
    english_name: string;
    name: string;
}

interface Company {
    id: number;
    name: string;
}

interface Country {
    iso_3166_1: string;
    name: string;
}

interface Collection {
    id: number;
    name: string;
}

export interface CastMember {
    id: number;
    name: string;
    profile_path: string;
}

export interface Cast {
    actors: CastMember[];
}

export interface Trailer {
    key: string;
}

export interface Movie {
    id: number;
    title: string;
    original_title: string;
    backdrop_path: string;
    genres: Genre[];
    tagline: string;
    runtime: number;
    release_date: string;
    vote_average: string;
    overview: string;
    original_language: string;
    collection: string;
    belongs_to_collection: Collection;
    status: string;
    budget: number;
    revenue: number;
    production_companies: Company[];
    production_countries: Country[];
    spoken_languages: Language[];
}

function SingleMoviePage() {
    const { id } = useParams();
    const movieUrl = `movie/${id}`;
    const castUrl = `movie/${id}/cast`;
    const directorUrl = `movie/${id}/directors`;
    const backdropsUrl = `movie/${id}/backdrops`;
    const trailerUrl = `movie/${id}/trailer`;
    const [movieData, setMovieData] = useState<Movie | null>(null);
    const [castData, setCastData] = useState<CastMember[]>([]);
    const [directorData, setDirectorData] = useState<CastMember[]>([]);
    const [imageData, setImageData] = useState<ApiImage[]>([]);
    const [trailerData, setTrailerData] = useState<Trailer | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: movieResult } = await httpService.get(movieUrl, {});
                const { data: castResult } = await httpService.get(castUrl, {});
                const { data: directorResult } = await httpService.get(directorUrl, {});
                const { data: imagesResult } = await httpService.get(backdropsUrl, {});
                const { data: trailerResult } = await httpService.get(trailerUrl, {});
                setMovieData(movieResult);
                setCastData(castResult);
                setDirectorData(directorResult);
                setImageData(imagesResult);
                setTrailerData(trailerResult);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (movieData == null) {
        return <div>Something went wrong... Please refresh the page</div>;
    }
    
    return (
        <div>
            <NavBar />
            <SingleMovieFirstSection movie={movieData} images={imageData} />
            <SingleMovieSecondSection actors={castData} />
            {trailerData && <SingleMovieThirdSection movie={movieData} trailer={trailerData} />}
            <SingleMovieFourthSection />
            <SingleMovieFifthSection movie={movieData} directors={directorData} />
            <Footer />
        </div>
    );
}

export default SingleMoviePage;