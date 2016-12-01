import React, { Component, PropTypes } from 'react';
import PostCollectionItem from './PostCollectionItem';

class PostCollection extends Component {

    static propTypes = {
        items: PropTypes.array,
        headline: PropTypes.string,
        label: PropTypes.string,
        published: PropTypes.string,
        link: PropTypes.string,
        loaded: PropTypes.bool,
        path: PropTypes.string
    }

    render() {

        const { items, headline, label, published, link, loaded, path } = this.props;

        return (
            <div className="collection-list collection-list--posts">
                { loaded ?
                    <ul>
                        {items.map( (item, index) =>
                            <PostCollectionItem
                                key={index}
                                headline={ item[headline] }
                                label={ item[label] }
                                published={ item[published] }
                                link={ item[link] }
                                path={ path }
                            />
                        )}
                    </ul> :
                    <p>Loading</p>
                }
            </div>
        );
    }
}

export default PostCollection;
