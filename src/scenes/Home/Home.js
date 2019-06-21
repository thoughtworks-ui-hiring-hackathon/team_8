import React, { useState, useEffect } from 'react'
import actionGetLatestMovies from '../../actions/getLatestMovies';
import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import actionGetPopularMovies from '../../actions/getPopularMovies';
import actionGetGenres from '../../actions/getGenres';
import { connect } from 'react-redux'
import { MoviesCarousel } from '../../components/MoviesCarousel';

const getLMbyConstrains = (movies = []) => {
    // TODO add contraints for sorting and filtering movies
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({ id, vote_count, vote_average, title, poster_path, genre_ids, release_date });
        return acc;
    }, [])

}

const getTMbyConstrains = (movies = []) => {
    // TODO add contraints for sorting and filtering movies
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({ id, vote_count, vote_average, title, poster_path, genre_ids, release_date });
        return acc;
    }, [])
}

const getPMbyConstrains = (movies = []) => {
    // TODO add contraints for sorting and filtering movies
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({ id, vote_count, vote_average, title, poster_path, genre_ids, release_date });
        return acc;
    }, [])
}

const HomeWrapper = (props) => {
    const { getAllLatestMovies, getAllTrendingMovies, getAllPopularMovies, trendingMovies: tm, latestMovies: lm, popularMovies: pm } = props;

    const [latestMovies, setLatestMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getAllLatestMovies();
        getAllTrendingMovies();
        getAllPopularMovies();
    }, [getAllLatestMovies, getAllTrendingMovies, getAllPopularMovies])

    useEffect(() => {
        const lms = getLMbyConstrains(lm.data);
        const tms = getTMbyConstrains(tm.data);
        const pms = getPMbyConstrains(pm.data);
        setLatestMovies(lms);
        setTrendingMovies(tms);
        setPopularMovies(pms);
    }, [lm, tm, pm])
    return (
        <>
            <MoviesCarousel type="Latest" movies={latestMovies} />
            <MoviesCarousel type="Trending" movies={trendingMovies} />
            <MoviesCarousel type="Popular" movies={popularMovies} />
        </>
    )
}

const mapStateToProps = state => {
    return ({
        trendingMovies: state.trendingMoviesReducer,
        latestMovies: state.latestMoviesReducer,
        popularMovies: state.popularMoviesReducer,
        genres: state.genresReducer,
    })
}

const mapDispatchToProps = dispatch => ({
    getAllTrendingMovies: () => dispatch(actionGetTrendingMovies()),
    getAllLatestMovies: () => dispatch(actionGetLatestMovies()),
    getAllPopularMovies: () => dispatch(actionGetPopularMovies()),
    getGenres: () => dispatch(actionGetGenres())
})

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);