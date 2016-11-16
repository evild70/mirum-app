import React, { Component } from 'react';

import fpo from './experiments-fpo.jpg';

export class Experiment extends Component {
    render() {
        return (
            <div>
                <img src={fpo} alt=""/>
            </div>
        );
    }
}

export default Experiment;
