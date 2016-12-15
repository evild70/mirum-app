import React, { Component } from 'react';

export class StyleguideSubSection extends Component {
    render() {
        const { children, name } = this.props;

        return (
            <div>{children}</div>
        );
    }
}

export default StyleguideSubSection;
