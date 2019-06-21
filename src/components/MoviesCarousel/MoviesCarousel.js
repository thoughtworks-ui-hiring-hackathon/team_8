import React from 'react'
import { Row, Col } from 'reactstrap';
import { MovieCard } from '../MovieCard';

const MoviesCarousel = ({ title, movies }) => {
    return (
        <Row>
            <h1>{title}</h1>

            <Col sm={12}>
                <MovieCard />
            </Col>
        </Row>
    )
};

export { MoviesCarousel };