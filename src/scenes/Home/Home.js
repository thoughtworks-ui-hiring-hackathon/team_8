import React, { useState, useEffect } from 'react'
import actionGetLatestMovies from '../../actions/getLatestMovies';
import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import actionGetPopularMovies from '../../actions/getPopularMovies';
import actionGetGenres from '../../actions/getGenres';
import { connect } from 'react-redux'
import { MoviesCarousel } from '../../components/MoviesCarousel';


const getGenreString = (ids, map) => {
    return ids.reduce((acc, crr) => {
        if (acc) acc += `, ${crr}`;
        else acc = crr;
        return acc;

    }, '')
}

const getLMbyConstrains = (movies = [], geners) => {
    // TODO add contraints for sorting and filtering movies
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({
            id, vote_count, title, poster_path, release_date,vote_average,
            genre: getGenreString(genre_ids, geners),
        });
        return acc;
    }, [])

}

const getTMbyConstrains = (movies = [], geners) => {
    // TODO add contraints for sorting and filtering movies
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({
            id, vote_count, title, poster_path, release_date,vote_average,
            genre: getGenreString(genre_ids, geners),
        });
        return acc;
    }, [])
}

const getPMbyConstrains = (movies = [], geners) => {
    // TODO add contraints for sorting and filtering movies
    return movies.reduce((acc, crr) => {
        const { id, vote_count, vote_average, title, poster_path, genre_ids, release_date } = crr;
        acc.push({
            id, vote_count, title, poster_path, release_date,vote_average,
            genre: getGenreString(genre_ids, geners),
        });
        return acc;
    }, [])
}

const HomeWrapper = (props) => {
    const {
        getAllLatestMovies, latestMovies: lm,
        getAllTrendingMovies, trendingMovies: tm,
        getAllPopularMovies, popularMovies: pm,
        getGenres, genres
    } = props;

    const [latestMovies, setLatestMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getAllLatestMovies();
    }, [getAllLatestMovies])

    useEffect(() => {
        getAllTrendingMovies();
    }, [getAllTrendingMovies])

    useEffect(() => {
        getAllPopularMovies();
    }, [getAllPopularMovies])

    useEffect(() => {
        getGenres();
    }, [getGenres])
    useEffect(() => {
        const lms = getLMbyConstrains(lm.data, genres);
        const tms = getTMbyConstrains(tm.data, genres);
        const pms = getPMbyConstrains(pm.data, genres);
        setLatestMovies(lms);
        setTrendingMovies(tms);
        setPopularMovies(pms);
    }, [lm, tm, pm, genres])
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