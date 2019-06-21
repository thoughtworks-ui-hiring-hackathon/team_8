import React from 'react'
import { MoviesCarousel } from './MoviesCarousel'

const MoviesCarousels = (props) => {
    console.log(props.moviesCarousels)
    return (
        <>
            {props.moviesCarousels.map(moviesCarousel =>
                (<MoviesCarousel {...moviesCarousel} />)
            )}
        </>
    )
};

export { MoviesCarousels };