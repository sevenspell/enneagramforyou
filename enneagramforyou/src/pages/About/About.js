import React from "react";
import { Link } from 'react-router-dom';
// import "./About.css";
import { useHistory } from 'react-router';

function About() {

    const history = useHistory();


    return (
        <div>

            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="aboutheader">About Enneagram</h1>
                        </div>
                    </div>
                </div>
            </header>


            <section className="py-5">
                <div className="container">
                    <h2 className="font-weight-light">What is the Enneagram?</h2>
                    <p>
                       The word 'Enneagram' comes from the Greek words ennea (nine) and gram (what is written or drawn). It refers to the nine different Enneagram styles, identified as number 1-9. Each number represents a worldview and archetype that resonates with our core motivations. This impacts personality as well as thinking, feeling and actions. Understanding our Enneagram type and how it colors our perceptions can help us to broaden our perspective and approach situations more effectively. 
                </p>
                <p>
                       The Enneagram helps us to do the hardest part of our consciousness work. It helps us realise, own and accept our strengths and weaknesses. Oft times, the same outward behavior by two different individuals may be driven by different motivations - working with Enneagram empowers us to take responsibility for our own behavior and growth, from a greater understanding of why we act and react the way we do.
                </p>
                <p>
                       The Enneagram is a useful guide on our journey towards self-development, relationship building, conflict resolution and the improvement of team dynamics. It is, however, not aimed at "boxing", limiting or categorising any person. As an individual, we are more complex, unique, and distinct than what our Enneagram style reflects.
                </p>


                        <br />
                        <small>
                            Information was sourced from <a href="https://www.integrative9.com/" target="blank" rel="noopener noreferrer">Integrative9 Enneagram Solutions</a>.</small>
                </div>
            </section>


           
        </div>
    );
}

export default About;
