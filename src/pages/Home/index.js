import React from "react";
import "./style.css";


function Home() {
    return (
        <div class="container">
            <div class="jumbotron" class="home">
                {/* <!--Row 1--> */}
                <div class="row">
                    <h2 class="display-4" class="col-sm-12" class="aboutme">About Me</h2>
                </div>

                {/* <!--Row 2--> */}
                <div class="row">
                    <div class="col-md-5">
                        <img class="col-md-12" src="photos/About-me-pic.jpg" alt="profile pic" />
                        <img class="col-md-12" src="photos/music-me.jpeg" alt="Amelia Roberts pic" />
                    </div>
                    <div class="col-md-7">
                        <h3>Amelia Roberts</h3>
                        <h5>Musician – Teacher – Web Developer</h5>
                        <p>
                            Up and coming Melbourne pianist, Amelia Roberts, invites you to browse this website and
                            check out her social media links at the bottom of the page.
                        </p>
                        <p>
                            Amelia Roberts, a late bloomer for the love of jazz begun her journey playing classical
                            music. As Roberts started to write originals, her love for jazz
                            developed and consumed her body and soul ever since. Amelia is currently studying a
                            Bachelor of Music at Monash University which has led her to many exciting
                            and wonderful opportunities which have developed her music career.
                        </p>
                        <p>
                            Amelia aims to promote and celebrate the brilliant creativity of women in the music
                            industry. With extreme passion and exploding excitement
                            Amelia brings an utterly captivating stage presence to each show. It brings Amelia great
                            joy to share her heart and soul with her loyal followers
                            and audiences and invites you all to experience the intense emotion with her during her
                            performances.
                        </p>
                        <p>
                            Roberts in 2019 performed as a member of the Monash Jazz Orchestra (MoJO) as their
                            pianist playing several times at venues such as ‘The Fyrefly’ in StKilda
                            and the on-campus jazz club, ’Script’.
                        </p>
                        <p>
                            Following this, Roberts was one of 15 selected to travel to Prato, Italy to perform
                            Italian jazz with an ensemble. She also recorded an album with this
                            ensemble at their local recording studio for Monash University’s database.
                        </p>
                        <p>
                            Amelia has been teaching piano to students of all ages for the past three years. Mainly
                            teaching primary school students,
                            Roberts has been able to develop a lesson structure for individual lessons as well as
                            group lessons. Combining both classical and jazz into her class,
                            opens the imaginative and creative minds of her students. Not only does the student
                            learn how to play, but also learns to create their own musical sound.
                        </p>
                        <p>
                            2020 has big plans for Amelia Roberts. Currently undertaking an online coding course,
                            Amelia prepares to share her music knowledge through her own online
                            teaching site in which she will develop herself. It is clear that COVID-19 is not
                            stopping Amelia from achieving her goals.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home; 