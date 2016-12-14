import React, { Component } from 'react';

export class HeroBanner extends Component {
    render() {
        return (
            <div className="hero-banner hero-banner--purple">
                <div className="hero-banner__bg" style={{backgroundImage: 'url("http://imgur.com/Fc7KPMu.jpg")'}}></div>
                <div className="container-reg">
                    <div className="hero-banner__content-wrapper">
                        <div className="hero-banner__content">
                            <h5>North America</h5>
                            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                            <a href="">northamerica@mirumagency.com</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroBanner;
