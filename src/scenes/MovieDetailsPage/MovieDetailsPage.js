import React from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import actionGetMovieDetails from '../../actions/getMovieDetails';
import {Stars} from '../../components/Stars';
import './style.scss';

class MovieDetailsPageWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: {},
        };
    }
    componentDidMount() {
        const { getMovieDetails, match: { params:  { id = -1 } = {} } = {} } = this.props;
        getMovieDetails(id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.movieDetails !== prevState.movieDetails) {
            return ({ movieDetails: nextProps.movieDetails.data });
        }

        return null;
    }

    render() {
        const { movieDetails: { title = '', overview = '', poster_path = '', vote_average = 0, credits: { cast = [] } = {} } = {} } = this.state;
        const getCast = () => {
            let casts = [];
            cast.forEach(it => casts.push(it.name));
            return casts.join(', ');
        }
        return (
            <Container>  
                <div className="text-center">
                    {poster_path && <img 
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt="movie poster"/>}
                </div>
                <Row className="movie_details">
                    <Col>
                        <h1>{title}</h1>
                        <p>{overview}</p>
                    </Col>

                    <Col className="movie_describe">
                        <Row>
                            <Col><strong>Genre</strong></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col><strong>Cast</strong></Col>
                            <Col>{getCast()}</Col>
                        </Row>
                        <Row>
                            <Col><strong>Director</strong></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col><strong>MovieRating</strong></Col>
                            <Col><Stars stars={vote_average} /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    movieDetails: state.movieDetailsReducer,
});

const mapDispatchToProps = dispatch => ({
    getMovieDetails: id => dispatch(actionGetMovieDetails(id)),
})

export const MovieDetailsPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageWrapper);