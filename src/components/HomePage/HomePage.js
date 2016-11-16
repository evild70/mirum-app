import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LatestNews from '../LatestNews/LatestNews';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ExperimentsContainer />
                <LatestNews />
            </div>
        );
    }
}

export default HomePage;
