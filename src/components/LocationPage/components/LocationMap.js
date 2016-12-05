import React, { PropTypes } from 'react';

const LocationMap = ({lat, long}) => {
    console.log(lat);
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=15&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCxv8BlJt2n9l8f_aQXuiBlV8R-sKB3pR8`;

    var mapCircleStyle = {
     backgroundImage: 'url(' + mapUrl + ')'
   };

    return (
        <div className="location-map">
            { lat && long ?
                <div className="map-circle" style={mapCircleStyle} /> :
                null
            }
        </div>
    );
};

LocationMap.propTypes = {
    lat: PropTypes.string,
    long: PropTypes.string
};

export default LocationMap;
