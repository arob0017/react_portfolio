import React from "react";
import "./style.css";


function Portfolio() {
    return (
        <main>

            <section class="box">
                <nav class="navbar">
                    <h2>My Portfolio</h2>
                    <ul class="nav justify-content-end" class="portfolionav">
                        <li class="nav-item">
                            <a class="nav-link" href="#webdevelopment">Webdevelopment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#performance">Performance</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#teaching">Teaching</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#photography">Photography</a>
                        </li>
                    </ul>
                </nav>
            </section>




            <section id="webdevelopment" class="box">
                <div class="row">
                    <h3 class="col-sm-4">Webdevelopment</h3>
                </div>
                <div class="row rowOne">
                    <div class="col-md-6">
                        <div class="card largeCard">
                            <img class="sweetSpot" src="./photos/Holiday-Sweetspot.gif" class="card-img-top"
                                alt="Screenshot of Application" />
                            <div class="card-body">
                                <h5 class="card-title">Holiday Sweetspot</h5>
                                <p class="card-text">An application to help travellers decide on where to stay!
                            </p>
                                <a target="_blank" href=" https://skoggy.github.io/project/" rel="noreferrer" class="btn btn-light">See
                                Application</a>
                                <a target="_blank" href="https://github.com/Skoggy/project" rel="noreferrer" class="btn btn-light">Github
                                Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card largeCard">
                            <img class="spinMeal" src="./photos/Spin-That-Meal.gif" class="card-img-top"
                                alt="Screenshot of Application" />
                            <div class="card-body">
                                <h5 class="card-title">Spin That Meal</h5>
                                <p class="card-text">
                                    Search for new recipes and create your own, chat to your friends and other members of
                                    the site, update your user details and have fun creating your own personalised
                                    Cook-Book!
                                </p>
                                <a target="_blank" href="https://murmuring-reaches-65423.herokuapp.com/"
                                    rel="noreferrer" class="btn btn-light">See Application</a>
                                <a target="_blank" href="https://github.com/chrisjmckeown/Spin-that-Meal"
                                    rel="noreferrer" class="btn btn-light">Github Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row rowTwo">
                    <div class="col-md-3">
                        <div class="card smallCard">
                            <img src="./photos/Scooby-Shack.gif" class="card-img-top" alt="Screenshot of Application" />
                            <div class="card-body">
                                <h5 class="card-title">Scooby Shack</h5>
                                <p class="card-text">A restaurant app that lets users input the names of
                                burgers they'd like to eat or have devoured!
                                </p>
                                <a target="_blank" href="https://scooby-shack.herokuapp.com/" rel="noreferrer" class="btn btn-light">See
                                Application</a>
                                <a target="_blank" href="https://github.com/arob0017/Burger" rel="noreferrer">Github
                                Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card smallCard">
                            <img src="./photos/Code-Quiz.gif" class="card-img-top" alt="Screenshot of Application" />
                            <div class="card-body">
                                <h5 class="card-title">Code Quiz</h5>
                                <p class="card-text">A quiz about javascript using mainly javascript. Includes a countdown
                                and keeps track of score history.
                                </p>
                                <a target="_blank" href="https://arob0017.github.io/Code_Quiz/" rel="noreferrer" class="btn btn-light">See
                                Application</a>
                                <a target="_blank" href="https://github.com/arob0017/Code_Quiz" rel="noreferrer">Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card smallCard">
                            <img src="./photos/Note-Taker.gif" class="card-img-top" alt="Screenshot of Application" />
                            <div class="card-body">
                                <h5 class="card-title">Note Taker</h5>
                                <p class="card-text">Successfully create, delete and save your notes and lists in a place on
                                your browser no longer needing to worry about losing pieces of scrap papers in your bag.
                                </p>
                                <a target="_blank" href="https://notetaker133.herokuapp.com/" rel="noreferrer" class="btn btn-light">See
                                Application</a>
                                <a target="_blank" href="https://github.com/arob0017/Express_Notetaker" rel="noreferrer">Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card smallCard">
                            <img src="./photos/Weather-Dashboard.gif" class="card-img-top" alt="Screenshot of Application" />
                            <div class="card-body">
                                <h5 class="card-title">Weather Dashboard</h5>
                                <p class="card-text">This is an application for Travelers that want to travel Australia! See
                                any Australian city's forecast for the current day and following week!

                                </p>
                                <a target="_blank" href="https://arob0017.github.io/Weather_Dashboard/"
                                    rel="noreferrer" class="btn btn-light">See Application</a>
                                <a target="_blank" href="https://github.com/arob0017/Weather_Dashboard" rel="noreferrer">Github Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="performance" class="box">
                <h3>Performance</h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="row" class="col-md-12">
                            <img class="col-md-12" src="photos/perf-recite.JPG" alt="Performing my recital 2018" />
                            <img class="col-md-12" src="photos/jam.JPG" alt="jam" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row">
                            <img class="col-md-12" src="photos/perf-synths.JPG" alt="Prato performance with synths" />
                            <img class="col-md-12" src="photos/piano.jpg" alt="piano" />
                        </div>
                    </div>
                    <div class="col-md-4" class="center">
                        <img class="col-md-12" src="photos/musicme2.jpeg" alt="photoshoot img" />
                    </div>
                </div>
            </section>

            <section id="teaching" class="box">
                <h3>Teaching</h3>
                <div class="row">
                    <img class="col-md-3" src="photos/books.jpg" alt="books" />
                    <img class="col-md-3" src="photos/books.jpg" alt="books" />
                    <img class="col-md-3" src="photos/books.jpg" alt="books" />
                    <img class="col-md-3" src="photos/books.jpg" alt="books" />
                </div>
            </section>

            <section id="photography" class="box">
                <h3>Photography</h3>
                <div class="row">
                    <img class="col-md-6" src="photos/prato-sunset1.jpeg" alt="Prato, Italy Sunset" />
                    <img class="col-md-6" src="photos/lake.jpg" alt="Prato, Italy Lake" />
                </div>
                <div class="row">
                    <img class="col-md-6" src="photos/lamp-post.jpeg" alt="Slazburg lamp-post" />
                    <img class="col-md-6" src="photos/prato-sunset2.jpeg" alt="Prato, Tree Sunset" />
                </div>
            </section>


        </main>
    )
}

export default Portfolio; 