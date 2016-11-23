import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LatestNewsCollection from '../LatestNews/LatestNewsCollection';

export class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <ExperimentsContainer />
                <LatestNewsCollection />
            </div>
        );
    }
}

export default HomePage;
