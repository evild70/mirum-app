import React, { PropTypes } from 'react';

export default function MainNavButton({className}) {
    return (
        <svg id="icon-hamburger" viewBox="0 0 1024 1024">
          <title>hamburger</title>
          <path d="M0 460.8h1024v102.4h-1024v-102.4z"></path>
          <path d="M0 824.32h1024v102.4h-1024v-102.4z"></path>
          <path d="M0 97.28h1024v102.4h-1024v-102.4z"></path>
        </svg>
    )
}

MainNavButton.propTypes = {
    className: PropTypes.string
}
