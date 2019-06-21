import React from 'react';
import { Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Explore = () => {
    return (
        <>
            <Row style={{ paddingTop: '50px' }} className="container">
                <Col sm={6}>
                    <InputGroup>
                        <Input />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary">To the Right!</Button>
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

export { Explore }