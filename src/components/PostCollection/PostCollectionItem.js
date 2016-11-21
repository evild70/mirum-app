import React, { Component } from 'react';
import moment from 'moment';

export class PostCollectionItem extends Component {

    handleClick = () => {
        const { post, path } = this.props;
        const routerPath = `${path}/${post.link}`
        this.context.router.push(routerPath)
    }

    render() {
        const { post } = this.props;

        return (
            <li className="post-collection-item" onClick={this.handleClick}>
                <div className="post-collection-item__type">{post.type}</div>
                <h3 className="post-collection-item__headline">
                    {post.title}
                </h3>
                <span className="post-collection-item__time">{moment.unix(post.published).fromNow()}</span>
            </li>
        )
    }
}

PostCollectionItem.contextTypes = {
    router: React.PropTypes.object
}

export default PostCollectionItem;
