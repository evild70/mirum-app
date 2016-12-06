/* eslint-disable */
import React, { Component } from 'react';
import slick from 'slick-carousel';

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
                  <img src="http://www.fillmurray.com/g/1000/700" />
                </div>
                <div className="slide">
                  <img src="http://www.fillmurray.com/1000/700" />
                </div>
                <div className="slide">
                  <img src="http://www.fillmurray.com/g/1000/700" />
                </div>
                <div className="slide">
                  <img src="http://www.fillmurray.com/1000/700" />
                </div>
                <div className="slide">
                  <img src="http://www.fillmurray.com/g/1000/700" />
                </div>
              </div>
            </div>
            <div className="content">
              <h1>This is where we work.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      );
    }
}

export default LocationSlideshow;


function initSlider() {
  $('.slider').each(function() {

    //the slider object
    var _slider = $(this),
        _sliderContainer = _slider.parents('.slider-container'),
        _slideClose = _sliderContainer.find('.js-kill-slider'),
        _slides = _slider.find('.slide');

    //bind to slick events
    _slider.on('init', function(event, slick, direction){

      _slider.find('.slick-slide').on('click', function(){

        var goToIndex = $(this).data('slick-index');
        _slider.slick('slickGoTo', goToIndex);
      });
    });

    _slideClose.on('click', function(event){

      event.preventDefault();
      var timeout;

      if (_slider.slick('slickCurrentSlide') > 0) {
        _slider.slick('slickGoTo', 0);
        timeout = 500;
      }
      else {
        timeout = 50;
      }

      setTimeout(function(){
        _slider.addClass('slider--unset');
        _slider.slick('unslick');
        _slider.parents('.module-slider').removeClass('has-active-slider');

        //quick timeout for dom
        setTimeout(function(){
          _slides.removeClass('slide--transform');
        }, 50);
      }, timeout);
    });

    //animate and setup the slider
    _slider.on('click', function(){

      if (_slider.hasClass('slider--unset')) {

        var slidelength = 4;
        var timeout = 0;

        for (var i = 0; i < slidelength; i++) {
          if (i > 0 && i < 4) {
            $(_slides[i]).addClass('slide--transform');
            timeout += transitionend($(_slides[i]));
          }
        }

        timeout += 50;

        _slider.parents('.module-slider').addClass('has-active-slider');

        setTimeout(function(){
          _slider.removeClass('slider--unset');
          _slider.slick({
            arrows: false,
            autoplay: false,
            infinite: false
          });
        }, timeout);
      }
    });

  //end each
  });
}

function destroySlider() {
  $('.slider').each(function() {
    $(this).slick('unslick')
  });
}

/**
* jQuery.transtionend
* Retrieves the total amount of time, in milliseconds that
* an element will be transitioned
*/
var transitionend = el => {
  // check the main transition duration property
  if (el.css('transition-duration')) {
    return Math.round(parseFloat(el.css('transition-duration')) * 1000);
  }
  else {
    // check the vendor transition duration properties
    if(el.css('-webkit-transtion-duration')) return Math.round(parseFloat(el.css('-webkit-transtion-duration')) * 1000);
    if(el.css('-moz-transtion-duration')) return Math.round(parseFloat(el.css('-moz-transtion-duration')) * 1000);
    if(el.css('-ms-transtion-duration')) return Math.round(parseFloat(el.css('-ms-transtion-duration')) * 1000);
    if(el.css('-o-transtion-duration')) return Math.round(parseFloat(el.css('-ms-transtion-duration')) * 1000);
  }
  // if we're here, then no transition duration was found, return 0
  return 0;

}
