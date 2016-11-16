import React, { Component } from 'react';

export class NewsPage extends Component {
    render() {
        return (
            <div>
                <h2 className="component-header">News</h2>
                <p>{this.props.params.storyId}</p>
            </div>
        );
    }
}

export default NewsPage;
