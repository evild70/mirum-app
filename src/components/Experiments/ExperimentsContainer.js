import React, { Component } from 'react';

import Experiment from './Experiment';

export class ExperimentsContainer extends Component {
    render() {
        return (
            <div className="experiments-container section">
                <div className="container-lrg">
                    <Experiment />
                </div>
            </div>
        );
    }
}

export default ExperimentsContainer;
