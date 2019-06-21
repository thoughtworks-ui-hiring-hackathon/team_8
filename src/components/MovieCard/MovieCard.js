import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Stars } from '../Stars';


const MovieCard = (props) => {
    console.log(props)
    return (
        <>
            <Card style={{ fontSize: 'small', textAlign: 'left' }}>
                <CardImg top 
                style={{ maxWidth: "320px", height: "170px" }} 
                src={` https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="Card image cap" />
                <CardBody>
                    <b><h5><CardTitle>{props.title}</CardTitle></h5></b>
                    <CardSubtitle>{props.genre}</CardSubtitle>
                    <Row style={{ fontSize: 'small', }}>
                        <Col>
                            <Stars stars={props.vote_average}></Stars>
                        </Col>
                        <Col>
                            <h6 style={{ fontSize: 'small', textDecoration: 'underline' }}><Link to={`/movie/${props.id}`}>Show more</Link></h6>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>)
}

export { MovieCard }