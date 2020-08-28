import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
 
function Content(props) {
    return (
        <Container>
            <Row className="p-content-style">
                <Col className="justify-content-center">
                    {props.children}
                </Col>
            </Row>
            <Row className="p-content-style">
                <Col className="p-social-networking-style">
                    <a href="https://www.linkedin.com/in/preetip10mishra/"><i class="fab fa-linkedin"></i>Preei Mishra</a>
                    <a href="https://github.com/preetip10"><i class="fab fa-github"></i>GitHub</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Content;