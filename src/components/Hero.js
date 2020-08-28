import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={9} sm={12} >
                        <h1 className="display-2 font-weight-bolder">{props.title}</h1>
                        <h3 className="display-5 font-weight-light">{props.subtitle}</h3>
                        <p className="lead font-weight-light">{props.text}</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;