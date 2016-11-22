import React, { Component } from 'react';
import moment from 'moment';

export class LatestNewsStory extends Component {

    handleClick = () => {
        const { link } = this.props.story;
        const path = `/news/${link}`;
        this.context.router.push(path);
    }

    render() {
        const story = this.props.story;

        return (
            <li className="story-card" onClick={this.handleClick}>
                <div className="story-type">{story.type}</div>
                <h3 className="story-headline">
                    {story.title}
                </h3>
                <span className="story-time">{moment.unix(story.published).fromNow()}</span>
            </li>
        )
    }
}

LatestNewsStory.contextTypes = {
    router: React.PropTypes.object
}

export default LatestNewsStory;
