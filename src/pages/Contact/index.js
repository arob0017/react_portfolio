import React from "react";
import "./style.css";
import { Col, Card, Button, Jumbotron, Container, Row } from 'react-bootstrap';

function Contact() {
    return (
        <Container>
            <Jumbotron className="contact">
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Contact Me</Card.Title>
                                <Card.Text>Give me a call: +61437556926</Card.Text>
                                <Button href="mailto:amroro.code@gmail.com" variant="light">Send me an Email</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src="../../assets/images/artist_amelia" rel="noreferrer" className="artistAmelia" alt="Amelia Portrait" />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default Contact;