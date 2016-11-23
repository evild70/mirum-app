import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class PostCollectionItem extends Component {

    handleClick = () => {

        const { link, path } = this.props;

        if (path && link) {
            const routerPath = `${path}/${link}`
            this.context.router.push(routerPath)
        }


    }

    render() {
        const { label, headline, published } = this.props;

        return (
            <li className="post-item" onClick={this.handleClick}>
                <div className="post-item__label">{label}</div>
                <h3 className="post-item__headline">
                    {headline}
                </h3>
                <span className="post-item__time">{moment.unix(published).fromNow()}</span>
            </li>

        )
    }
}

PostCollectionItem.propTypes = {
    image: PropTypes.string,
    label: PropTypes.string,
    published: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    path: PropTypes.string
};

PostCollectionItem.contextTypes = {
    router: React.PropTypes.object
}

export default PostCollectionItem;
