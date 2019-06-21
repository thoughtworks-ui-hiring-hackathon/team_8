import React, { useState, useEffect } from 'react'
import actionGetLatestMovies from '../../actions/getLatestMovies';
import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import { connect } from 'react-redux'
import { MoviesCarousel } from '../../components/MoviesCarousel';


const HomeWrapper = (props) => {
    const { getAllLatestMovies, getAllTrendingMovies, trendingMovies: tm, latestMovies: lm } = props;

    const [latestMovies, getLatestMovies] = useState([]);
    const [trendingMovies, getTrendingMovies] = useState([]);

    useEffect(() => {
        getAllLatestMovies();
        getAllTrendingMovies();
    }, [getAllLatestMovies, getAllTrendingMovies])

    useEffect(() => {
        getLatestMovies(lm.data);
        getTrendingMovies(tm.data)
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