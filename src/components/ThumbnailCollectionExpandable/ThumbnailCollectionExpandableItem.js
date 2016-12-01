import React, { Component, PropTypes } from 'react';

class ThumbnailCollectionExpandableItem extends Component {

    onClick = () => {
        this.props.expand(this.itemRef);
    }
    render() {
        const { label, title, image } = this.props;

        return (
            <li className="thumbnail-item expandable-item" onClick={this.onClick}>
                <img className="thumbnail-item__img" src={image} role="presentation" ref={ ref => { this.itemRef = ref } } />
                <h3 className="thumbnail-item__headline">
                    {title}
                </h3>
                <div className="thumbnail-item__label">{label}</div>
            </li>
        )
    }
}

ThumbnailCollectionExpandableItem.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  expand: PropTypes.func
};

export default ThumbnailCollectionExpandableItem;
