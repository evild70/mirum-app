import React, { PropTypes } from 'react';
import MirumLogo from '../../svg/MirumLogo';

const CaseStudyBanner = ({location, bannerImg, children}) => {

    var styles = {
        media: {
            backgroundImage: `url('${bannerImg}')`
        }
    }

    return (
        <section className="hero-wrapper">
            <div className="hero">
                <div className="hero__content">
                    <div className="hero__copy">
                        <div className="hero__logo">
                            <MirumLogo className="logo logo--dark" />
                        </div>
                        <div className="hero__details">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="hero__media">
                    <div className="hero__image" style={styles.media}></div>
                </div>
            </div>
        </section>
    );

};

CaseStudyBanner.propTypes = {
    location: PropTypes.object,
    bannerImg: PropTypes.string,
    children: PropTypes.node
};

export default CaseStudyBanner;
