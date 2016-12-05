import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LocationBanner from '../components/LocationBanner';
import CareersCollection from '../../CareersCollection/CareersCollection';
import LocationLeadership from '../components/LocationLeadership';
import WorkCollection from '../../WorkCollection/WorkCollection';
import LocationDetails from '../components/LocationDetails';
import LocationSlideshow from '../components/LocationSlideshow';
import { fetchLocation } from '../thunks';
import { capitalizeFirstLetter } from '../../../helpers/capitalize';
import LatestNewsCollection from '../../LatestNews/LatestNewsCollection';

export class LocationPage extends Component {

    static propTypes = {
        location: PropTypes.object
    }

    componentWillMount() {
        this.locationId = this.props.params.locationId;
        this.locationPretty = capitalizeFirstLetter(this.locationId);
        this.props.fetchLocation(this.locationId);
    }

    render() {
        const { location } = this.props;
        const { details } = location;
        const { meta } = details;

        return (
            <div>
                <LocationBanner bannerImg={details.banner_image}>
                    <LocationDetails meta={meta} name={this.locationPretty} />
                </LocationBanner>
                <LocationSlideshow />
                <WorkCollection location={this.locationPretty} />
                <CareersCollection location={this.locationPretty} />
                <LocationLeadership items={details.leadership} location={this.locationPretty} />
                <LatestNewsCollection location={this.locationPretty} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = {
  fetchLocation: location => fetchLocation(location)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPage);
