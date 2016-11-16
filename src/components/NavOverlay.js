import React, { Component } from 'react';

export class NavOverlay extends Component {
    done() {
        console.log('done');
    }

    render() {
        return (
            <div
                className={"nav-overlay " + (this.props.navIsOpen ? 'show' : '')}>
            </div>
        );
    }
}

NavOverlay.propTypes = {
    navIsOpen: React.PropTypes.bool.isRequired
}

export default NavOverlay;
