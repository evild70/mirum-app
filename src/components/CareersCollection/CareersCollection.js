import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCareers } from './thunks';
import PostCollection from '../PostCollection';

export class CareersCollection extends Component {

    static propTypes = {
        careers: PropTypes.object,
        location: PropTypes.string
    }

    componentWillMount() {
        const { fetchCareers, location } = this.props;
        fetchCareers(location);
    }

    render() {
        const { careers } = this.props;

        return (
            <div className="collection">
                <div className="collection__header">
                    <h1 className="collection__title">Work with us</h1>
                    <div className="collection__action">
                        <Link to="/careers">View All Careers</Link>
                    </div>
                </div>

                <PostCollection
                    items={careers.items}
                    headline="excerpt"
                    label="position"
                    link="key"
                    published="published"
                    loaded={careers.hasLoaded}
                    path='/careers'
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
  careers: state.careers
});

const mapDispatchToProps = {
  fetchCareers: location => fetchCareers(location)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareersCollection);
