import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LocationBanner from '../components/LocationBanner';
import CareersCollection from '../../CareersCollection/CareersCollection';
import LocationLeadership from '../components/LocationLeadership';
import WorkCollection from '../../WorkCollection/WorkCollection';
import LocationDetails from '../components/LocationDetails';
import { fetchLocation } from '../thunks';
import LatestNewsCollection from '../../LatestNews/LatestNewsCollection';

export class LocationPage extends Component {

    static propTypes = {
        location: PropTypes.object
    }

    componentWillMount() {
        this.location = this.props.params.locationId;
        this.props.fetchLocation(this.location);
    }

    render() {
        const { location } = this.props;
        const { details } = location;
        const { meta } = details;

        return (
            <div>
                <LocationBanner bannerImg={details.banner_image}>
                    <LocationDetails meta={meta} name={this.location} />
                </LocationBanner>
                <WorkCollection location={this.location} />
                <CareersCollection location={this.location} />
                <LatestNewsCollection location={this.location} />
                <LocationLeadership items={details.leadership} location={this.location} />
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
