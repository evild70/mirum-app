import React, { Component, PropTypes } from 'react';
import ThumbnailCollectionExpandableItem from './ThumbnailCollectionExpandableItem';
import { toggleExpandable, initExpandable } from '../../helpers/expander';

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

    componentDidMount() {
        initExpandable(this.expander.refs.wrapper)
    }

    expand = item => ref => {
        this.setState({
            hasExpandedItem: true,
            expandedItemData: item
        })
        this.expander.refs.item = ref;
        toggleExpandable({
            wrapper: this.expander.refs.wrapper,
            item: this.expander.refs.item,
            drawer: this.expander.refs.drawer
        })
    }

    render() {

        const { items, title, image, label, link, loaded, path } = this.props;
        const { hasExpandedItem, expandedItemData } = this.state;

        return (
            <div>
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
                            <div className="expandable-container__inner">
                                <div className="expandable-container__contents">
                                    <h1>{expandedItemData[title]}</h1>
                                    <p>{expandedItemData[label]}</p>
                                    <p>Thingy magij Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="expandable-container__close" tabIndex="0">Close</div>
                            </div> :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ThumbnailCollectionExpandable;
