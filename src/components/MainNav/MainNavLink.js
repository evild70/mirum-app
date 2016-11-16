import React, { Component } from 'react';
import { Link } from 'react-router'

export class MainNavLink extends Component {
    render() {
        return (
            <li><Link {...this.props} activeClassName="active" /></li>
        );
    }
}

export default MainNavLink;
