import React, { Component, PropTypes } from 'react';
import { getTimeZone } from '../../helpers/timezone.js';

export class LocationsGridBox extends Component {
    static propTypes = {
        city: PropTypes.string,
        tz: PropTypes.string,
        mouseOver: PropTypes.func
    }

    onClick = () => {
        this.props.expand(this.itemRef);
    }

    render() {
        const { city, tz, time, mouseOver } = this.props;

        return (
            <li className="locations-grid__box expandable-item" onMouseOver={mouseOver} onClick={this.onClick} ref={ ref => { this.itemRef = ref } }>
              <div className="locations-grid__city">{city}</div>
              <div className="locations-grid__time">{getTimeZone(time,`${tz}`)}</div>
            </li>
        );
    }
}

export default LocationsGridBox;
