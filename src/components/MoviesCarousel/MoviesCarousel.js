import React, { useState, useEffect } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
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
    const [fourMovies, setFourMovies] = useState(movies);
    const [activeIndex, setActiveIndex] = useState(0);
    let animating = false;

    const onExiting = () => {
        animating = true;
    }

    const onExited = () => {
        animating = false;
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === fourMovies.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? fourMovies.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const slides = fourMovies.map((fourMovie, index) => (
        <CarouselItem
            className="custom-tag"
            tag="div"
            key={index}
            onExiting={onExiting}
            onExited={onExited}>
            <FourMovies items={fourMovie} />
        </CarouselItem>
    ));


    useEffect(() => {
        const mvs = getMoviesinArrayOf4(movies);
        setFourMovies(mvs)
    }, [movies])

    return (
        <div className="container">
            <h3 style={{ textAlign: 'left' }}>{type}</h3>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={movies} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    )
};

export { MoviesCarousel };