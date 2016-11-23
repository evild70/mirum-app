import React, { PropTypes } from 'react';

const LocationMap = ({lat, long}) => {
    return (
        <div className="location-map">
            Latitude: {lat}
            Longitude: {long}
        </div>
    );
};

LocationMap.propTypes = {
    lat: PropTypes.string,
    long: PropTypes.string
};

export default LocationMap;
