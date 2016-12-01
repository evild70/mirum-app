import React, { Component, PropTypes } from 'react';

import { getTimeZone } from '../../helpers/timezone.js';

export class LocationsGridBox extends Component {
    static propTypes = {
        city: PropTypes.string,
        tz: PropTypes.string,
        handleMouseOverBox: PropTypes.func
    }

    render() {
        const { index, city, tz, time } = this.props;

        return (
            <div className="locations-grid__box" onMouseOver={(e) => this.props.handleMouseOverBox(index)}>
                <div className="locations-grid__city">{city}</div>
                <div className="locations-grid__time">{getTimeZone(time,`${tz}`)}</div>
            </div>
        );
    }
}

export default LocationsGridBox;
