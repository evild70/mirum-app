import React, { Component } from 'react';
import moment from 'moment';

export class LatestNewsStory extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(story) {
        // console.log(story.headlineLink);
        const path = "/news/" + story.headlineLink
        this.context.router.push(path)
    }

    render() {
        const story = this.props.story;

        return (
            <li className="story-card" onClick={() => this.handleClick(story)}>
                <div className="story-type">{story.type}</div>
                <h3 className="story-headline">
                    {story.headlineText}
                </h3>
                <span className="story-time">{moment(story.time, "YYYYMMDD").fromNow()}</span>
            </li>
        )
    }
}

LatestNewsStory.contextTypes = {
    router: React.PropTypes.object
}

export default LatestNewsStory;
