import React from "react";
import { Button, Card, Col, Image, Nav, Row } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";


// Gif
import SweetSpot from "../../assets/gifs/Holiday-Sweetspot.gif"
import SpinMeal from "../../assets/gifs/Spin-That-Meal.gif"
import ScoobyShack from "../../assets/gifs/Scooby-Shack.gif"
import CodeQuiz from "../../assets/gifs/Code-Quiz.gif"
import Weather from "../../assets/gifs/Weather-Dashboard.gif"
import NoteTaker from "../../assets/gifs/Note-Taker.gif"

// Images
import books from "../../assets/images/books.jpg"
import perfRecite from "../../assets/images/perf-recite.JPG"
import jam from "../../assets/images/jam.JPG"
import perfSynths from "../../assets/images/perf-synths.JPG"
import pratoSet from "../../assets/images/prato-sunset1.jpeg"
import lake from "../../assets/images/lake.jpg"
import lampost from "../../assets/images/lamp-post.jpeg"
import pratoSetTwo from "../../assets/images/prato-sunset2.jpeg"

function Portfolio() {
    return (
        <main>

            <section className="box">
                <h2>My Portfolio</h2>
                <Nav className="justify-content-end portfolionav">
                    <Nav.Item>
                        <Link className="portfolioNavLink" to="#webdevelopment">Webdevelopment</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="portfolioNavLink" to="#performance">Performance</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="portfolioNavLink" to="#teaching">Teaching</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="portfolioNavLink" to="#photography">Photography</Link>
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
                        <Card className="text-center largeCard">
                            <Card.Img variant="top" className="sweetSpot" src={SweetSpot}
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
                        <Card className="text-center largeCard">
                            <Card.Img variant="top" className="spinMeal" src={SpinMeal}
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
                        <Card className="text-center smallCard">
                            <Card.Img variant="top" src={ScoobyShack} alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Scooby Shack</Card.Title>
                                <Card.Text>A restaurant app that lets users input the names of
                                burgers they'd like to eat or have devoured!
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://scooby-shack.herokuapp.com/" rel="noreferrer">See
                                Application</Button>
                                <Button variant="light" target="_blank" href="https://github.com/arob0017/Burger" rel="noreferrer">Github
                                Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center smallCard">
                            <Card.Img variant="top" src={CodeQuiz} alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Code Quiz</Card.Title>
                                <Card.Text>A quiz about javascript using mainly javascript. Includes a countdown
                                and keeps track of score history.
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://arob0017.github.io/Code_Quiz/" rel="noreferrer">See
                                Application</Button>
                                <Button variant="light" target="_blank" href="https://github.com/arob0017/Code_Quiz" rel="noreferrer">Github Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center smallCard">
                            <Card.Img variant="top" src={NoteTaker} alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>Successfully create, delete and save your notes and lists in a place on
                                your browser no longer needing to worry about losing pieces of scrap papers in your bag.
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://notetaker133.herokuapp.com/" rel="noreferrer">See
                                Application</Button>
                                <Button variant="light" target="_blank" href="https://github.com/arob0017/Express_Notetaker" rel="noreferrer">Github Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center smallCard">
                            <Card.Img variant="top" src={Weather} alt="Screenshot of Application" />
                            <Card.Body>
                                <Card.Title>Weather Dashboard</Card.Title>
                                <Card.Text>This is an application for Travelers that want to travel Australia! See
                                any Australian city's forecast for the current day and following week!
                                </Card.Text>
                                <Button variant="light" target="_blank" href="https://arob0017.github.io/Weather_Dashboard/"
                                    rel="noreferrer">See Application</Button>
                                <Button variant="light" target="_blank" href="https://github.com/arob0017/Weather_Dashboard" rel="noreferrer">Github Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section id="performance" className="box">
                <h3>Performance</h3>
                <Row>

                    <Col>
                        <Image src={perfRecite} alt="Performing my recital 2018" fluid />
                    </Col>
                    <Col>
                        <Image src={jam} alt="jam" fluid />
                    </Col>

                    <Col>
                        <Image src={perfSynths} alt="Prato performance with synths" fluid />
                    </Col>
                </Row>
            </section>

            <section id="teaching" className="box">
                <h3>Teaching</h3>
                <Row>
                    <Col>
                        <Image src={books} alt="books" fluid />
                    </Col>
                    <Col>
                        <Image src={books} alt="books" fluid />
                    </Col>
                    <Col>
                        <Image src={books} alt="books" fluid />
                    </Col>
                    <Col>
                        <Image src={books} alt="books" fluid />
                    </Col>
                </Row>
            </section>

            <section id="photography" className="box">
                <h3>Photography</h3>
                <Row>
                    <Col>
                        <Image src={pratoSet} alt="Prato, Italy Sunset" fluid />
                    </Col>
                    <Col>
                        <Image src={lake} alt="Prato, Italy Lake" fluid />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={lampost} alt="Slazburg lamp-post" fluid />
                    </Col>
                    <Col>
                        <Image src={pratoSetTwo} alt="Prato, Tree Sunset" fluid />
                    </Col>
                </Row>
            </section>


        </main>
    )
}

export default Portfolio; 