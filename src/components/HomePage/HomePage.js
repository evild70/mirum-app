import React, { Component } from 'react';

import ExperimentsContainer from '../Experiments/ExperimentsContainer';
import LatestNews from '../LatestNews/LatestNews';
import Footer from '../Footer/Footer';

export class Home extends Component {
    render() {
        return (
            <div>
                <ExperimentsContainer />
                <LatestNews />
                <Footer />
            </div>
        );
    }
}

export default Home;
