import React from 'react';
import { Col } from 'reactstrap';
import { MovieCard } from './MovieCard';

const FourMovies = ({ items }) => {
    return (
        <>
            {items.map(item => <Col><MovieCard {...item} /></Col>)}
        </>
    )
}

export { FourMovies }