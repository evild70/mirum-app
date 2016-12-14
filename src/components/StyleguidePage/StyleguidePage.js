import React, { Component } from 'react';
// import Data from '../../helpers/styleguide/sample-data.json'
import StyleguideSection from './StyleguideSection';
import Colors from './Colors';
import Typography from './Typography';
import Buttons from './Buttons';
import HeroBanner from '../HeroBanner/HeroBanner';

// import sgjson from './styleguide-layout.json';

import '../../styles/styleguide.css'

export class StyleguidePage extends Component {

    render() {
        return (
            <div className="styleguide-page">
                <div className="sg-nav">
                    Style Guide Nav
                    <div className="sg-nav-tab">

                    </div>
                </div>

                <div className="sg-content">
                    <h1>Mirumagency.com Styleguide</h1>

                    <StyleguideSection title="01. Color">
                        <Colors />
                    </StyleguideSection>

                    <StyleguideSection title="02. Typography">
                        <Typography />
                    </StyleguideSection>

                    <StyleguideSection title="03. UI Elements">
                        <Buttons />
                    </StyleguideSection>

                    <StyleguideSection title="04. Components">
                        <HeroBanner />
                    </StyleguideSection>
                </div>

            </div>
        );
    }
}

export default StyleguidePage;
