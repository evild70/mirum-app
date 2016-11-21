import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LatestNewsContainer from '../LatestNews/LatestNewsContainer';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ExperimentsContainer />
                <LatestNewsContainer />
            </div>
        );
    }
}

export default HomePage;
