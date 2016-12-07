import React, { PropTypes } from 'react';
import ThumbnailCollectionExpandable from '../../ThumbnailCollectionExpandable';

const LocationLeadership = ({items, location}) => {
    return (
        <div className="leadership-section section--padding purple-bg">
            <div className="container-reg">
                <div className="collection collection--light">

                    <div className="collection__header">
                        <h1 className="collection__title">{location} Leadership</h1>
                    </div>

                    <ThumbnailCollectionExpandable
                        items={items}
                        image="image"
                        title="name"
                        label="position"
                        loaded={true}
                    />

                </div>
            </div>
        </div>
    );

};

LocationLeadership.propTypes = {
    location: PropTypes.string,
    items: PropTypes.array
};

export default LocationLeadership;
