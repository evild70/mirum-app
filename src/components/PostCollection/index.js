import React, { Component, PropTypes } from 'react';
import PostCollectionItem from './PostCollectionItem';

export class PostCollection extends Component {

    static propTypes = {
        posts: PropTypes.array,
        loaded: PropTypes.bool,
        path: PropTypes.string
    }

    render() {
        const { posts, loaded, path } = this.props;
        return (
            <div className="post-collection">
                { loaded ?
                    <ul>
                        {posts.map(post => <PostCollectionItem key={post.key} post={post} path={path} />)}
                    </ul> :
                    <p>Loading</p>
                }
            </div>
        );
    }
}

export default PostCollection;
