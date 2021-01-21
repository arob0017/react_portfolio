import React from "react";
import "./style.css";
import { Col, Card, Button, Image, Jumbotron, Container, Row } from 'react-bootstrap';
import artistAmelia from "../../assets/images/artist_amelia.jpg";

function Contact() {
    return (
        <Container>
            <Jumbotron className="contact">
                <Row>
                    <Col xs={6}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Contact Me</Card.Title>
                                <Card.Text>Give me a call: +61437556926</Card.Text>
                                <Button href="mailto:amroro.code@gmail.com" variant="light">Send me an Email</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Image src={artistAmelia} rel="noreferrer" className="artistAmelia" alt="Amelia Portrait" fluid />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default Contact;