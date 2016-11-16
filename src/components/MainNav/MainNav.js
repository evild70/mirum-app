import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import MainNavLink from './MainNavLink';

import mainNavBkgd from '../../images/main-nav-bkgd-fpo.jpg';

export class MainNav extends Component {
    render() {
        const bkgd = {
            backgroundImage: 'url(' + mainNavBkgd + ')',
            backgroundPosition: '0 0',
            backgroundRepeat: 'no-repeat'
        }

        return (
            <div className={"main-nav " + (this.props.navIsOpen ? 'is-open' : '')}>
                <div className="main-nav-button" onClick={() => this.props.clickMainNavButton()}>
                    <div className="box">

                    </div>
                </div>

                <div className="main-nav-container" style={bkgd}>
                    <div className="main-logo">
                        <IndexLink to="/">
                            <svg className="" viewBox="0 0 562.5 202.4" preserveAspectRatio="xMinYMin meet">
                                <use xlinkHref="#mirum-logo"></use>
                            </svg>
                        </IndexLink>
                    </div>
                    <ul>
                        <MainNavLink to="/work" onClick={() => this.props.clickMainNavButton()}>Work</MainNavLink>
                        <MainNavLink to="/about" onClick={() => this.props.clickMainNavButton()}>About Us</MainNavLink>
                        <MainNavLink to="/news" onClick={() => this.props.clickMainNavButton()}>News</MainNavLink>
                        <MainNavLink to="/capabilities" onClick={() => this.props.clickMainNavButton()}>Capabilities</MainNavLink>
                        <MainNavLink to="/careers" onClick={() => this.props.clickMainNavButton()}>Careers</MainNavLink>
                        <MainNavLink to="/contact" onClick={() => this.props.clickMainNavButton()}>Contact</MainNavLink>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNav;
