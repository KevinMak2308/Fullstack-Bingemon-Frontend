import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from "../components/NavBar"
import SingleSeriesFirstSection from "../components/SingleSeriesFirstSection"
import SingleSeriesSecondSection from "../components/SingleSeriesSecondSection"
import SingleSeriesThirdSection from "../components/SingleSeriesThirdSection"
import SingleSeriesFourthSection from "../components/SingleSeriesFourthSection"
import SingleSeriesFifthSection from "../components/SingleSeriesFifthSection"
import SingleSeriesSixthSection from "../components/SingleSeriesSixthSection"
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom';
import {ApiImage} from "../components/ImageCarousel";


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

export interface Season {
    id: number;
    name: string;
    poster_path: string;
}

export interface SeasonList {
    seasons: Season[];
}

export interface Series {
    name: string;
    original_name: string;
    genres: Genre[];
    tagline: string;
    first_air_date: string;
    spoken_languages: Language[];
    production_companies: Company[];
    production_countries: Country[];
    vote_average: string;
    overview: string;
    status: string;
    created_by: CastMember[];
}

function SingleSeriesPage() {
    const { id } = useParams();
    const [seriesData, setSeriesData] = useState<Series | null>(null);
    const [castData, setCastData] = useState<CastMember[]>([]);
    const [imageData, setImageData] = useState<ApiImage[]>([]);
    const [trailerData, setTrailerData] = useState<Trailer | null>(null);
    const [seasonsData, setSeasonsData] = useState<Season[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [seriesResult, castResult, imagesResult, trailerResult, seasonsResult] = await Promise.all([
                    fetch(`http://localhost:8080/series/${id}`).then(res => res.json()),
                    fetch(`http://localhost:8080/series/${id}/cast`).then(res => res.json()),
                    fetch(`http://localhost:8080/series/${id}/backdrops`).then(res => res.json()),
                    fetch(`http://localhost:8080/series/${id}/trailer`).then(res => res.json()),
                    fetch(`http://localhost:8080/series/${id}/seasons`).then(res => res.json()),
                ]);
                setSeriesData(seriesResult);
                setCastData(castResult);
                setImageData(imagesResult);
                setTrailerData(trailerResult);
                setSeasonsData(seasonsResult);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (seriesData == null) {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return <div>Something went wrong... Please refresh the page</div>;
    }
    console.log(trailerData);
    return (
        <div>
            <NavBar/>
            <SingleSeriesFirstSection series={seriesData} images={imageData} />
            <SingleSeriesSecondSection actors={castData} />
            {/*{!trailerData?.key || !trailerData ? (null) : <SingleSeriesThirdSection series={seriesData} trailer={trailerData} />}*/}
            <SingleSeriesThirdSection series={seriesData} trailer={trailerData} />
            <SingleSeriesFourthSection seasons={seasonsData}/>
            <SingleSeriesFifthSection/>
            <SingleSeriesSixthSection series={seriesData} />
            <Footer/>
        </div>

    )

}

export default SingleSeriesPage;