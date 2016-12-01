import React, { Component, PropTypes } from 'react';
import ThumbnailCollectionExpandableItem from './ThumbnailCollectionExpandableItem';
import { setExpandable } from '../../helpers/expander';

class ThumbnailCollectionExpandable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasExpandedItem: false,
            expandedItemData: {},
            expandedContainerRef: {},
            expandedItemRef: {}
        }

        this.expander = {
            refs: {}
        }
    }

    static propTypes = {
        items: PropTypes.array,
        title: PropTypes.string,
        image: PropTypes.string,
        label: PropTypes.string,
        link: PropTypes.string,
        loaded: PropTypes.bool,
        path: PropTypes.string
    }

    expand = item => ref => {
        this.setState({
            hasExpandedItem: true,
            expandedItemData: item
        })
        this.expander.refs.item = ref;
        console.log(this.expander.refs.expanded)
        setExpandable({
            wrapper: this.expander.refs.wrapper,
            item: this.expander.refs.item,
            drawer: this.expander.refs.drawer
        })
    }

    render() {

        const { items, title, image, label, link, loaded, path } = this.props;
        const { hasExpandedItem, expandedItemData } = this.state;

        return (
            <div className="collection-list collection-list--thumbnails expandable-wrapper expandable-wrapper--leadership" ref={ ref => {this.expander.refs.wrapper = ref} }>
                { loaded ?
                    <ul>
                        {items.map( (item, index) =>
                            <ThumbnailCollectionExpandableItem
                                key={index}
                                title={ item[title] }
                                image={ item[image] }
                                label={ item[label] }
                                link={ item[link] }
                                path={ path }
                                expand={ this.expand(item) }
                            />
                        )}
                    </ul> :
                    <p>Loading</p>
                }

                <div className="expandable-container" ref={ ref => {this.expander.refs.drawer = ref} }>
                    { hasExpandedItem ?
                        <div className="expandable-container__contents">
                            <h1>{expandedItemData[title]}</h1>
                            <h2>{expandedItemData[label]}</h2>
                        </div> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default ThumbnailCollectionExpandable;
