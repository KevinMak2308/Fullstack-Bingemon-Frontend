import '../App.css';
import NavBar from "../components/nav/NavBar"
import ProfileInfo from "../components/profile/ProfileInfo"
import ProfileCards from "../components/profile/ProfileCards"
import ProfileRectangles from "../components/profile/ProfileRectangles"
import LoadingScreen from '../components/errorHandling/LoadingScreen';
import ErrorScreen from '../components/errorHandling/ErrorScreen';
import Footer from "../components/nav/Footer"
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import httpService from '../services/httpService';

export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    bio: string;
    profile_picture_filename: string;
}

export interface Avatar {
    filename: string;
}

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

export interface Series {
    id: number;
    name: string;
    poster_path: string;
}

function ProfilePage() {
    const {id} = useParams();
    const userUrl = `user/${id}`;
    const avatarUrl = "user/avatars";
    const userMoviesUrl = `user/${id}/movies`;
    const userSeriesUrl = `user/${id}/series`;
    const [userData, setUserData] = useState<User>({} as User);
    const [avatarData, setAvatarData] = useState<Avatar[]>([]);
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const [seriesData, setSeriesData] = useState<Series[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserMovies = async (id: string) => {
        try {
            const {data: userResponse} = await httpService.get(userUrl, {});
            console.log(userResponse, "Test");
            const {data: avatarResponse} = await httpService.get(avatarUrl, {});
            const {data: movieResponse} = await httpService.get(userMoviesUrl, {});
            const {data: seriesResponse} = await httpService.get(userSeriesUrl, {});

            setUserData(userResponse);
            setAvatarData(avatarResponse);
            setMovieData(movieResponse);
            setSeriesData(seriesResponse);
            setIsLoading(false);
        } catch (error) {
            console.error("Something went wrong fetching: ", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchUserMovies(id);
        }
    }, [id]);

    if (isLoading) {
        return <LoadingScreen loadingText='user'/>;
    }
    if (movieData == null) {
        return <ErrorScreen errorText='Something went wrong fetching the user'/>;
    }

    return (
        <div>
            <NavBar/>
            <ProfileInfo user={userData} movies={movieData} series={seriesData} avatars={avatarData}/>
            <ProfileCards user={userData} movies={movieData} series={seriesData}/>
            <ProfileRectangles/>
            <Footer/>
        </div>
    )
}

export default ProfilePage;