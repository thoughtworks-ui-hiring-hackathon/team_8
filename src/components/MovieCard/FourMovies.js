import React, { Fragment } from 'react';
import { MovieCard } from './MovieCard';

const FourMovies = ({ items = [] }) => {
    return (
        <>
            {items.map((item, i) => <Fragment key={i}><MovieCard {...item} /></Fragment>)}
        </>
    )
}

export { FourMovies }