import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LatestNews from '../LatestNews/containers/LatestNews';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ExperimentsContainer />
                <LatestNews location='Minneapolis' />
            </div>
        );
    }
}

export default HomePage;
