import React from 'react';
import { Row, Col } from 'reactstrap';
import { MovieCard } from './MovieCard';

const FourMovies = ({ items = [] }) => {
    return (
        <Row>
            {items.map((item, i) => {
                return (
                    <Col key={i}>
                        <MovieCard {...item} />
                    </Col>
                )
            })}
        </Row>
    )
}

export { FourMovies }