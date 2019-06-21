import React from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Stars } from '../Stars';


const MovieCard = (props) => {
    console.log(props)
    return (
        <>
            <Card style={{ fontSize: 'small', }}>
                <CardImg top style={{ maxWidth: "320px", height: "170px" }} src={`https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png`} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.genre}</CardSubtitle>
                    <Row style={{ fontSize: 'small', }}>
                        <Col>
                            <Stars></Stars>
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