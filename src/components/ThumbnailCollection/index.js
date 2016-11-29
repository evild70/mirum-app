import React, { Component, PropTypes } from 'react';
import ThumbnailCollectionItem from './ThumbnailCollectionItem';

class ThumbnailCollection extends Component {

    static propTypes = {
        items: PropTypes.array,
        title: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string,
        link: PropTypes.string,
        loaded: PropTypes.bool,
        path: PropTypes.string
    }

    render() {

        const { items, title, image, label, link, loaded, path } = this.props;

        return (
            <div className="collection-list collection-list--thumbnails">
                { loaded ?
                    <ul>
                        {items.map( (item, index) =>
                            <ThumbnailCollectionItem
                                key={index}
                                title={ item[title] }
                                image={ item[image] }
                                label={ item[label] }
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

export default ThumbnailCollection;
