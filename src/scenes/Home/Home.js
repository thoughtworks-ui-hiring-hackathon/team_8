import React, { useState, useEffect } from 'react'
import { MoviesCarousels } from '../../components/MoviesCarousel';

//TODO function sort latest movie by date
const getLatestMovies = (movies) => movies.reduce((acc, crr) => acc.push(crr), []);


//TODO function sort Trending movie by date
const getTrendingMovies = (movies) => movies.reduce((acc, crr) => acc.push(crr), []);

const Home = () => {
    const [moviesCarousels, setMoviesCarousels] = useState([{
        type: "Latest",
        movies: [{
            title: "Movie 1",
            genre_ids: [1, 2],
            vote_average: 4,
            release_date: "2019-06-05",
        }]
    }, {
        type: "Trending",
        movies: [{
            title: "Movie 1",
            genre_ids: [1, 2],
            vote_average: 4,
            release_date: "2019-06-05",
        }]
    }
    ]);

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
                movies: latestMovies //getLatestMovies(latestMovies),
            }, {
                type: "Trending",
                movies: trendingMovies //getTrendingMovies(trendingMovies),
            }
            ]);
        };
    }, [])




    return (
        <>
            <MoviesCarousels moviesCarousels={moviesCarousels} />
        </>
    )
}

export { Home }