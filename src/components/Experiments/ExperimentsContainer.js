import React, { Component } from 'react';

import Experiment from './Experiment';

export class ExperimentsContainer extends Component {
    render() {
        return (
            <div className="experiments-container">
                <Experiment />
            </div>
        );
    }
}

export default ExperimentsContainer;
