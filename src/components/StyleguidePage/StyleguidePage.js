import React, { Component } from 'react';
// import Data from '../../helpers/styleguide/sample-data.json'
import StyleguideSection from './StyleguideSection';
import Colors from './Colors';

// import sgjson from './styleguide-layout.json';

import '../../styles/styleguide.css'

export class StyleguidePage extends Component {

    render() {
        return (
            <div className="styleguide-page">
                <h1>Mirumagency.com Styleguide</h1>

                <StyleguideSection title="01. Color">
                    <Colors />
                </StyleguideSection>

                <StyleguideSection title="02. Typography">
                    <Colors />
                </StyleguideSection>
            </div>
        );
    }
}

export default StyleguidePage;
