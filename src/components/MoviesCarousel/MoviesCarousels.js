import React from 'react'
import { MoviesCarousel } from './MoviesCarousel'

const MoviesCarousels = (props) => {
    console.log('xxxxx', props.moviesCarousels)
    return (
        <>
            {props.moviesCarousels.map((moviesCarousel, i) =>
                (<div key={i}><MoviesCarousel {...moviesCarousel} /></div>)
            )}
        </>
    )
};

export { MoviesCarousels };