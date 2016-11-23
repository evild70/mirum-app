import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchLatestNews } from './thunks';
import PostCollection from '../PostCollection';

export class LatestNewsCollection extends Component {

    static propTypes = {
        news: PropTypes.object,
        location: PropTypes.string
    }

    componentWillMount() {
        const { fetchLatestNews, location } = this.props;
        fetchLatestNews(location)
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

                <PostCollection
                    items={news.items}
                    headline="title"
                    label="type"
                    link="key"
                    published="published"
                    loaded={news.hasLoaded}
                    path='/news'
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
  news: state.latestNews
});

const mapDispatchToProps = {
  fetchLatestNews: location => fetchLatestNews(location)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestNewsCollection);
