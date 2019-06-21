import React from 'react';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ stars = 0 }) => {
    let emptyStars = Math.round((10 - stars) / 2); //1
    let filledStars = 5 - emptyStars; //4

    const getStars = (icon, count) => {
        let counter = [];
        for (let i = 0; i < count; i++) {
            counter.push(i);
        }
        return counter.map(index => <FontAwesomeIcon icon={icon} key={index} />)
    }

    return <>
        <Row>
            {getStars(faStar, filledStars)}
            {getStars(faStarRegular, emptyStars)}
        </Row>
    </>
}

export { Stars }