import React, { Component } from 'react';

export class StyleguideSection extends Component {
    render() {
        const { children, title, name } = this.props;

        return (
            <div className="styleguide-section section section--padding">
                { name ? <a name={name}></a> : null }
                <div className="container-reg">
                    <h1 className="section-title">{title}</h1>
                </div>
                { children }
            </div>
        );
    }
}

export default StyleguideSection;
