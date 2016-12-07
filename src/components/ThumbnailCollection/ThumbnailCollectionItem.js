import React, { Component, PropTypes } from 'react';

class ThumbnailCollectionItem extends Component {

    handleClick = () => {

        const { link, path } = this.props;

        if (path && link) {
            const routerPath = `${path}/${link}`
            this.context.router.push(routerPath)
        }


    }

    render() {
        const { label, title, image } = this.props;

        return (
            <li className="thumbnail-item" onClick={this.handleClick}>
                <div className="thumbnail-item__img" style={{backgroundImage: `url(${image})`}}>
                    <img src={image} role="presentation" />
                </div>
                <h3 className="thumbnail-item__headline">
                    {title}
                </h3>
                <div className="thumbnail-item__label">{label}</div>
            </li>
        )
    }
}

ThumbnailCollectionItem.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  path: PropTypes.string
};

ThumbnailCollectionItem.contextTypes = {
    router: React.PropTypes.object
}

export default ThumbnailCollectionItem;
