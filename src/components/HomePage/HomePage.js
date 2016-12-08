import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LocationsGrid from '../LocationsGrid/LocationsGrid';
import LatestNewsCollection from '../LatestNews/LatestNewsCollection';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ExperimentsContainer />
                <LatestNewsCollection />
                <div className="section">
                    <div className="container-lrg">
                        <LocationsGrid />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
