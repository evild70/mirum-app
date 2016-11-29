import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchLocationsGrid } from './thunks';
import moment from 'moment-timezone';

import LocationsGridBox from './LocationsGridBox';



export class LocationsGrid extends Component {

    static propTypes = {
        headline: PropTypes.string,
        locations: PropTypes.array
    }

    constructor() {
        super();

        this.state = {
            time: "",
            intervalID: {}
        }

        this.renderGrid = this.renderGrid.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
    }

    componentDidMount() {
        const { fetchLocationsGrid  } = this.props;
        fetchLocationsGrid();

        this.getCurrentTime();
        const intervalID = setInterval(this.getCurrentTime, 10000)

        this.setState({
            intervalID
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    getCurrentTime() {
        const time = moment();

        this.setState({
            time
        });
    }

    // foo = (location) => {
    //     console.log(location)
    // }
    //  foo={(location, ref) => foo(location, ref)}

    renderGrid(box, index) {
        return (
            <LocationsGridBox
                key={index}
                city={box.name}
                tz={box.timezone}
                time={this.state.time}
            />
        )
    }

    render() {
        const { headline, locations } = this.props;

        return (
            <div className="locations-grid">
                <div className="locations-grid__container">
                    <h1>{headline}</h1>

                    <div className="locations-grid__grid">
                        { locations.map(this.renderGrid) }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    headline: state.locationsGrid.headline,
    locations: state.locationsGrid.locations
});

const mapDispatchToProps = {
    fetchLocationsGrid
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsGrid);

// export default LocationsGrid;


/*
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
<div className="locations-grid__box">
    <div className="locations-grid__city">Minneapolis</div>
    <div className="locations-grid__time">12:07:01 PST</div>
</div>
*/


