import React, { Component } from 'react';

export class StyleguideSection extends Component {
    render() {
        const { children, title } = this.props;

        return (
            <div className="styleguide-section">
                <h1>{title}</h1>
                { children }
            </div>
        );
    }
}

export default StyleguideSection;
