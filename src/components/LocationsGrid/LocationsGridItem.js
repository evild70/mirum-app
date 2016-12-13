import React, { Component, PropTypes } from 'react';

import { getTimeZone } from '../../helpers/timezone.js';

export class LocationsGridBox extends Component {
    static propTypes = {
        city: PropTypes.string,
        tz: PropTypes.string,
        handleMouseOverBox: PropTypes.func
    }

    onClick = () => {
        this.props.expand(this.itemRef);
    }

    render() {
        const { city, tz, time, gridRolloverImg } = this.props;

        return (
            <li className="locations-grid__box expandable-item" data-cname={gridRolloverImg} onMouseOver={(e) => this.props.handleMouseOverBox(this.props.gridRolloverImg)} onClick={this.onClick} ref={ ref => { this.itemRef = ref } }>
                <div className="locations-grid__city">{city}</div>
                <div className="locations-grid__time">{getTimeZone(time,`${tz}`)}</div>
            </li>
        );
    }
}

export default LocationsGridBox;
