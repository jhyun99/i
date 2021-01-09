import introimg from '../images/introduction.jpg';
import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Intro extends Component {
     render() {
        return (
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <FadeIn transitionDuration="1000"><img className="introimg" src={introimg} alt="Intro"></img></FadeIn>
                    <div style={{ textAlign: 'center', paddingTop: '3%'}}className="textContainer">
                        <FadeIn delay="900" transitionDuration="1200">
                        <div className="introText">
                            <p>Hi!</p>
                        </div>
                        </FadeIn>
                        <FadeIn delay="1600" transitionDuration="1200">
                        <div className="introText">
                            <p>I'm Josh.</p>
                        </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;