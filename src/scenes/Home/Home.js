import React, { useState, useEffect } from 'react'
import { MoviesCarousel } from '../../components/MoviesCarousel';

const getLatestMovies = (movies) => movies.reduce((acc, crr) => {
    //TODO function sort latest movie by date
    return acc.push(crr);
}, [])


const getTrendingMovies = (movies) => movies.reduce((acc, crr) => {
    //TODO function sort Trending movie by date
    return acc.push(crr);
}, []);

const Home = () => {
    const [moviesCarousels, setMoviesCarousels] = useState([]);

    useEffect(() => {
        const latestMovies = [{
            title: "Movie 1",
            genre_ids: [1, 2],
            vote_average: 4,
            release_date: "2019-06-05",
        }]; //TODO API get all latest movies

        const trendingMovies = [{
            title: "Movie 1",
            genre_ids: [1, 2],
            vote_average: 4,
            release_date: "2019-06-05",
        }]; //TODO API get all trending movies

        return () => {
            setMoviesCarousels([{
                type: "Latest",
                movies: getLatestMovies(latestMovies),
            }, {
                type: "Trending",
                movies: getTrendingMovies(trendingMovies),
            }
            ]);
        };
    }, [])




    return (
        <>
            <MoviesCarousel {...moviesCarousels} />
        </>
    )
}

export { Home }