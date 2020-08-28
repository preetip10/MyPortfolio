import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
        <footer>
            <Container fluid className="mt-4 mb-0 border-top justify-content-between">
                <Row className="p-0 m-0">
                    <Col xs={6} className="p-0 d-flex">2020</Col>
                    <Col xs={6} className="p-0 d-flex justify-content-end">This site is made by Preeti Mishra</Col>
                </Row>
            </Container>
        </footer>
        )
    }
}

export default Footer
