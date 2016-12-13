import React, { Component } from 'react';
import { initSlider, destroySlider } from '../../../helpers/slider';

export class CaseStudySlider extends Component {

    componentDidMount() {
      initSlider(this.sliderRef, 'click')
    }

    componentWillUnmount() {
      destroySlider(this.sliderRef)
    }

    render() {
      return (
        <div className="module module-slider">
            <div className="slider-container">
              <a href="#" className="close module-slider__close  js-kill-slider">Close<span className="visibly-hidden"> the slider</span></a>
              <div className="slider slider--unset" ref={ ref => { this.sliderRef = ref} }>
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
                  <h1>Advice thats tailor-made for the dreamer.</h1>
                  <p>A brief description of how Mirum approached the task, elevated value and produced results. This is a summary of Mirum and our approach to work--not a summary of a client and their product. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="primary-btn">View Gallery</button>
                </div>
            </div>
        </div>
      );
    }
}

export default CaseStudySlider;
