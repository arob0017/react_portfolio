import React from "react";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import "./style.css";


function Portfolio() {
    return (
        <main>

            <section className="box">
                <h2>My Portfolio</h2>
                <Nav className="justify-content-end portfolionav">
                    <Nav.Item>
                        <Nav.Link href="#webdevelopment">Webdevelopment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#performance">Performance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#teaching">Teaching</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#photography">Photography</Nav.Link>
                    </Nav.Item>
                </Nav>
            </section>

            <section id="webdevelopment" className="box">
                <Row>
                    <Col>
                        <h3>Webdevelopment</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="largeCard">
                            <Card.Img variant="top" className="sweetSpot" src="./photos/Holiday-Sweetspot.gif"
                                alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Holiday Sweetspot</Card.Title>
                                <Card.Text>An application to help travellers decide on where to stay!
                                </Card.Text>
                                <Button variant="light" target="_blank" href=" https://skoggy.github.io/project/" rel="noreferrer">See
                                Application</Button>
                                <Button variant="light" target="_blank" href="https://github.com/Skoggy/project" rel="noreferrer">Github
                                Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="largeCard">
                            <Card.Img variant="top" className="spinMeal" src="./photos/Spin-That-Meal.gif"
                                alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Spin That Meal</Card.Title>
                                <Card.Text>
                                    Search for new recipes and create your own, chat to your friends and other members of
                                    the site, update your user details and have fun creating your own personalised
                                    Cook-Book!
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://murmuring-reaches-65423.herokuapp.com/"
                                    rel="noreferrer">See Application</Button>
                                <Button variant="light" target="_blank" href="https://github.com/chrisjmckeown/Spin-that-Meal"
                                    rel="noreferrer">Github Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="smallCard">
                            <Card.Img variant="top" src="./photos/Scooby-Shack.gif" alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Scooby Shack</Card.Title>
                                <Card.Text>A restaurant app that lets users input the names of
                                burgers they'd like to eat or have devoured!
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://scooby-shack.herokuapp.com/" rel="noreferrer">See
                                Application</Button>
                                <Card.Link target="_blank" href="https://github.com/arob0017/Burger" rel="noreferrer">Github
                                Repo</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="smallCard">
                            <Card.Img variant="top" src="./photos/Code-Quiz.gif" alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Code Quiz</Card.Title>
                                <Card.Text>A quiz about javascript using mainly javascript. Includes a countdown
                                and keeps track of score history.
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://arob0017.github.io/Code_Quiz/" rel="noreferrer">See
                                Application</Button>
                                <Card.Link target="_blank" href="https://github.com/arob0017/Code_Quiz" rel="noreferrer">Github Repo</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="smallCard">
                            <Card.Img variant="top" src="./photos/Note-Taker.gif" alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>Successfully create, delete and save your notes and lists in a place on
                                your browser no longer needing to worry about losing pieces of scrap papers in your bag.
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://notetaker133.herokuapp.com/" rel="noreferrer">See
                                Application</Button>
                                <Card.Link target="_blank" href="https://github.com/arob0017/Express_Notetaker" rel="noreferrer">Github Repo</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="smallCard">
                            <Card.Img variant="top" src="./photos/Weather-Dashboard.gif" alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Weather Dashboard</Card.Title>
                                <Card.Text>This is an application for Travelers that want to travel Australia! See
                                any Australian city's forecast for the current day and following week!
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://arob0017.github.io/Weather_Dashboard/"
                                    rel="noreferrer">See Application</Button>
                                <Card.Link target="_blank" href="https://github.com/arob0017/Weather_Dashboard" rel="noreferrer">Github Repo</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section id="performance" className="box">
                <h3>Performance</h3>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <img src="photos/perf-recite.JPG" alt="Performing my recital 2018" />
                            </Col>
                            <Col>
                                <img src="photos/jam.JPG" alt="jam" />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <img src="photos/perf-synths.JPG" alt="Prato performance with synths" />
                            </Col>
                            <Col>
                                <img src="photos/piano.jpg" alt="piano" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="center">
                        <img src="photos/musicme2.jpeg" alt="photoshoot img" />
                    </Col>
                </Row>
            </section>

            <section id="teaching" className="box">
                <h3>Teaching</h3>
                <Row>
                    <Col>
                        <img src="photos/books.jpg" alt="books" />
                    </Col>
                    <Col>
                        <img src="photos/books.jpg" alt="books" />
                    </Col>
                    <Col>
                        <img src="photos/books.jpg" alt="books" />
                    </Col>
                    <Col>
                        <img src="photos/books.jpg" alt="books" />
                    </Col>
                </Row>
            </section>

            <section id="photography" className="box">
                <h3>Photography</h3>
                <Row>
                    <Col>
                        <img src="photos/prato-sunset1.jpeg" alt="Prato, Italy Sunset" />
                    </Col>
                    <Col>
                        <img src="photos/lake.jpg" alt="Prato, Italy Lake" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="photos/lamp-post.jpeg" alt="Slazburg lamp-post" />
                    </Col>
                    <Col>
                        <img src="photos/prato-sunset2.jpeg" alt="Prato, Tree Sunset" />
                    </Col>
                </Row>
            </section>


        </main>
    )
}

export default Portfolio; 