import React, { useState, useEffect } from 'react'
import actionGetLatestMovies from '../../actions/getLatestMovies';
import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import { connect } from 'react-redux'
import { MoviesCarousels } from '../../components/MoviesCarousel';

const getLMbyConstrains = (movies = []) => {
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({ id, vote_count, vote_average, title, poster_path, genre_ids, release_date });
        return acc;
    }, [])

}

const getTrendingMovies = (movies = []) => {
    console.log('trending', movies)
}

//TODO function sort latest movie by date
const getLatestMovies = (movies = []) => movies.reduce((acc = [], crr) => acc.push(crr), []);

const getTrendingMovies = (movies = []) => movies.reduce((acc = [], crr) => {
    //TODO function sort Trending movie by date
    return acc.push(crr);
}, []);

const HomeWrapper = (props) => {
    const {
        getAllTrendingMovies,
        getAllLatestMovies,
        trendingMovies,
        latestMovies,
    } = props;

    const [moviesCarousels, setMoviesCarousels] = useState([]);
    console.log('HOMe', props);

    useEffect(() => {
        getAllLatestMovies();
        getAllTrendingMovies();

    useEffect(() => {
        const lms = getLMbyConstrains(lm.data);
        const tms = getTrendingMovies(tm.data);
        getLatestMovies(lms);
        getTrendingMovies(tms)
    }, [lm, tm])
    return (
        <>
            <MoviesCarousels moviesCarousels={moviesCarousels} />
        </>
    )
}

const mapStateToProps = state => {
    console.log('home', state);
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