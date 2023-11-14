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

export interface Series {
    name: string;
    original_title: string;
    genres: Genre[];
    tagline: string;
    first_air_date: string;
    spoken_languages: Language[];
    vote_average: string;
    overview: string;
}

function SingleSeriesPage() {
    const { id } = useParams();

    const [seriesData, setSeriesData] = useState<Series | null>(null);
    const [imageData, setImageData] = useState<ApiImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [seriesResult, imagesResult] = await Promise.all([
                    fetch(`http://localhost:8080/series/${id}`).then(res => res.json()),
                    fetch(`http://localhost:8080/series/${id}/backdrops`).then(res => res.json()),
                ]);
                setSeriesData(seriesResult);
                setImageData(imagesResult);
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
    
    return (
        <div>
            <NavBar/>
            <SingleSeriesFirstSection series={seriesData} images={imageData} />
            <SingleSeriesSecondSection/>
            <SingleSeriesThirdSection/>
            <SingleSeriesFourthSection/>
            <SingleSeriesFifthSection/>
            <SingleSeriesSixthSection/>
            <Footer/>
        </div>

    )

}

export default SingleSeriesPage;