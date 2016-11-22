import React, { PropTypes } from 'react';
import LocationMap from './LocationMap';

const LocationDetails = ({name, meta}) => {

    return (
        <div className="location-details">
            <LocationMap lat={meta.latitude} long={meta.longitude} />
            <h1>{name}</h1>
            <a>
                {meta.address},<br/>
                {meta.city}, {meta.state}, {meta.zip}
            </a>
            <p>{meta.phone}</p>
            <a>{meta.email}</a>
        </div>
    );

};

LocationDetails.propTypes = {
    name: PropTypes.string,
    meta: PropTypes.object
};

export default LocationDetails;
