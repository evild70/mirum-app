import React, { PropTypes } from 'react';
import ThumbnailCollection from '../../ThumbnailCollection';

const LocationLeadership = ({items, location}) => {

    return (
        <div className="collection collection--light">
            <div className="collection__header">
                <h1 className="collection__title">{location} Leadership</h1>
            </div>

            <ThumbnailCollection
                items={items}
                image="image"
                title="name"
                label="position"
                loaded={true}
            />
            
        </div>
    );

};

LocationLeadership.propTypes = {
    location: PropTypes.string,
    items: PropTypes.array
};

export default LocationLeadership;
