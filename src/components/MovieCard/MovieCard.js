import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const MovieCard = (props) => {
    return (
        <>
            <Card>
                <CardImg top style={{ maxWidth: "320px", height: "170px" }} src={`https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png`} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.genre}</CardSubtitle>

                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        </>)
}

export { MovieCard }