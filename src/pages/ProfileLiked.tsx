import '../App.css';
import NavBar from "../components/nav/NavBar"
import AllLiked from "../components/profile/AllLiked"
import LoadingScreen from '../components/errorHandling/LoadingScreen';
import ErrorScreen from '../components/errorHandling/ErrorScreen';
import Footer from "../components/nav/Footer"
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import httpService from '../services/httpService';

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

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    bio: string;
    profile_picture_filename: string;
}

export interface LoggedInId {
    loggedInId: number;
}

function ProfileLiked() {
    const {id} = useParams();
    const userUrl = `user/${id}`;
    const userMoviesUrl = `user/${id}/movies`;
    const userSeriesUrl = `user/${id}/series`;
    const commonMoviesUrl = `user/compare-movies`;
    const commonSeriesUrl = `user/compare-series`;
    const [userData, setUserData] = useState<User>({
        id: 0,
        name: '',
        username: '',
        email: '',
        bio: '',
        profile_picture_filename: '',
    });
    const [loggedInIdData, setLoggedInIdData] = useState<number>(0);

    const [movieData, setMovieData] = useState<Movie[]>([]);
    const [seriesData, setSeriesData] = useState<Series[]>([]);
    const [commonMoviesData, setCommonMoviesData] = useState<Movie[]>([]);
    const [commonSeriesData, setCommonSeriesData] = useState<Series[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchUserMovies = async (id: string) => {
        try {
            const {data: userResponse} = await httpService.get(userUrl, {});
            const {data: movieResponse} = await httpService.get(userMoviesUrl, {});
            const {data: seriesResponse} = await httpService.get(userSeriesUrl, {});
            setIsLoading(false);
            let loggedInId;
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                const [name, value] = cookie.split('=');

                if (name === 'user_id') {
                    loggedInId = value;
                    setLoggedInIdData(parseInt(value));
                    break;
                }
            }

            console.log("LOGGED IN ID", loggedInId);

            if (loggedInId) {
                const {data: commonMoviesResponse} = await httpService.get(commonMoviesUrl, {
                    params: {
                        loggedInId: loggedInId,
                        friendId: id
                    }
                });
                console.log(commonMoviesResponse);
                const {data: commonSeriesResponse} = await httpService.get(commonSeriesUrl, {
                    params: {
                        loggedInId: loggedInId,
                        friendId: id
                    }
                });
                console.log(commonSeriesResponse);
                setCommonMoviesData(commonMoviesResponse);
                setCommonSeriesData(commonSeriesResponse);
            } else {
                setCommonMoviesData([])
                setCommonMoviesData([])
            }

            setUserData(userResponse);
            setMovieData(movieResponse);
            setSeriesData(seriesResponse);

        } catch (error) {
            console.error("Something went wrong fetching: ", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchUserMovies(id);
        }
    }, );

    if (isLoading) {
        return <LoadingScreen loadingText='liked movies and series'/>;
    }
    if (movieData == null) {
        return <ErrorScreen errorText='Something went wrong fetching liked movies and series'/>;
    }

    return (
        <div>
            <NavBar/>
            <AllLiked movies={movieData} series={seriesData} commonMovies={commonMoviesData}
                      commonSeries={commonSeriesData} user={userData} loggedInId={loggedInIdData}/>
            <Footer/>
        </div>
    )
}

export default ProfileLiked;