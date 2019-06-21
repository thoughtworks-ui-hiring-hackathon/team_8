import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { FourMovies } from '../MovieCard';

const selectMovies = (movies, page) => {
    return (page === 1)
        ? (movies.length > 4) ? movies : movies.slice(0, 4)
        : movies;
}
const MoviesCarousel = ({ title, movies }) => {
    const [fourMovies, setFourMovies] = useState([])

    useEffect(() => {
        setFourMovies(selectMovies(movies, 1))
    }, [movies])

    return (
        <>
            <Row style={{ maxHeight: '100px' }}>
                <h1>{title}</h1>
                <Col sm={12} >
                    <FourMovies items={fourMovies} />
                </Col>
            </Row>
        </>
    )
};

export { MoviesCarousel };