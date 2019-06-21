import React, { useState, useEffect } from 'react'
import actionGetLatestMovies from '../../actions/getLatestMovies';
import actionGetTrendingMovies from '../../actions/getTrendingMovies';
import { connect } from 'react-redux'
import { MoviesCarousels } from '../../components/MoviesCarousel';


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

    useEffect(() => {
        getAllLatestMovies();
        getAllTrendingMovies();

        setMoviesCarousels([{
            type: "Latest",
            movies: getLatestMovies(latestMovies.data),
        }, {
            type: "Trending",
            movies: getTrendingMovies(trendingMovies.data),
        }
        ]);
    }, [latestMovies, trendingMovies])

    console.log(moviesCarousels);

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