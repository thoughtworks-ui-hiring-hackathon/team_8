import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { FourMovies } from '../MovieCard';

const getMoviesinArrayOf4 = (movies) => {
    return movies.reduce((acc, crr) => {
        if (acc.length === 0) acc.push([crr])
        else {
            const inAcc = acc[acc.length - 1];
            if (inAcc.length < 4) inAcc.push(crr)
            else acc.push([crr])
        }
        return acc;
    }, [])
}
const MoviesCarousel = ({ type, movies = [] }) => {
    const [fourMovies, setFourMovies] = useState(movies)

    useEffect(() => {
        const mvs = getMoviesinArrayOf4(movies);
        setFourMovies(mvs)
    }, [movies])

    return (
        <div className="container">
            <h3 style={{ textAlign: 'left' }}>{type}</h3>
            <Row style={{ maxHeight: '100px' }}>
                <Col sm={12} >
                    <FourMovies items={fourMovies} />
                </Col>
            </Row>
        </div>
    )
};

export { MoviesCarousel };