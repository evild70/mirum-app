import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWork } from './thunks';
import ThumbnailCollection from '../ThumbnailCollection';

export class WorkCollection extends Component {

    static propTypes = {
        work: PropTypes.object,
        location: PropTypes.string
    }

    componentWillMount() {
        const { fetchWork, location } = this.props;
        fetchWork(location);
    }

    render() {
        const { work, location } = this.props;

        return (
            <div className="collection">
                <div className="collection__header">
                    <h1 className="collection__title">{location} Work</h1>
                </div>

                <ThumbnailCollection
                    items={work.items}
                    title="client"
                    image="thumbnail"
                    label="project"
                    link="key"
                    loaded={work.hasLoaded}
                    path='/careers'
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
  work: state.work
});

const mapDispatchToProps = {
  fetchWork: location => fetchWork(location)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkCollection);
