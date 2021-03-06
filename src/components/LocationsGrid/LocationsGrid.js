import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchLocationsGrid } from './thunks';
import moment from 'moment-timezone';
import { throttle } from 'lodash';
import LocationsGridItem from './LocationsGridItem';
import { toggleExpandable, initExpandable, closeExpandable } from '../../helpers/expander';
import { getTimeZone } from '../../helpers/timezone.js';
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
            intervalID: {},
            hasExpandedItem: false,
            drawerOpen: false,
            expandedItemData: {},
            expandedContainerRef: {},
            expandedItemRef: {},
            gridBg: ''
        }

        this.mouseOverGridItem = throttle(this.mouseOverGridItem, 300);
        this.expander = { refs: {} }
        this.getCurrentTime = this.getCurrentTime.bind(this);
    }

    componentDidMount() {
        const { fetchLocationsGrid  } = this.props;
        fetchLocationsGrid();

        initExpandable(this.expander.refs.wrapper);

        this.getCurrentTime();
        // getCurrentTime every 10 seconds
        const intervalID = setInterval(this.getCurrentTime, 10000)

        this.setState({ intervalID });
    }

    expand = item => ref => {
        this.setState({
            hasExpandedItem: true,
            drawerOpen: true,
            expandedItemData: item,
            gridBg: item.gridRolloverImg
        })
        this.expander.refs.item = ref;
        toggleExpandable({
            wrapper: this.expander.refs.wrapper,
            item: this.expander.refs.item,
            drawer: this.expander.refs.drawer
        })
    }

    close = ref => {
        this.setState({
            gridBg: '',
            drawerOpen: false
        })
        closeExpandable({
            wrapper: this.expander.refs.wrapper,
            item: this.expander.refs.item,
            drawer: this.expander.refs.drawer
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

    mouseOverGridItem(img) {
        if (!this.state.drawerOpen) {
            this.setState({ gridBg: img })
        }
    }

    render() {
        const { headline, locations } = this.props;
        const { hasExpandedItem, expandedItemData, gridBg } = this.state;

        return (
            <div className="locations-grid section section--padding grey-bg">
                <div className="container-reg">
                    <div className="locations-grid__container">
                        <h1>{headline}</h1>
                        <div className="locations-grid__grid expandable-wrapper" ref={ ref => {this.expander.refs.wrapper = ref} }>

                            <div className="locations-grid__grid-bg" style={{backgroundImage: `url('${gridBg}')`}}/>
                            <ul>
                                {locations.map( (item, index) =>
                                    <LocationsGridItem
                                        key={index}
                                        index={index}
                                        city={item.name}
                                        tz={item.timezone}
                                        time={this.state.time}
                                        mouseOver={() => this.mouseOverGridItem(item.gridRolloverImg)}
                                        expand={ this.expand(item) }
                                    />
                                )}
                            </ul>

                            <div className="expandable-container expandable-container--locationsgrid" ref={ ref => {this.expander.refs.drawer = ref} }>
                                { hasExpandedItem ?
                                    <div className="expandable-container__inner">
                                        <div className="locations-grid__choice">
                                            <div className="choice-container">
                                                <div className="choice-content">
                                                    <h3 className="continent">{expandedItemData.continent}</h3>
                                                    <h2 className="city-name">{expandedItemData.fullCityName}</h2>
                                                    <ul className="office-stats">
                                                        <li>
                                                            <span className="temp">72&deg;</span>|<span className="time">{getTimeZone(this.state.time,`${expandedItemData.timezone}`)}</span>
                                                        </li>
                                                        <li>
                                                            <span className="employees">{expandedItemData.employees} Employees</span>
                                                        </li>
                                                    </ul>

                                                    <Link to="/" className="meet-link">Meet Mirum Minneapolis</Link>
                                                </div>
                                                <div className="choice-image">
                                                    <img src={contentImg} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expandable-container__close" tabIndex="0" onClick={this.close} ref={ ref => {this.expander.refs.close = ref} }>Close</div>
                                    </div> :
                                    null
                                }
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
