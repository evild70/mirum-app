import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchLatestNews } from '../../firebase/thunks';
// import moment from 'moment';

import LatestNewsStory from './LatestNewsStory';

export class LatestNewsContainer extends Component {

    static propTypes = {
        latestNews: PropTypes.array
    }

    componentWillMount() {
        this.props.fetchLatestNews()
    }

    render() {
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
                        {this.props.latestNews.map(key => <LatestNewsStory key={key.key} story={key} />)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  latestNews: state.data.latestNews
});

const mapDispatchToProps = {
  fetchLatestNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNewsContainer);
