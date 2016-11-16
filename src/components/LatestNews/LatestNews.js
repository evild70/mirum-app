import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export class LatestNews extends Component {
    constructor() {
        super();

        this.state = {
            stories: {}
        }

        this.renderStories = this.renderStories.bind(this);
    }

    componentDidMount() {
        // get latest stories from CMS
        const testStories = {
            story1: {
                type: "Mention",
                headlineText: "Med.ia Post: Mazda connects car designs with website",
                headlineLink: "mazda-connects-car-designs-with-website",
                time: "20161001"
            },

            story2: {
                type: "Event",
                headlineText: "Analytics trends from UN Summit 2016",
                headlineLink: "analytics-trends-from-un-summit-2016",
                time: "20161002"
            },

            story3: {
                type: "Award",
                headlineText: "Lunchbox fills up with 4 Effies",
                headlineLink: "lunchbox-fills-up-with-4-effies",
                time: "20161020"
            }
        }

        this.setState({
            stories: testStories
        });
    }

    renderStories(key) {
        const stories = this.state.stories;
        const story = stories[key];

        return (
            <li className="story-card" key={key}>
                <div className="story-type">{story.type}</div>
                <h3 className="story-headline">
                    <Link to={"/news/" + story.headlineLink}>{story.headlineText}</Link>
                </h3>
                <span className="story-time">{moment(story.time, "YYYYMMDD").fromNow()}</span>
            </li>
        )
    }

    render() {
        const stories = Object.keys(this.state.stories);

        return (
            <div className="latest-news">
                <div className="headline-container">
                    <h1 className="latest-news-headline">Sometimes what we make is headlines</h1>
                    <div className="view-all-link">
                        <Link to="/news">View All News</Link>
                    </div>
                </div>

                <div className="latest-stories">
                    <ul>
                        {stories.map(this.renderStories)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default LatestNews;
