import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LatestNewsContainer from '../LatestNews/LatestNewsContainer';
import LocationsGrid from '../LocationsGrid/LocationsGrid';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ExperimentsContainer />
                <LatestNewsContainer location='Minneapolis' />
                <LocationsGrid />
            </div>
        );
    }
}

export default HomePage;
