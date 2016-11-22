import React, { PropTypes } from 'react';

const LocationBanner = ({location, bannerImg, children}) => {

    var styles = {
        media: {
            backgroundImage: `url('${bannerImg}')`
        }
    }

    return (
        <section className="hero">
            <div className="hero__content">
                {children}
            </div>
            <div className="hero__media">
                <div className="hero__image" style={styles.media}></div>
            </div>
        </section>
    );

};

LocationBanner.propTypes = {
    location: PropTypes.object,
    bannerImg: PropTypes.string,
    children: PropTypes.node
};

export default LocationBanner;
