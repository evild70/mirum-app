import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LocationsGrid from '../LocationsGrid/LocationsGrid';
import LatestNewsCollection from '../LatestNews/LatestNewsCollection';

export class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <ExperimentsContainer />
                <LatestNewsCollection />
                <LocationsGrid />
            </div>
        );
    }
}

export default HomePage;
