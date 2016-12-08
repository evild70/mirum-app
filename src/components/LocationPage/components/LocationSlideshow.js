import React, { Component } from 'react';
import { initSlider, destroySlider } from '../../../helpers/slider';

export class LocationSlideshow extends Component {

    componentDidMount() {
      initSlider()
    }

    componentWillUnmount() {
      destroySlider()
    }

    render() {
      return (
        <div className="module module-slider">
            <div className="slider-container">
              <a href="#" className="close module-slider__close  js-kill-slider">Close<span className="visibly-hidden"> the slider</span></a>
              <div className="slider slider--unset">
                  <div className="slide">
                      <div className="slide-image" style={{backgroundImage: "url('http://imgur.com/eXQaM7P.jpg')"}} />
                  </div>
                  <div className="slide">
                      <div className="slide-image" style={{backgroundImage: "url('http://imgur.com/Fc7KPMu.jpg')"}} />
                  </div>
                  <div className="slide">
                      <div className="slide-image" style={{backgroundImage: "url('http://imgur.com/eEGQQo5.jpg')"}} />
                  </div>
                  <div className="slide">
                      <div className="slide-image" style={{backgroundImage: "url('http://imgur.com/vvTYqyU.jpg')"}} />
                  </div>
                  <div className="slide">
                      <div className="slide-image" style={{backgroundImage: "url('http://imgur.com/dBwokW4.jpg')"}} />
                  </div>
              </div>
            </div>
            <div className="content">
                <div className="content-box">
                  <h1>This is where we work.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <button className="primary-btn">View Gallery</button>
                </div>
            </div>
        </div>
      );
    }
}

export default LocationSlideshow;
