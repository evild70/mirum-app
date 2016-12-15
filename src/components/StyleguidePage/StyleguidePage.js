import React, { Component } from 'react';
// import Data from '../../helpers/styleguide/sample-data.json'
import StyleguideSection from './StyleguideSection';
// import StyleguideSubSection from './StyleguideSubSection';
import Colors from './Colors';
import Typography from './Typography';
import Buttons from './Buttons';
import HeroBanner from '../HeroBanner/HeroBanner';

// import sgjson from './styleguide-layout.json';
import MirumLogo from '../svg/MirumLogo';
import '../../styles/styleguide.css'

export class StyleguidePage extends Component {

    render() {
        return (
            <div className="styleguide-page">
                <div className="sg-nav">
                    <MirumLogo className="fill-purple" />
                    <ul className="nav">
                        <li className="nav__item"><a href="#introduction">Introduction</a></li>
                        <li className="nav__item">Colors</li>
                        <li className="nav__item"><a href="#typography">Typography</a></li>
                        <li className="nav__item reveal">
                            UI Elements
                            <ul className="subnav">
                                <li><a href="#buttons">Buttons</a></li>
                                <li>Tags</li>
                            </ul>
                        </li>
                        <li className="nav__item reveal">Components</li>
                    </ul>
                    <div className="sg-nav-tab">

                    </div>
                </div>

                <div className="sg-content">
                    <h1>Mirumagency.com Styleguide</h1>

                    <StyleguideSection title="Introduction" name="introduction">
                        <p>This is an introduction to the style guide.</p>
                    </StyleguideSection>

                    <StyleguideSection title="01. Color" name="color">
                        <Colors />
                    </StyleguideSection>

                    <StyleguideSection title="02. Typography" name="typography">
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
