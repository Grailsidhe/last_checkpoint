import React from "react";
import "./css/About.css";
import "./css/vivify.min.css";

export default function About() {

    return (
        <div className="About-wrapper">
            <div className="About-border">
                <div className="About-photo">
                    <picture>
                        <source media="(max-width: 650px)" alt="Lorianne" srcset="./img/lorianne2.jpg" style={{paddingBottom:'20px'}} />
                        <img src="./img/lorianne.jpg" alt="Lorianne" />
                    </picture>
                </div>
                <div className="About-text">
                    <p>I’m an artist with a background in language studies, whose love for web design led to a career in web development.</p>
                    <p>An unstereotypical vegan who knows astrology, collects tarot cards and loves cats.</p>
                    <p>When I’m not coding, you may find me riding my bike on a sunny day, taking pictures of beautiful things, or 
                    watching StarTrek or a Wes Anderson film on the couch.</p>
                </div>
            </div>
        </div>
    )
};