import React from 'react';
import { Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import searchMovies from '../../actions/searchMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const ExploreWrapper = () => {


    // const searchMovies = () => {}
    return (
        <>
            <Row style={{ paddingTop: '50px' }} className="container">
                <Col sm={6}>
                    <InputGroup>
                        <Input />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
            <Row style={{ paddingTop: '50px', textAlign: 'left' }} className="container">
                <Col sm={12}>
                    <h2>Results</h2>
                </Col>
            </Row>
        </>
    )
}


const mapStateToProps = state => ({
    searchMovies: state.searchMoviesReducer,
});

const mapDispatchToProps = dispatch => ({
    searchMovies: id => dispatch(searchMovies(id)),
})

export const Explore =  connect(mapStateToProps, mapDispatchToProps)(ExploreWrapper);