import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import { MoviesCarousel } from '../../components/MoviesCarousel';

const getLatestMovies = (movies) => movies.reduce((acc, crr) => {
    //TODO function sort latest movie by date
    return acc.push(crr);
}, [])

const getTrendingMovies = (movies) => movies.reduce((acc, crr) => {
    //TODO function sort Trending movie by date
    return acc.push(crr);
}, []);

const HomeWrapper = (props) => {
    const {
        getAllTrendingMovies,
        trendingMovies,
    } = props;
    console.log('HOMe', props);
    const [moviesCarousels, setMoviesCarousels] = useState([]);

    useEffect(() => {
        getAllTrendingMovies();

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
                movies: getTrendingMovies(trendingMovies.data),
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

const mapStateToProps = state => {
    return ({
        trendingMovies: state.trendingMoviesReducer,
    })
}

const mapDispatchToProps = dispatch => ({
    getAllTrendingMovies: () => dispatch(actionGetTrendingMovies())
})

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);