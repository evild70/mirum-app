import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchLocationsGrid } from './thunks';
import moment from 'moment-timezone';

import LocationsGridBox from './LocationsGridBox';

import bkgdImg from './rolloverImg.jpg';
import contentImg from './contentImg.jpg';

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
        this.handleMouseOverBox = this.handleMouseOverBox.bind(this);
    }

    componentDidMount() {
        const { fetchLocationsGrid  } = this.props;
        fetchLocationsGrid();

        this.getCurrentTime();
        // getCurrentTime every 10 seconds
        const intervalID = setInterval(this.getCurrentTime, 10000)

        this.setState({
            intervalID
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    getCurrentTime() {
        // get the current time from moment-timezone.js
        const time = moment();

        this.setState({
            time
        });
    }

    handleMouseOverBox(index) {
        // console.log(this.props.locations[index]);
    }

    // foo = (location) => {
    //     console.log(location)
    // }
    //  foo={(location, ref) => foo(location, ref)}

    renderGrid(box, index) {
        return (
            <LocationsGridBox
                key={index}
                index={index}
                city={box.name}
                tz={box.timezone}
                time={this.state.time}
                handleMouseOverBox={this.handleMouseOverBox}
            />
        )
    }

    render() {
        const { headline, locations } = this.props;

        const bkgd = {
            backgroundImage: `url(${bkgdImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }

        return (
            <div className="locations-grid">
                <div className="locations-grid__container">
                    <h1>{headline}</h1>

                    <div className="locations-grid__grid" style={bkgd}>
                        { locations.map(this.renderGrid) }
                        <div className="locations-grid__choice">
                            <div className="choice-container">
                                <div className="choice-content">
                                    <h3 className="continent">North America</h3>
                                    <h2 className="city-name">Minneapolis, MN</h2>
                                    <ul className="office-stats">
                                        <li><span className="temp">72&deg;</span>|<span className="time">4:03 PM</span></li>
                                        <li><span className="employees">62 Employees</span></li>
                                    </ul>

                                    <Link to="/" className="meet-link">Meet Mirum Minneapolis</Link>
                                </div>
                                <div className="choice-image">
                                    <img src={contentImg} alt=""/>
                                </div>
                            </div>
                        </div>
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



