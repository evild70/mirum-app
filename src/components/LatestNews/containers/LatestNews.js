import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchLatestGlobalNews, fetchLatestNewsForLocation } from '../thunks';
import PostCollection from '../../PostCollection';

export class LatestNews extends Component {

    static propTypes = {
        news: PropTypes.object,
        location: PropTypes.string
    }

    componentWillMount() {
        const { fetchLatestGlobalNews, fetchLatestNewsForLocation, location } = this.props;
        if (location) {
            fetchLatestNewsForLocation(location)
        } else {
            fetchLatestGlobalNews()
        }
    }

    render() {
        const { news, location } = this.props;

        return (
            <div className="collection">
                <div className="collection__header">
                    <h1 className="collection__title">
                        { location ?
                            `${location} News` :
                            `Sometimes what we make is headlines`
                        }
                    </h1>
                    <div className="collection__action">
                        <Link to="/news">View All News</Link>
                    </div>
                </div>

                <PostCollection posts={news.items} loaded={news.hasLoaded} path='/news' />

            </div>
        );
    }
}

const mapStateToProps = state => ({
  news: state.latestNews
});

const mapDispatchToProps = {
  fetchLatestGlobalNews,
  fetchLatestNewsForLocation: location => fetchLatestNewsForLocation(location)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNews);
