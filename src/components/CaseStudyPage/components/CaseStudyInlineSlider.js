import React, { Component } from 'react';
import { initSlider, destroySlider } from '../../../helpers/slider';

export class CaseStudyInlineSlider extends Component {

    componentDidMount() {
        initSlider(this.sliderRef, 'load')
    }

    componentWillUnmount() {
        destroySlider(this.sliderRef)
    }

    render() {
        return (
            <div className="module module-slider-inline">
                <div className="slider-container">
                    <div className="slider" ref={ ref => { this.sliderRef = ref} }>
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
            </div>
        );
    }
}

export default CaseStudyInlineSlider;
