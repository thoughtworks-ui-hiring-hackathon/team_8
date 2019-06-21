import React, { useState, useEffect } from 'react'
import actionGetLatestMovies from '../../actions/getLatestMovies';
import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import { connect } from 'react-redux'
import { MoviesCarousel } from '../../components/MoviesCarousel';

const getLMbyConstrains = (movies = []) => {
    return movies.reduce((acc, crr) => {
        const { vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({ vote_count, vote_average, title, poster_path, genre_ids, release_date });
        return acc;
    }, [])

}

const getTrendingMovies = (movies = []) => {
    console.log('trending', movies)
}

const HomeWrapper = (props) => {
    const { getAllLatestMovies, getAllTrendingMovies, trendingMovies: tm, latestMovies: lm } = props;

    const [latestMovies, getLatestMovies] = useState([]);
    const [trendingMovies, getTrendingMovies] = useState([]);

    useEffect(() => {
        getAllLatestMovies();
        getAllTrendingMovies();
    }, [getAllLatestMovies, getAllTrendingMovies])

    useEffect(() => {
        const lms = getLMbyConstrains(lm.data);
        const tms = getTrendingMovies(tm.data);
        getLatestMovies(lms);
        getTrendingMovies(tms)
    }, [lm, tm])
    return (
        <>
            <MoviesCarousel type="Latest" movies={latestMovies} />
            <MoviesCarousel type="Trending" movies={trendingMovies} />
        </>
    )
}

const mapStateToProps = state => {
    return ({
        trendingMovies: state.trendingMoviesReducer,
        latestMovies: state.latestMoviesReducer,
    })
}

const mapDispatchToProps = dispatch => ({
    getAllTrendingMovies: () => dispatch(actionGetTrendingMovies()),
    getAllLatestMovies: () => dispatch(actionGetLatestMovies())
})

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);