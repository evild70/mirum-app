import React, { Component } from 'react';
import Slider from 'react-slick';

export class LocationSlideshow extends Component {

    render() {

        const settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src="http://placekitten.com/g/400/200" alt="slideshow"/></div>
                    <div><img src="http://placekitten.com/g/400/200" alt="slideshow"/></div>
                    <div><img src="http://placekitten.com/g/400/200" alt="slideshow"/></div>
                    <div><img src="http://placekitten.com/g/400/200" alt="slideshow"/></div>
                </Slider>
            </div>
        );
    }
}

export default LocationSlideshow;
